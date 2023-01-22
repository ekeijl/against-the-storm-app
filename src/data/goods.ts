export const building = [
  "bricks",
  "fabric",
  "parts",
  "planks",
  "wildfireEssence",
];

export const consumable = [
  "ale",
  "coats",
  "cosmetics",
  "incense",
  "scrolls",
  "trainingGear",
  "wine",
];

export const crafting = [
  "barrels",
  "clay",
  "copperBars",
  "copperOre",
  "crystalizedDew",
  "flour",
  "grain",
  "herbs",
  "leather",
  "pigment",
  "pipes",
  "plantFiber",
  "pottery",
  "reed",
  "resin",
  "sparkdew",
  "stone",
  "waterskins",
];

export const food = [
  "berries",
  "biscuits",
  "eggs",
  "insects",
  "jerky",
  "meat",
  "mushrooms",
  "pickledGoods",
  "pie",
  "roots",
  "skewers",
  "vegetables",
];

export const fuel = [
  "coal",
  "infusedTools",
  "oil",
  "purgingFire",
  "seaMarrow",
  "simpleTools",
  "wood",
];

export const trade = [
  "amber",
  "packOfBuildingMaterials",
  "packOfCrops",
  "packOfLuxuryGoods",
  "packOfProvisions",
  "packOfTradeGoods",
];

const toOption = (id: string) => ({ label: id, value: id });

export const grouped = [
  { label: "Building materials", options: building.map(toOption) },
  { label: "Consumable", options: consumable.map(toOption) },
  { label: "Crafting", options: crafting.map(toOption) },
  { label: "Food", options: food.map(toOption) },
  { label: "Fuel and exploration", options: fuel.map(toOption) },
  { label: "Trade goods", options: trade.map(toOption) },
];

export const goods = [
  ...building,
  ...consumable,
  ...crafting,
  ...food,
  ...fuel,
  ...trade,
];
