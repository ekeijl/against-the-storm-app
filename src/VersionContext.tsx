import { createContext, useContext } from "react";

export type VersionContextType = "1.4" | "1.3";

export const VersionContext = createContext<VersionContextType>("1.4");

export const useVersionContext = () => useContext(VersionContext);
