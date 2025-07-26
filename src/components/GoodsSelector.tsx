import { Select } from "./Select";
import { useGoods } from "../hooks/useGoods";
import { GoodsImage } from "./GoodsImage";
import { Option, OptionContext } from "../types/Option";
import { useVersionContext } from "../VersionContext";
import "./GoodsSelector.css";
import { T } from "./T";

const renderLabel = (value: string, label: string) => {
  return (
    <div className="goods-option">
      <GoodsImage id={value} size="small" />
      {label ? <T>{label}</T> : null}
    </div>
  );
};

export const GoodsSelector = (props: any): JSX.Element => {
  const grouped = useGoods();

  return (
    <Select
      className="goods-selector"
      isClearable={false}
      options={grouped}
      formatOptionLabel={(
        { value, label }: Option,
        { context }: { context: OptionContext }
      ) =>
        renderLabel(value, !props.isMulti || context === "menu" ? label : "")
      }
      placeholder="Goods"
      {...props}
    />
  );
};
