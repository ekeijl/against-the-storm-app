import { Select } from "./Select";
import { VersionContextType } from "../VersionContext";
import { useHash } from "../hooks/useHash";
import type { ReactNode } from "react";
import type { Page } from "../types/Page";

import "./Header.css";

interface PageButtonProps {
  page?: Page;
  activePage: Page;
  onClick: () => void;
  children: ReactNode;
}
function PageButton({ page, activePage, ...props }: PageButtonProps) {
  return (
    <a
      href={"#" + page}
      className={page == activePage ? "is-active" : ""}
      {...props}
    />
  );
}

function isPage(pages: Page[], hash: string | null): hash is Page {
  return pages.includes(hash as Page);
}

interface HeaderProps {
  pages: Page[];
  onSetPage: (page: Page) => void;
  onAddTimer: () => void;
  version: VersionContextType;
  setVersion: (version: VersionContextType) => void;
}
export const Header = ({
  pages,
  onSetPage,
  onAddTimer,
  version,
  setVersion,
}: HeaderProps) => {
  const [hash] = useHash();
  const activePage = isPage(pages, hash) ? hash : "buildings";

  return (
    <header>
      <h1>Against the Storm companion</h1>

      <PageButton
        page="buildings"
        activePage={activePage}
        onClick={() => onSetPage("buildings")}
      >
        Buildings
      </PageButton>
      <PageButton
        page="goods"
        activePage={activePage}
        onClick={() => onSetPage("goods")}
      >
        Goods
      </PageButton>
      <PageButton
        page="species"
        activePage={activePage}
        onClick={() => onSetPage("species")}
      >
        Species
      </PageButton>
      <button onClick={() => onAddTimer()}>Set Timer</button>

      <Select
        className="version-selector"
        isClearable={false}
        value={version}
        options={[
          { value: "1.8", label: "Version 1.8" },
          { value: "1.5", label: "Version 1.5" },
          { value: "1.3", label: "Version 1.3" },
        ]}
        onChange={setVersion}
        placeholder="Game version"
        title="Select your game version"
      />
    </header>
  );
};
