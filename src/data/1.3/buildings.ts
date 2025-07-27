import { SpeciesName } from "../../types/Species";
import { Specialization } from "../../types/Specialization";
import { Service } from "../../types/Service";
import * as r from "./recipes";

export interface Recipe {
  ingredients: Amount[][];
  product: Amount;
  stars: number;
}

export interface Amount {
  id: string;
  amount: number;
}

export interface Building {
  id: string;
  cost: Amount[];
  recipes?: Recipe[];
  services?: Service[];
  specialization: Specialization[];
  speciesRequired?: SpeciesName;
}

export const buildings: Building[] = [
  {
    id: "advancedRainCollector",
    specialization: ["rainwater"],
    cost: [
      { id: "pipes", amount: 5 },
      { id: "parts", amount: 3 },
      { id: "planks", amount: 5 },
    ],
    recipes: [],
  },
  {
    id: "alchemistsHut",
    specialization: ["alchemy", "brewing", "rainwater"],
    cost: [
      { id: "plank", amount: 5 },
      { id: "brick", amount: 2 },
    ],
    recipes: [r.crystal2, r.tea2, r.wine2],
  },
  {
    id: "ancientHearth",
    specialization: ["warmth"],
    cost: [],
    recipes: [],
  },

  {
    id: "apothecary",
    specialization: ["alchemy", "rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea2, r.incense2, r.biscuits2],
  },

  {
    id: "artisan",
    specialization: ["tailoring"],
    cost: [
      { id: "plank", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.coats2, r.packOfLuxuryGoods2, r.barrels2],
  },

  {
    id: "bakery",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.biscuits2, r.pie2, r.pottery2],
  },

  {
    id: "bathHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },

  {
    id: "beanery",
    specialization: ["warmth", "rainwater"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.porridge3, r.pickledGoods2, r.crystal1],
  },

  {
    id: "beaverHouse",
    specialization: [],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [],
  },
  {
    id: "blightPost",
    specialization: ["alchemy", "warmth"],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 3 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
  },

  {
    id: "brewery",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3, r.pickledGoods1, r.packOfCrops1],
  },

  {
    id: "brickOven",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 5 }],
    recipes: [r.pie3, r.coal1, r.incense1],
  },

  {
    id: "brickyard",
    specialization: ["rainwater"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.bricks3, r.pottery2, r.crystal1],
  },

  {
    id: "butcher",
    specialization: ["meat"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers2, r.jerky2, r.oil2],
  },

  {
    id: "carpenter",
    specialization: ["woodworking"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks2, r.simpleTools2, r.packOfLuxuryGoods2],
  },

  {
    id: "cellar",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.wine3, r.pickledGoods1, r.jerky1],
  },
  {
    id: "clanHall",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
  },
  {
    id: "clayPit",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.clay, r.reedA2],
  },

  {
    id: "clothier",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.coats3, r.waterskins1, r.scrolls1],
  },

  {
    id: "cookhouse",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.skewers2, r.biscuits2, r.pigment2],
  },

  {
    id: "cooperage",
    specialization: ["woodworking", "rainwater"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.barrels3, r.coats2, r.tea1],
  },

  {
    id: "crudeWorkstation",
    specialization: [],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.planks0, r.fabric0, r.bricks0, r.pipes0],
  },

  {
    id: "distillery",
    specialization: ["brewing", "rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
      { id: "cloth", amount: 2 },
    ],
    recipes: [r.wine2, r.porridge2, r.barrels2],
  },

  {
    id: "druidsHut",
    specialization: ["alchemy"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.oil3, r.incense1, r.coats1],
  },
  {
    id: "explorersLodge",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },

  {
    id: "finesmith",
    specialization: ["alchemy", "rainwater"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 10 },
    ],
    recipes: [r.amber3, r.simpleTools3],
  },
  {
    id: "fieldKitchen",
    specialization: [],
    cost: [],
    recipes: [r.jerky0, r.porridge0, r.biscuits0, r.pickledGoods0],
  },
  {
    id: "flawlessBrewery",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3f, r.pickledGoods3f, r.packOfCrops3f],
  },
  {
    id: "flawlessRainMill",
    specialization: ["engineering", "farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls3, r.packOfBuildingMaterials3],
  },

  {
    id: "foragersCamp",
    specialization: ["farming"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "forestersHut",
    specialization: ["woodworking"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "forum",
    specialization: ["brewing"],
    cost: [
      { id: "fabric", amount: 4 },
      { id: "bricks", amount: 16 },
    ],
    recipes: [],
  },
  {
    id: "furnace",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.copperBars2, r.bricks2, r.pie2],
  },
  {
    id: "geyserPump",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 6 },
      { id: "pipes", amount: 4 },
    ],
  },
  {
    id: "granary",
    specialization: ["farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.packOfCrops2, r.pickledGoods2, r.fabric2],
  },
  {
    id: "greenhouse",
    specialization: ["farming", "rainwater"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.mushrooms2, r.herbs2],
  },
  {
    id: "grill",
    specialization: ["meat", "warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers3, r.copperBars1, r.ale1],
  },
  {
    id: "grove",
    specialization: ["woodworking"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "guildHouse",
    specialization: ["woodworking"],
    cost: [
      { id: "planks", amount: 40 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
  },
  {
    id: "hallowedHerbGarden",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "hallowedSmallFarm",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "harpyHouse",
    specialization: [],
    cost: [{ id: "fabric", amount: 4 }],
    recipes: [],
  },
  {
    id: "harvestersCamp",
    specialization: [],
    cost: [{ id: "wood", amount: 10 }],
    recipes: [],
  },
  {
    id: "herbGarden",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "herbalistsCamp",
    specialization: ["alchemy"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "humanHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "holyMarket",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "fabric", amount: 12 },
    ],
    recipes: [],
  },
  {
    id: "holyTemple",
    specialization: [],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "homestead",
    specialization: ["farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "kiln",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.coal3, r.bricks1, r.jerky1],
  },
  {
    id: "leatherworker",
    specialization: ["tailoring", "meat"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.waterskins3, r.fabric2, r.pigment2],
  },
  {
    id: "lizardHouse",
    specialization: [],
    cost: [
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "lumbermill",
    specialization: ["woodworking"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks3, r.scrolls1, r.packOfTradeGoods1],
  },
  {
    id: "mainWarehouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "makeshiftPost",
    specialization: [],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.packOfCrops0, r.packOfProvisions0, r.packOfBuildingMaterials0],
  },
  {
    id: "manufactory",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.trainingGear2, r.pigment2, r.packOfProvisions2],
  },
  {
    id: "market",
    specialization: [],
    cost: [
      { id: "planks", amount: 20 },
      { id: "fabric", amount: 12 },
    ],
    recipes: [],
  },
  {
    id: "mine",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 4 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "monastery",
    specialization: ["warmth", "brewing"],
    cost: [{ id: "bricks", amount: 20 }],
    recipes: [],
  },
  {
    id: "plantation",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "press",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.oil3, r.flour1, r.packOfLuxuryGoods1],
  },
  {
    id: "provisioner",
    specialization: [],
    cost: [
      { id: "planks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.flour2, r.barrels2, r.packOfProvisions2],
  },
  {
    id: "rainCollector",
    specialization: ["rainwater"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "parts", amount: 1 },
    ],
    recipes: [],
  },
  {
    id: "rainMill",
    specialization: ["engineering", "farming"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls1, r.packOfBuildingMaterials1],
  },
  {
    id: "rainpunkFoundry",
    specialization: ["engineering", "warmth"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.parts3, r.wildfireEssence3],
  },
  {
    id: "ranch",
    specialization: ["meat"],
    cost: [{ id: "planks", amount: 5 }],
    recipes: [r.meat1, r.leather1, r.eggs1],
  },
  {
    id: "scavengersCamp",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "scribe",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.scrolls3, r.ale2, r.simpleTools1],
  },
  {
    id: "shelter",
    specialization: [],
    cost: [{ id: "wood", amount: 10 }],
    recipes: [],
  },
  {
    id: "smallFarm",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "smallForagersCamp",
    specialization: ["farming"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "smallHearth",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 5 },
      { id: "wildfireEssence", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "smallHerbalistsCamp",
    specialization: ["alchemy"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "smallTrappersCamp",
    specialization: ["meat"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "smelter",
    specialization: ["warmth"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.copperBars3, r.trainingGear2, r.biscuits1],
  },
  {
    id: "smithy",
    specialization: ["engineering", "warmth"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.pipes2, r.packOfTradeGoods2],
  },
  {
    id: "smokehouse",
    specialization: ["warmth", "meat"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.jerky3, r.pottery1, r.incense1],
  },
  {
    id: "stampingMill",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.pottery3, r.flour2, r.copperBars1],
  },
  {
    id: "stonecuttersCamp",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "supplier",
    specialization: ["tailoring"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.waterskins2, r.flour2, r.planks2],
  },
  {
    id: "tavern",
    specialization: ["brewing"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "teaDoctor",
    specialization: [],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "cloth", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "teahouse",
    specialization: ["alchemy", "rainwater"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea3, r.porridge2, r.waterskins1],
  },
  {
    id: "temple",
    specialization: ["warmth"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "tinctury",
    specialization: ["brewing", "alchemy"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.pigment2, r.wine2, r.ale2],
  },
  {
    id: "tinkerer",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.trainingGear2, r.packOfBuildingMaterials2],
  },
  {
    id: "toolshop",
    specialization: ["engineering"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.simpleTools3, r.pipes2, r.barrels1],
  },
  {
    id: "tradingPost",
    specialization: [],
    cost: [{ id: "wood", amount: 10 }],
    recipes: [],
  },
  {
    id: "trappersCamp",
    specialization: ["meat"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "warehouse",
    specialization: [],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "parts", amount: 1 },
    ],
    recipes: [],
  },
  {
    id: "weaver",
    specialization: ["tailoring"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.fabric3, r.trainingGear1, r.packOfTradeGoods1],
  },
  {
    id: "woodcuttersCamp",
    specialization: ["woodworking"],
    cost: [{ id: "parts", amount: 2 }],
    recipes: [],
  },
  {
    id: "workshop",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.planks2, r.fabric2, r.bricks2, r.pipes0],
  },
];

// [id, Set(...ingredients)]]
const ingredientTuples: [string, Set<string>][] = buildings.map((b) => {
  const ingredients =
    b.recipes?.map((r) => {
      return r.ingredients.map((i) => {
        return i.map((p) => p.id);
      });
    }) ?? [];

  return [b.id, new Set<string>(ingredients.flat(2))];
});

// Pre-calculate a mapping of [building id => Set of ingredients (unique)]
// Iterating over every building -> recipes -> ingredients -> id would cause performance issues
export const ingredientsPerBuilding = new Map<string, Set<string>>(
  ingredientTuples
);

const productTuples: [string, Set<string>][] = buildings.map((b) => {
  const products = b.recipes?.map((r) => r.product.id) ?? [];

  return [b.id, new Set<string>(products)];
});

// Map [buildingId => Set of products (unique)]
export const productsPerBuilding = new Map<string, Set<string>>(productTuples);
