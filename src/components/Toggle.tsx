import ReactToggle from "react-toggle";
import classnames from "classnames";
import "./Toggle.css";

export const Toggle = (
  props: { className: string } & React.PropsWithChildren
): JSX.Element => {
  return (
    <ReactToggle {...props} className={classnames("toggle", props.className)} />
  );
};
