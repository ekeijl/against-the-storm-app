import "./Header.css";
import { VERSION } from "../constants";

type HeaderProps = {
  onSetPage: (page: string) => void;
  onAddTimer: () => void;
};
export const Header = ({ onSetPage, onAddTimer }: HeaderProps): JSX.Element => {
  return (
    <header>
      <h1>Against the Storm companion</h1>

      <button onClick={() => onSetPage("buildings")}>Buildings</button>
      <button onClick={() => onSetPage("goods")}>Goods</button>
      <button onClick={() => onSetPage("species")}>Species</button>
      <button onClick={() => onAddTimer()}>⏰ Timer</button>
      <span>v{VERSION}</span>
    </header>
  );
};
