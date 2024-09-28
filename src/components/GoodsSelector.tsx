import { Select } from "./Select";
import { grouped as grouped_1_3 } from "../data/goods";
import { grouped as grouped_1_4 } from "../data/goods_1_4";
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
  const version = useVersionContext();
  const grouped = version === "1.4" ? grouped_1_4 : grouped_1_3;

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
