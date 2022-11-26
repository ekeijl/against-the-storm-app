import "./Header.css";

export const Header = ({
  onSetPage,
  onAddTimer,
}: {
  onSetPage: (page: string) => void;
  onAddTimer: () => void;
}) => {
  return (
    <header>
      <h1>Against the Storm companion app</h1>

      <button onClick={() => onSetPage("buildings")}>Buildings</button>
      <button onClick={() => onSetPage("goods")}>Goods</button>
      <button onClick={() => onAddTimer()}>⏰ Add timer</button>
      <span>v0.38.1R</span>
    </header>
  );
};
