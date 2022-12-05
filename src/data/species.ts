export const human = {
  id: "human",
  specialization: "farming",
  resolve: "brewing",
  needs: ["jerky", "biscuits", "pie", "coats"],
  services: ["leisure", "religion"],
  color: "#089b3c", // green
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
  needs: ["jerky", "pie", "pickledGoods", "skewers"],
  services: ["brawling", "religion"],
  color: "#db3a08", // orange
};

export const harpy = {
  id: "harpy",
  specialization: "alchemy",
  resolve: "cloth",
  needs: ["jerky", "skewers", "biscuits"],
  services: ["brawling", "education", "cleanliness"],
  color: "#c03aec", // purple
};
