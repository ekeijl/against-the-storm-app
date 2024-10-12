import ReactSelect, { OnChangeValue } from "react-select";
import { forwardRef, useCallback } from "react";
import { Option } from "../types/Option";
type MyOption = {
  value: string;
  label: any;
  options?: Option[];
};

export const Select = forwardRef((props: any, ref) => {
  const { isMulti, onChange, value } = props;

  const isValue = useCallback(
    (option: MyOption, value: string | null) => {
      return (props.getOptionValue?.(option) || option.value) === value;
    },
    [props.getOptionvalue]
  );

  const toOption = useCallback(
    (v: string | null) => {
      if (!v || !props.options) return null;

      for (const opt of props.options) {
        if (opt.options) {
          for (const o of opt.options) {
            if (isValue(o, v)) {
              return o;
            }
          }
        } else if (isValue(opt, v)) {
          return opt;
        }
      }
      // return props.options?.reduce((result: MyOption, opt: MyOption) => {
      //   if (opt.options) {
      //     return (
      //       opt.options.find(
      //         (o: Option) => (props.getOptionValue?.(o) || o.value) === v
      //       ) || result
      //     );
      //   }
      //   return (props.getOptionValue?.(opt) || opt.value) === v ? opt : result;
      // });
    },
    [props.options, isValue]
  );

  const handleMulti = (options: OnChangeValue<MyOption, true>) => {
    onChange(
      options?.map(
        (option: OnChangeValue<MyOption, false>) =>
          props.getOptionValue?.(option) || option?.value
      )
    );
  };
  const handleSingle = (option: any) => onChange(option ? option.value : "");

  return (
    <ReactSelect
      ref={ref}
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
});
