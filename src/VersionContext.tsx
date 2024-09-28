import { createContext, useContext } from "react";

export const VersionContext = createContext("light");

export const useVersionContext = () => useContext(VersionContext);
