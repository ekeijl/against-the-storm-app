export const building = [
  "bricks",
  "fabric",
  "parts",
  "planks",
  "wildfireEssence",
];

export const consumable = [
  "ale",
  "boots",
  "coats",
  "incense",
  "scrolls",
  "tea",
  "trainingGear",
  "wine",
];

export const crafting = [
  "algae",
  "barrels",
  "clay",
  "clearanceWater",
  "copperBars",
  "copperOre",
  "crystalizedDew",
  "drizzleWater",
  "dye",
  "flour",
  "grain",
  "herbs",
  "leather",
  "pipes",
  "plantFiber",
  "pottery",
  "reed",
  "resin",
  "scales",
  "stone",
  "stormWater",
  "waterskins",
];

export const food = [
  "berries",
  "biscuits",
  "eggs",
  "fish",
  "insects",
  "jerky",
  "meat",
  "mushrooms",
  "paste",
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
