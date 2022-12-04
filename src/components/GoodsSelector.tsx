import { ReactNode } from "react";
import Select, { OnChangeValue } from "react-select";
import { grouped } from "../data/goods";
import { GoodsImage } from "./GoodsImage";
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

const toOption = (v: string | null) => ({ label: v, value: v });

type MyOption = {
  value: string;
  label: any;
};

export const GoodsSelector = (props: any): JSX.Element => {
  const { isMulti, onChange, value } = props;

  const handleMulti = (options: OnChangeValue<MyOption, true>) =>
    onChange(
      options?.map((option: OnChangeValue<MyOption, false>) => option?.value)
    );
  const handleSingle = (option: any) => onChange(option.value);
  return (
    <Select
      className="goods-selector"
      isMulti={isMulti}
      options={grouped}
      formatOptionLabel={({ value, label }, { context }) =>
        renderLabel(value, !isMulti || context === "menu" ? label : null)
      }
      {...props}
      onChange={isMulti ? handleMulti : handleSingle}
      value={isMulti ? value.map(toOption) : toOption(value)}
      placeholder="Select goods..."
    />
  );
};
