import { useState, useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import ForceGraph3D, {
  ForceGraphMethods,
  LinkObject,
  NodeObject,
} from "react-force-graph-3d";

import { useElementSize } from "usehooks-ts";

import { GoodsSelector } from "../components/GoodsSelector";
import { Stars } from "../components/Stars";

import { Building, buildings, productsPerBuilding } from "../data/buildings";
import { Page } from "../components/Page";
import "./GoodsPage.css";
import { Object3D } from "three";

interface Amount {
  id: string;
  amount?: number;
}
interface Recipe {
  ingredients: Amount[][];
  product: Amount;
  stars: number;
}

interface RecipeNode extends NodeObject {
  group?: number;
  id?: string | number;
  name?: string;
  isRecipe?: boolean;
  amount?: number;
}

interface Link<T> extends Omit<LinkObject, "source"> {
  source?: string | number | T;
  group?: number;
  amount?: number;
}

type BuildingRecipeTuple = [Building, Recipe | undefined];

const getNodesForRecipe = (recipe: Recipe) => {
  const id = recipe.product.id;
  let recipeNodes: RecipeNode[] = [];

  // One node for the selected good type
  recipeNodes.push({ id, name: id, group: -1, amount: 0 });

  recipe.ingredients.forEach((goods, index) => {
    // One node per "ingredient group"
    recipeNodes.push({
      id: `ingredient-${index}`,
      group: index,
      amount: 0,
      isRecipe: true,
    });

    // One node for each ingredient of an ingredient group
    goods.forEach((good) => {
      recipeNodes.push({
        ...good,
        name: good.id,
        amount: good.amount,
        group: index,
      });
    });
  });

  return recipeNodes;
};

const getLinksForNodes = (goodId: string, nodes: RecipeNode[]) => {
  let links: Link<string>[] = [];
  nodes
    .filter(({ group }) => group !== -1)
    .forEach(({ id, isRecipe, group, amount }) => {
      links.push(
        isRecipe
          ? {
              source: `ingredient-${group}`,
              target: goodId,
              group,
            }
          : {
              source: id,
              target: `ingredient-${group}`,
              amount: amount,
              group,
            }
      );
    });
  return links;
};

const BuildingsForItem = ({
  buildings,
  itemId,
  activeId,
  onSelect,
}: {
  buildings: Building[];
  itemId: string;
  activeId?: string;
  onSelect: (id: string) => void;
}) => {
  const buildingsAndRecipe = useMemo(() => {
    return buildings
      .map((b: Building): BuildingRecipeTuple => {
        return [b, b.recipes.find((r) => r.product.id === itemId)];
      })
      .sort(([_, r1], [__, r2]) => (r1 && r2 ? r1.stars - r2.stars : 0));
  }, [itemId, buildings]);

  return (
    <div className="buildings-for-item">
      {buildingsAndRecipe.map(([b, r]) => {
        return (
          <button
            key={b.id}
            onClick={() => onSelect(b.id)}
            className={b.id === activeId ? "active" : ""}
          >
            {b.id} <Stars nr={r?.stars} />
          </button>
        );
      })}
    </div>
  );
};

const renderLink = (link: Link<RecipeNode>) => {
  // extend link with text sprite
  // https://github.com/vasturiano/react-force-graph/blob/master/example/text-links/index-3d.html
  const amount = (link.source as RecipeNode)?.amount || 0;
  const sprite = new SpriteText(String(amount));
  sprite.color = "lightgrey";
  sprite.textHeight = 5;
  return sprite;
};

type Coords = { [x: string]: number };

const updateLink = (
  sprite: Object3D,
  { start, end }: { start: Coords; end: Coords }
) => {
  const middlePos = Object.assign(
    {},
    ...["x", "y", "z"].map((c: string) => ({
      [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
    }))
  );

  // Position sprite
  Object.assign(sprite.position, middlePos);

  return null;
};

// render node as THREE.js object
const nodeThreeObject = ({ id, isRecipe, group }: RecipeNode) => {
  if (isRecipe) return new THREE.Object3D();

  const imgTexture = new THREE.TextureLoader().load(`./img/goods/${id}.webp`);
  const material = new THREE.SpriteMaterial({ map: imgTexture });
  const sprite = new THREE.Sprite(material);

  const scale = group === -1 ? 24 : 12;
  sprite.scale.set(scale, scale, 1);

  return sprite;
};

export const GoodsPage = () => {
  const graphRef = useRef<ForceGraphMethods>();
  const [good, setGood] = useState("ale");

  const [containerRef, { width, height }] = useElementSize();

  // After selection changes, zoom in on the graph
  useEffect(() => {
    setTimeout(() => {
      if (graphRef?.current) {
        // params: animation time (ms), padding to edge (pixels)
        graphRef.current.zoomToFit(1000, 1);
      }
    }, 500);
  }, [good, graphRef]);

  const buildingsForItem = useMemo(() => {
    return buildings.filter(({ id }) => productsPerBuilding.get(id)?.has(good));
  }, [good]);

  const [buildingId, setBuilding] = useState<string | undefined>(
    () => buildingsForItem[0]?.id
  );

  useEffect(() => {
    setBuilding(buildingsForItem[0]?.id);
  }, [buildingsForItem, good]);

  const data = useMemo(() => {
    if (!buildingId || !buildings) return null;

    const building = buildings?.find(({ id }) => id === buildingId);
    const recipe = building?.recipes.find(({ product: { id } }) => id === good);

    if (!recipe) return null;

    const nodes = getNodesForRecipe(recipe);
    const links = getLinksForNodes(good, nodes);

    return { nodes, links };
  }, [buildingId, good]);

  return (
    <Page className="goods-page">
      <GoodsSelector
        value={good}
        onChange={(value: string) => setGood(value)}
      />

      <BuildingsForItem
        itemId={good}
        buildings={buildingsForItem}
        activeId={buildingId}
        onSelect={setBuilding}
      />

      <div className="goods-graph" ref={containerRef}>
        {data ? (
          <ForceGraph3D
            graphData={data}
            ref={graphRef}
            width={width}
            height={height}
            nodeVisibility={(node) => {
              const recipeNode = node as RecipeNode;
              return !recipeNode.isRecipe;
            }}
            nodeThreeObject={nodeThreeObject}
            onNodeClick={(node) => setBuilding(String(node.id))}
            linkThreeObjectExtend={true}
            linkLabel={(link) => String((link as Link<RecipeNode>).amount)}
            linkThreeObject={renderLink}
            linkPositionUpdate={updateLink}
            linkColor="rgba(200, 0, 0, 1)"
            linkWidth={1}
            linkAutoColorBy={(link) => String((link as Link<RecipeNode>).group)}
            linkOpacity={0.5}
            numDimensions={2} // 2 -> flat (x,y) graph
            dagMode="zin" // Layout algorithm for the graph: td/bu/lr/rl/zout/zin/radialout/radialin
          />
        ) : (
          <p>No recipes for {good}!</p>
        )}
      </div>
    </Page>
  );
};
