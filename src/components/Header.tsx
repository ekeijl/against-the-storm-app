import "./Header.css";

export const Header = ({
  onSetPage,
}: {
  onSetPage: (page: string) => void;
}) => {
  return (
    <header>
      <h1>Against the Storm companion app</h1>

      <button onClick={() => onSetPage("buildings")}>Buildings</button>
      <button onClick={() => onSetPage("goods")}>Goods</button>
      <span>v0.38.1R</span>
    </header>
  );
};
