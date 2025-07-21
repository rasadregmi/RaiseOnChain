import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";
import { Web3Provider } from "./contexts/Web3Context.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider>
        <Web3Provider>
          <App />
        </Web3Provider>
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
