import ReactSelect, { OnChangeValue } from "react-select";

type MyOption = {
  value: string;
  label: any;
};

const toOption = (v: string | null) => (v ? { label: v, value: v } : null);

export const Select = (props: any) => {
  const { isMulti, onChange, value } = props;

  const handleMulti = (options: OnChangeValue<MyOption, true>) =>
    onChange(
      options?.map((option: OnChangeValue<MyOption, false>) => option?.value)
    );
  const handleSingle = (option: any) => onChange(option ? option.value : "");

  return (
    <ReactSelect
      isMulti={isMulti}
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
      {...props}
      onChange={isMulti ? handleMulti : handleSingle}
      value={isMulti ? value.map(toOption) : toOption(value)}
    />
  );
};
