import { useState, useMemo, useRef, useEffect } from "react";
import ForceGraph3D from "react-force-graph-3d";
import type { ForceGraphMethods } from "react-force-graph-3d";

import { useElementSize } from "usehooks-ts";

import { GoodsSelector } from "../components/GoodsSelector";
import { Stars } from "../components/Stars";
import { T } from "../components/T";

import { Building, buildings, productsPerBuilding } from "../data/buildings";
import { Page } from "../components/Page";
import "./GoodsPage.css";
import {
  getLinkColorBy,
  getLinksForNodes,
  getNodesForRecipe,
  isNodeVisible,
  nodeThreeObject,
  Recipe,
  renderLabel,
  renderLink,
  updateLink,
} from "./GoodsPageUtil";

type BuildingRecipeTuple = [Building, Recipe | undefined];

type BuildingsForItemProps = {
  buildings: Building[];
  itemId: string;
  activeId?: string;
  onSelect: (id: string) => void;
};

const BuildingsForItem = ({
  buildings,
  itemId,
  activeId,
  onSelect,
}: BuildingsForItemProps) => {
  const buildingsAndRecipe = useMemo(() => {
    return buildings
      .map((b: Building): BuildingRecipeTuple => {
        return [b, b?.recipes?.find((r) => r.product.id === itemId)];
      })
      .sort(([, r1], [, r2]) => (r1 && r2 ? r1.stars - r2.stars : 0));
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
            <T>{b.id}</T> <Stars nr={r?.stars} />
          </button>
        );
      })}
    </div>
  );
};

const GoodsPage = (): JSX.Element => {
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
    const recipe = building?.recipes?.find(
      ({ product: { id } }) => id === good
    );

    if (!recipe) return null;

    const nodes = getNodesForRecipe(recipe);
    const links = getLinksForNodes(good, nodes);

    return { nodes, links };
  }, [buildingId, good]);

  return (
    <Page className="goods-page" isFullHeight>
      <div className="goods-filters">
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
      </div>

      <div className="goods-graph" ref={containerRef}>
        {data ? (
          <ForceGraph3D
            graphData={data}
            ref={graphRef}
            width={width}
            height={height}
            backgroundColor="rgb(0,0,0,0.5)"
            nodeVisibility={isNodeVisible}
            nodeThreeObject={nodeThreeObject}
            onNodeClick={(node) => setBuilding(String(node.id))}
            linkThreeObjectExtend={true}
            linkLabel={renderLabel}
            linkThreeObject={renderLink}
            linkPositionUpdate={updateLink}
            linkColor="rgba(200, 0, 0, 1)"
            linkWidth={1}
            linkAutoColorBy={getLinkColorBy}
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

export default GoodsPage;
