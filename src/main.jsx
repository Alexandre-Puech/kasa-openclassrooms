import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/css/index.css";
import App from "./components/Router";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
