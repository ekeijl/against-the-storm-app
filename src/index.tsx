import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "react-toggle/style.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
