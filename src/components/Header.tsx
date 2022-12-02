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
      <h1>Against the Storm companion</h1>

      <button onClick={() => onSetPage("buildings")}>Buildings</button>
      <button onClick={() => onSetPage("goods")}>Goods</button>
      <button onClick={() => onSetPage("species")}>Species</button>
      <button onClick={() => onAddTimer()}>⏰ Timer</button>
      <span>v0.38.3</span>
    </header>
  );
};
