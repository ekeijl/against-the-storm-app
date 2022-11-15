// @TODO translate id => name
export const T = ({ children = "", className = "" }) => (
    <span className={"t " + className}>
        {children.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2")}
    </span>
);
