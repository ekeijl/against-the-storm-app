import { useMemo } from "react";
import "./GoodsSummary.css";
import { GoodsImage } from "../../components/GoodsImage";
import { useProductsPerBuildings } from "../../hooks/useBuildings";

type GoodsSummaryProps = {
  buildingIds: string[];
  onSelect: (id: string) => void;
};

export const GoodsSummary = ({ buildingIds, onSelect }: GoodsSummaryProps) => {
  const productsPerBuilding = useProductsPerBuildings();
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
