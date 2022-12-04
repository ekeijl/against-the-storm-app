import { LinkObject, NodeObject } from "react-force-graph-3d";
import SpriteText from "three-spritetext";
import * as THREE from "three";

export interface Amount {
  id: string;
  amount?: number;
}
export interface Recipe {
  ingredients: Amount[][];
  product: Amount;
  stars: number;
}

export interface RecipeNode extends NodeObject {
  group?: number;
  id?: string | number;
  name?: string;
  isRecipe?: boolean;
  amount?: number;
}

export interface Link<T> extends Omit<LinkObject, "source"> {
  source?: string | number | T;
  group?: number;
  amount?: number;
}

export const getNodesForRecipe = (recipe: Recipe): RecipeNode[] => {
  const id = recipe.product.id;
  const recipeNodes: RecipeNode[] = [];

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

export const getLinksForNodes = (goodId: string, nodes: RecipeNode[]): Link<string>[] => {
  const links: Link<string>[] = [];
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

export const renderLink = (link: Link<RecipeNode>): SpriteText => {
  // extend link with text sprite
  // https://github.com/vasturiano/react-force-graph/blob/master/example/text-links/index-3d.html
  const recipeNode = link.source as RecipeNode;
  const amount = recipeNode?.amount || 0;
  const sprite = new SpriteText(String(amount));
  sprite.color = "lightgrey";
  sprite.textHeight = 5;
  return sprite;
};

// render node as THREE.js object
export const nodeThreeObject = ({ id, isRecipe, group }: RecipeNode): any => {
  if (isRecipe) return new THREE.Object3D();

  const imgTexture = new THREE.TextureLoader().load(`./img/goods/${id}.webp`);
  const material = new THREE.SpriteMaterial({ map: imgTexture });
  const sprite = new THREE.Sprite(material);

  const scale = group === -1 ? 24 : 12;
  sprite.scale.set(scale, scale, 1);

  return sprite;
};

type Coords = { [x: string]: number };

export const updateLink = (
  sprite: any,
  { start, end }: { start: Coords; end: Coords }
): null => {
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

export const isNodeVisible = (node: NodeObject): boolean => {
  const recipeNode = node as RecipeNode;
  return !recipeNode.isRecipe;
};

export const renderLabel = (link: LinkObject): string => {
  const recipeLink = link as Link<RecipeNode>;
  return String(recipeLink.amount);
};

export const getLinkColorBy = (link: LinkObject): string =>
  String((link as Link<RecipeNode>).group);
