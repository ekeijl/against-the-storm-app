import { createContext, useContext } from "react";

export type VersionContextType = "1.8" | "1.5" | "1.3";

export const VersionContext = createContext<VersionContextType>("1.8");

export const useVersionContext = () => useContext(VersionContext);
