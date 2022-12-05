import ReactToggle, { ToggleProps } from "react-toggle";
import classnames from "classnames";
import "./Toggle.css";

export const Toggle = (props: ToggleProps): JSX.Element => {
  return (
    <ReactToggle {...props} className={classnames("toggle", props.className)} />
  );
};
