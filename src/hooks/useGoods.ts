import { grouped as g_1_3 } from "../data/1.3/goods";
import { grouped as g_1_5 } from "../data/1.5/goods";
import { grouped as g_1_8 } from "../data/1.8/goods";
import { useVersionContext } from "../VersionContext";

export function useGoods() {
  const version = useVersionContext();
  switch (version) {
    case "1.3":
      return g_1_3;
    case "1.5":
      return g_1_5;
    case "1.8":
    default:
      return g_1_8;
  }
}
