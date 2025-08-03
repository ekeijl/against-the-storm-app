import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "react-toggle/style.css";

import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<App />);
