import { SpeciesName } from "../types/Species";
import * as r from "./recipes_1_4";

export interface Recipe {
  ingredients: Amount[][];
  product: Amount;
  stars: number;
}

export interface Amount {
  id: string;
  amount: number;
}

interface Service {
  id: string;
}

export interface Building {
  id: string;
  cost: Amount[];
  recipes?: Recipe[];
  services?: Service[];
  specialization: string[];
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
    specialization: ["alchemy", "brewing", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
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
    specialization: ["alchemy", "rainwater", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea2, r.dye2, r.jerky2],
    speciesRequired: "harpy",
  },

  {
    id: "artisan",
    specialization: ["cloth", "blightrot"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [r.barrels2, r.coats2, r.scrolls2],
    speciesRequired: "harpy",
  },

  {
    id: "bakery",
    specialization: ["warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.biscuits2, r.pie2, r.pottery2],
  },

  {
    id: "bathHouse",
    specialization: ["rainwater", "blightrot"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
    speciesRequired: "harpy",
  },

  {
    id: "beanery",
    specialization: ["warmth", "rainwater", "blightrot"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.porridge3, r.pickledGoods1, r.crystal1],
    speciesRequired: "fox",
  },

  {
    id: "beaverHouse",
    specialization: [],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [],
    speciesRequired: "beaver",
  },
  {
    id: "blightPost",
    specialization: ["alchemy", "warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 4 },
      { id: "bricks", amount: 3 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
  },

  {
    id: "brewery",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3, r.porridge2, r.packOfCrops1],
    speciesRequired: "human",
  },

  {
    id: "brickOven",
    specialization: ["warmth", "blightrot"],
    cost: [{ id: "bricks", amount: 5 }],
    recipes: [r.biscuits3, r.incense2, r.coal1],
    speciesRequired: "human",
  },

  {
    id: "brickyard",
    specialization: ["masonry", "blightrot"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.bricks3, r.pottery2, r.crystal1],
  },

  {
    id: "butcher",
    specialization: ["meat", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers2, r.jerky2, r.oil2],
    speciesRequired: "lizard",
  },

  {
    id: "cannery",
    specialization: ["blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.paste3, r.wine2, r.biscuits1],
    speciesRequired: "frog",
  },

  {
    id: "carpenter",
    specialization: ["woodworking", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks2, r.simpleTools2, r.packOfLuxuryGoods2],
  },

  {
    id: "cellar",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.wine3, r.pickledGoods2, r.packOfProvisions1],
    speciesRequired: "beaver",
  },
  {
    id: "clanHall",
    specialization: ["warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
    speciesRequired: "lizard",
  },
  {
    id: "clayPit",
    specialization: ["masonry", "blightrot"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.clay, r.reedA2, r.resin2],
  },

  {
    id: "clothier",
    specialization: ["cloth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.coats3, r.packOfBuildingMaterials2, r.waterskins1],
  },

  {
    id: "cobbler",
    specialization: ["cloth", "blightrot"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.boots3, r.packOfBuildingMaterials2, r.dye1],
  },

  {
    id: "cookhouse",
    specialization: ["warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 4 },
    ],
    recipes: [r.skewers2, r.biscuits2, r.porridge2],
  },

  {
    id: "cooperage",
    specialization: ["woodworking", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.barrels3, r.coats2, r.packOfLuxuryGoods1],
  },

  {
    id: "crudeWorkstation",
    specialization: ["blightrot"],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.planks0, r.fabric0, r.bricks0, r.pipes0],
  },

  {
    id: "distillery",
    specialization: ["brewing", "rainwater", "blightrot"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
      { id: "cloth", amount: 2 },
    ],
    recipes: [r.ale2, r.incense2, r.pickledGoods2],
  },

  {
    id: "druidsHut",
    specialization: ["alchemy", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.oil3, r.tea2, r.coats1],
  },
  {
    id: "explorersLodge",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "fieldKitchen",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers0, r.paste0, r.biscuits0, r.pickledGoods0],
  },

  {
    id: "finesmith",
    specialization: ["alchemy", "blightrot"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 10 },
    ],
    recipes: [r.amber3, r.simpleTools3],
  },
  {
    id: "flawlessBrewery",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "planks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.ale3f, r.porridge3, r.packOfCrops3f],
  },
  {
    id: "flawlessCellar",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.wine3, r.pickledGoods3, r.packOfProvisions3],
  },
  {
    id: "flawlessCooperage",
    specialization: ["woodworking", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.barrels3, r.coats3, r.packOfLuxuryGoods3],
  },

  {
    id: "flawlessDruidsHut",
    specialization: ["alchemy", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.oil3, r.tea3, r.coats3],
  },
  {
    id: "flawlessLeatherworker",
    specialization: ["cloth", "meat", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.waterskins3, r.boots3, r.trainingGear3],
  },
  {
    id: "flawlessRainMill",
    specialization: ["engineering", "farming", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls3, r.paste3],
  },
  {
    id: "flawlessSmelter",
    specialization: ["warmth", "blightrot"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.copperBars3, r.trainingGear3, r.pie3],
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
    specialization: ["blightrot"],
    cost: [
      { id: "fabric", amount: 4 },
      { id: "bricks", amount: 16 },
    ],
    recipes: [],
    speciesRequired: "frog",
  },
  {
    id: "foxHouse",
    specialization: [],
    cost: [
      { id: "planks", amount: 4 },
      { id: "crystalizedDew", amount: 2 },
    ],
    recipes: [],
    speciesRequired: "fox",
  },
  {
    id: "frogHouse",
    specialization: [],
    cost: [{ id: "bricks", amount: 6 }],
    recipes: [],
    speciesRequired: "frog",
  },
  {
    id: "furnace",
    specialization: ["warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.pie2, r.skewers2, r.copperBars2],
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
    specialization: ["farming", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.pickledGoods2, r.fabric2, r.packOfCrops2],
  },
  {
    id: "greenhouse",
    specialization: ["farming", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.mushrooms2, r.herbs2],
  },
  {
    id: "grill",
    specialization: ["meat", "warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.skewers3, r.paste2, r.copperBars1],
  },

  {
    id: "guildHouse",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 40 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
    speciesRequired: "beaver",
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
    speciesRequired: "harpy",
  },
  {
    id: "harvestersCamp",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
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
    speciesRequired: "human",
  },
  {
    id: "holyGuildHouse",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 40 },
      { id: "fabric", amount: 4 },
    ],
    recipes: [],
  },
  {
    id: "holyMarket",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "fabric", amount: 12 },
    ],
    recipes: [],
  },
  {
    id: "holyTemple",
    specialization: ["warmth", "blightrot"],
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
    id: "hydrant",
    specialization: [],
    cost: [
      { id: "planks", amount: 3 },
      { id: "bricks", amount: 1 },
    ],
    recipes: [],
  },
  {
    id: "kiln",
    specialization: ["warmth", "masonry", "blightrot"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.coal3, r.bricks1, r.jerky1],
  },
  {
    id: "leatherworker",
    specialization: ["cloth", "meat", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.waterskins3, r.boots2, r.trainingGear1],
    speciesRequired: "lizard",
  },
  {
    id: "lizardHouse",
    specialization: [],
    cost: [
      { id: "fabric", amount: 2 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [],
    speciesRequired: "lizard",
  },
  {
    id: "lumbermill",
    specialization: ["woodworking", "blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.planks3, r.scrolls1, r.packOfTradeGoods1],
  },
  {
    id: "mainWarehouse",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "parts", amount: 2 },
    ],
    recipes: [],
  },
  {
    id: "makeshiftPost",
    specialization: ["blightrot"],
    cost: [{ id: "wood", amount: 5 }],
    recipes: [r.packOfCrops0, r.packOfProvisions0, r.packOfBuildingMaterials0],
  },
  {
    id: "manufactory",
    specialization: ["cloth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.fabric2, r.barrels2, r.dye2],
  },
  {
    id: "market",
    specialization: ["blightrot"],
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
    specialization: ["warmth", "brewing", "blightrot"],
    cost: [{ id: "bricks", amount: 20 }],
    recipes: [],
    speciesRequired: "human",
  },
  {
    id: "pantry",
    specialization: ["farming", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.porridge2, r.pie2, r.packOfLuxuryGoods2],
    speciesRequired: "frog",
  },
  {
    id: "plantation",
    specialization: ["farming"],
    cost: [{ id: "planks", amount: 2 }],
    recipes: [],
  },
  {
    id: "press",
    specialization: ["engineering", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.oil3, r.flour1, r.paste1],
  },
  {
    id: "provisioner",
    specialization: ["blightrot"],
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
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "rainMill",
    specialization: ["engineering", "farming", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.flour3, r.scrolls1, r.paste1],
  },
  {
    id: "rainpunkFoundry",
    specialization: ["engineering", "warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 8 },
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.parts3, r.wildfireEssence3],
  },
  {
    id: "ranch",
    specialization: ["meat", "blightrot"],
    cost: [{ id: "planks", amount: 5 }],
    recipes: [r.meat1, r.leather1, r.eggs1],
  },
  {
    id: "scribe",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.scrolls3, r.packOfTradeGoods2, r.ale1],
    speciesRequired: "beaver",
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
    id: "smallFishingHut",
    specialization: [],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
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
    id: "smallWarehouse",
    specialization: ["blightrot"],
    cost: [
      { id: "bricks", amount: 2 },
      { id: "fabric", amount: 2 },
      { id: "parts", amount: 1 },
    ],
    recipes: [],
  },
  {
    id: "smelter",
    specialization: ["warmth", "blightrot"],
    cost: [{ id: "bricks", amount: 4 }],
    recipes: [r.copperBars3, r.trainingGear2, r.pie1],
  },
  {
    id: "smithy",
    specialization: ["engineering", "warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.pipes2, r.packOfTradeGoods2],
  },
  {
    id: "smokehouse",
    specialization: ["warmth", "meat", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.jerky3, r.pottery1, r.incense1],
  },
  {
    id: "stampingMill",
    specialization: ["engineering", "masonry", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.bricks2, r.flour2, r.copperBars2],
  },
  {
    id: "stonecuttersCamp",
    specialization: ["masonry"],
    cost: [
      { id: "wood", amount: 10 },
      { id: "parts", amount: 3 },
    ],
    recipes: [],
  },
  {
    id: "supplier",
    specialization: ["cloth", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.flour2, r.planks2, r.waterskins2],
  },
  {
    id: "tavern",
    specialization: ["brewing", "blightrot"],
    cost: [
      { id: "planks", amount: 20 },
      { id: "bricks", amount: 4 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "teaDoctor",
    specialization: ["blightrot"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "cloth", amount: 8 },
    ],
    recipes: [],
    speciesRequired: "fox",
  },
  {
    id: "teahouse",
    specialization: ["alchemy", "rainwater", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.tea3, r.incense2, r.waterskins1],
    speciesRequired: "fox",
  },
  {
    id: "temple",
    specialization: ["warmth", "blightrot"],
    cost: [
      { id: "planks", amount: 10 },
      { id: "bricks", amount: 8 },
      { id: "fabric", amount: 8 },
    ],
    recipes: [],
  },
  {
    id: "tinctury",
    specialization: ["brewing", "alchemy", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.dye3, r.ale2, r.wine1],
  },
  {
    id: "tinkerer",
    specialization: ["engineering", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "bricks", amount: 2 },
    ],
    recipes: [r.simpleTools2, r.trainingGear2, r.pottery2],
  },
  {
    id: "toolshop",
    specialization: ["engineering", "blightrot"],
    cost: [
      { id: "planks", amount: 5 },
      { id: "fabric", amount: 2 },
    ],
    recipes: [r.simpleTools3, r.pipes2, r.boots2],
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
    id: "weaver",
    specialization: ["cloth", "blightrot"],
    cost: [{ id: "planks", amount: 8 }],
    recipes: [r.fabric3, r.boots1, r.trainingGear1],
  },
  {
    id: "woodcuttersCamp",
    specialization: ["woodworking"],
    cost: [{ id: "parts", amount: 2 }],
    recipes: [],
  },
  {
    id: "workshop",
    specialization: ["blightrot"],
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
