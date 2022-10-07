import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./components/context/CounterContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CounterContextProvider>
);
