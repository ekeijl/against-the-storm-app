import * as s_1_3 from "../data/1.3/species";
import * as s_1_5 from "../data/1.5/species";
import * as s_1_8 from "../data/1.8/species";
import { useVersionContext } from "../VersionContext";

export function useSpecies() {
  const version = useVersionContext();
  switch (version) {
    case "1.3":
      return s_1_3;
    case "1.5":
      return s_1_5;
    case "1.8":
    default:
      return s_1_8;
  }
}
