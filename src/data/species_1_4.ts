export const human = {
  id: "human",
  specialization: "farming",
  resolve: "brewing",
  needs: ["porridge", "biscuits", "pie", "coats"],
  services: ["leisure", "religion"],
  color: "#ffd800", // yellow
};

export const beaver = {
  id: "beaver",
  specialization: "woodworking",
  resolve: "engineering",
  needs: ["biscuits", "pickledGoods", "coats"],
  services: ["education", "leisure", "luxury"],
  color: "#02a3ce", // blue
};

export const lizard = {
  id: "lizard",
  specialization: "meat",
  resolve: "warmth",
  needs: ["jerky", "skewers", "pie", "pickledGoods", "skewers", "boots"],
  services: ["brawling"],
  color: "#e67700", // orange
};

export const fox = {
  id: "fox",
  specialization: "scouting",
  resolve: "blightrot",
  needs: ["porridge", "skewers", "pickledGoods", "boots"],
  services: ["religion", "treatment"],
  color: "#c92a2a", // red
};

export const harpy = {
  id: "harpy",
  specialization: "alchemy",
  resolve: "cloth",
  needs: ["jerky", "paste", "boots", "coats"],
  services: ["education", "treatment"],
  color: "#c03aec", // purple
};

export const frog = {
  id: "frog",
  specialization: "masonry",
  resolve: "rainwater",
  needs: ["porridge", "paste", "pie", "boots"],
  services: ["brawling", "religion", "luxury"],
  color: "#089b3c", // green
};
