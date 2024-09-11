// src/main.js or src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"; // Correctly import Provider
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store"; // Ensure correct import path for store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
