import { ReactNode } from "react";
import classnames from "classnames";
import "./Page.css";

type PageProps = {
  children: ReactNode;
  isFullHeight?: boolean;
  className?: string;
};

export const Page = ({
  children,
  isFullHeight = false,
  className = "",
  ...props
}: PageProps): JSX.Element => (
  <main
    className={classnames("page", className, { "full-height": isFullHeight })}
    {...props}
  >
    {children}
  </main>
);
