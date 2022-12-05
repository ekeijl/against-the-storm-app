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
      styles={{
        control: (base: any) => ({
          ...base,
          border: "none",
        }),
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 4,
        colors: {
          ...theme.colors,
          primary: "#cc170a", // hover option
          primary25: "#d83a2f",
          // primary50:
          // primary25:
          // danger:
          // dangerLight;
          neutral0: "#222", // main input bg
          neutral5: "#010101", // disabled
          neutral10: "#444", // multi-select item
          neutral20: "#555", // outer border, clear, chevron
          neutral30: "#999", // hover
          neutral40: "#fff", // closed: hover clear

          neutral50: "#999", // placeholder
          neutral60: "#666", // opened: clear, chevron
          neutral70: "#fff", // closed: hover clear
          neutral80: "#fff", // opened: hover clear, chevron
          neutral90: "#0f0", // ??? text color if parent element color is missing maybe?
        },
      })}
    />
  );
};
