import { useMemo } from "react";

import { Specialization } from "../types/Specialization";
import { useVersionContext } from "../VersionContext";

const specOptions_1_3: Specialization[] = [
  "alchemy",
  "brewing",
  "tailoring",
  "engineering",
  "farming",
  "meat",
  "rainwater",
  "forest",
  "warmth",
  "woodworking",
];

const specOptions_1_5: Specialization[] = [
  "alchemy",
  "blightrot",
  "brewing",
  "tailoring",
  "engineering",
  "farming",
  "masonry",
  "meat",
  "rainwater",
  "forest",
  "warmth",
  "woodworking",
];

const specOptions_1_8: Specialization[] = [
  "alchemy",
  "brewing",
  "tailoring",
  "engineering",
  "farming",
  "masonry",
  "meat",
  "metallurgy",
  "rainwater",
  "forest",
  "warmth",
  "woodworking",
];

export function useSpecializations() {
  const version = useVersionContext();
  return useMemo(() => {
    switch (version) {
      case "1.3":
        return specOptions_1_3;
      case "1.5":
        return specOptions_1_5;
      case "1.8":
      default:
        return specOptions_1_8;
    }
  }, [version]);
}
