import "./Header.css";
import { Select } from "./Select";
import { VersionContextType } from "../VersionContext";

type HeaderProps = {
  onSetPage: (page: string) => void;
  onAddTimer: () => void;
  version: VersionContextType;
  setVersion: (version: VersionContextType) => void;
};
export const Header = ({
  onSetPage,
  onAddTimer,
  version,
  setVersion,
}: HeaderProps): JSX.Element => {
  return (
    <header>
      <h1>Against the Storm companion</h1>

      <button onClick={() => onSetPage("buildings")}>Buildings</button>
      <button onClick={() => onSetPage("goods")}>Goods</button>
      <button onClick={() => onSetPage("species")}>Species</button>
      <button onClick={() => onAddTimer()}>⏰ Timer</button>

      <Select
        className="version-selector"
        isClearable={false}
        value={version}
        options={[
          { value: "1.4", label: "Version 1.5" },
          { value: "1.3", label: "Version 1.3" },
        ]}
        onChange={setVersion}
        placeholder="Game version"
      />
    </header>
  );
};
