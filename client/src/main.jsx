import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Web3Provider } from "./context/Web3Context";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Web3Provider>
        <App />
      </Web3Provider>
    </BrowserRouter>
  </React.StrictMode>
);
