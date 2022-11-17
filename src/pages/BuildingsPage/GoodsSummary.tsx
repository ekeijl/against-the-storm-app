import { useMemo } from "react";
import "./GoodsSummary.css";
import { productsPerBuilding } from "../../data/buildings";
import { GoodsImage } from "../../components/GoodsImage";

export const GoodsSummary = ({
  buildingIds,
  onSelect,
}: {
  buildingIds: string[];
  onSelect: (id: string) => void;
}) => {
  const productIds = useMemo(() => {
    const allIds = buildingIds?.flatMap((id: string) =>
      Array.from(productsPerBuilding.get(id) || [])
    );

    return Array.from(new Set(allIds));
  }, [buildingIds]);

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
