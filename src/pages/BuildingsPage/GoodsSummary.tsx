import { useMemo } from "react";
import "./GoodsSummary.css";
import { productsPerBuilding as p_1_3 } from "../../data/buildings";
import { productsPerBuilding as p_1_4 } from "../../data/buildings_1_4";
import { GoodsImage } from "../../components/GoodsImage";
import { useVersionContext } from "../../VersionContext";

type GoodsSummaryProps = {
  buildingIds: string[];
  onSelect: (id: string) => void;
};

export const GoodsSummary = ({
  buildingIds,
  onSelect,
}: GoodsSummaryProps): JSX.Element | null => {
  const version = useVersionContext();
  const productsPerBuilding = version === "1.4" ? p_1_4 : p_1_3;
  const productIds = useMemo(() => {
    const allIds = buildingIds?.flatMap((id: string) =>
      Array.from(productsPerBuilding.get(id) || [])
    );

    return Array.from(new Set(allIds));
  }, [productsPerBuilding, buildingIds]);

  if (!buildingIds?.length) return null;

  return (
    <div className="goods-summary">
      <span>Can produce:</span>

      {productIds.map((id) => (
        <GoodsImage id={id} key={id} onClick={() => onSelect(id)} />
      ))}
    </div>
  );
};
