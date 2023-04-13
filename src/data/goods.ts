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
  "tea",
  "trainingGear",
  "wine",
];

export const crafting = [
  "barrels",
  "clay",
  "clearanceWater",
  "copperBars",
  "copperOre",
  "crystalizedDew",
  "drizzleWater",
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
  "stone",
  "stormWater",
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
  "porridge",
  "roots",
  "skewers",
  "vegetables",
];

export const fuel = [
  "coal",
  "oil",
  "purgingFire",
  "seaMarrow",
  "tools",
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
