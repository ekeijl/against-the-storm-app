import { ReactNode } from "react";
import classnames from "classnames";
import "./Page.css";

type PageProps = {
	children: ReactNode;
	className?: string;
};

export const Page = ({ children, className = "", ...props }: PageProps) => (
	<div className={classnames("page", className)} {...props}>
		{children}
	</div>
);
