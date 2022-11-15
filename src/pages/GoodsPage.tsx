import { useState, useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import SpriteText from "three-spritetext";
import ForceGraph3D from "react-force-graph-3d";

import { useElementSize } from "usehooks-ts";

import { GoodsSelector } from "../components/GoodsSelector";
import { Stars } from "../components/Stars";

import * as r from "../data/recipes";
import { buildings, productsPerBuilding } from "../data/buildings";
import { Page } from "../components/Page";
import "./GoodsPage.css";

interface Amount {
	id: string;
	amount?: number;
}
interface Recipe {
	ingredients: Amount[][];
	product: Amount;
	stars: number;
}
interface AmountGroup extends Amount {
	group: number;
	isRecipe?: boolean;
}

const getNodesForRecipe = (recipe) => {
	const id = recipe.product.id;
	let recipeNodes: AmountGroup[] = [];

	// One node for the selected good type
	recipeNodes.push({ id, name: id, group: -1, amount: 0 });

	recipe.ingredients.forEach((goods, index) => {
		// One node per "ingredient group"
		recipeNodes.push({
			id: `ingredient-${index}`,
			group: index,
			amount: 0,
			isRecipe: true
		});

		// One node for each ingredient of an ingredient group
		goods.forEach((good) => {
			recipeNodes.push({
				...good,
				name: good.id,
				amount: good.amount,
				group: index
			});
		});
	});

	return recipeNodes;
};

const getLinksForNodes = (goodId, nodes) => {
	let links = [];
	nodes
		.filter(({ group }) => group !== -1)
		.forEach(({ id, isRecipe, group, amount }) => {
			links.push(
				isRecipe
					? {
							source: `ingredient-${group}`,
							target: goodId,
							group
					  }
					: {
							source: id,
							target: `ingredient-${group}`,
							amount: amount,
							group
					  }
			);
		});
	return links;
};

// render node as THREE.js object
const nodeThreeObject = ({ id, isRecipe, group }) => {
	if (isRecipe) return null;

	const imgTexture = new THREE.TextureLoader().load(`./img/goods/${id}.webp`);
	const material = new THREE.SpriteMaterial({ map: imgTexture });
	const sprite = new THREE.Sprite(material);

	const scale = group === -1 ? 24 : 12;
	sprite.scale.set(scale, scale);

	return sprite;
};

const BuildingsForItem = ({ buildings, itemId, activeId, onSelect }) => {
	const buildingsAndRecipe = useMemo(() => {
		return buildings
			.map((b) => {
				return [
					b,
					itemId
						? b.recipes.find((r) => r.product.id === itemId)
						: null
				];
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
						{b.id} <Stars nr={r.stars} />
					</button>
				);
			})}
		</div>
	);
};

const renderLink = (link) => {
	// extend link with text sprite
	// https://github.com/vasturiano/react-force-graph/blob/master/example/text-links/index-3d.html
	const sprite = new SpriteText(`${link.source.amount || ""}`);
	sprite.color = "lightgrey";
	sprite.textHeight = 5;
	return sprite;
};

const updateLink = (sprite, { start, end }) => {
	const middlePos = Object.assign(
		...["x", "y", "z"].map((c) => ({
			[c]: start[c] + (end[c] - start[c]) / 2 // calc middle point
		}))
	);

	// Position sprite
	Object.assign(sprite.position, middlePos);
};

export const GoodsPage = () => {
	const graphRef = useRef();
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
		return buildings.filter(({ id }) =>
			productsPerBuilding.get(id)?.has(good)
		);
	}, [good]);

	const [buildingId, setBuilding] = useState(() => buildingsForItem[0]?.id);

	useEffect(() => {
		setBuilding(buildingsForItem[0]?.id);
	}, [buildingsForItem, good]);

	const data = useMemo(() => {
		if (!buildingId || !buildings) return null;

		const building = buildings?.find(({ id }) => id === buildingId);
		const recipe = building?.recipes.find(
			({ product: { id } }) => id === good
		);

		if (!recipe) return null;

		const nodes = getNodesForRecipe(recipe);

		let links = getLinksForNodes(good, nodes);

		return { nodes, links };
	}, [buildingId, good]);

	return (
		<Page className="goods-page">
			<GoodsSelector value={good} onChange={(value) => setGood(value)} />

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
						nodeVisibility={(node) => !node.isRecipe}
						nodeThreeObject={nodeThreeObject}
						onNodeClick={setBuilding}
						linkThreeObjectExtend={true}
						linkLabel={(node) => node.amount}
						linkThreeObject={renderLink}
						linkPositionUpdate={updateLink}
						linkColor="rgba(200, 0, 0, 1)"
						linkWidth={1}
						linkAutoColorBy={(d) => d.group}
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
