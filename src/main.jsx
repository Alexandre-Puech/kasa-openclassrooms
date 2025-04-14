import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import Error from "./pages/error/index.jsx";
import Accomodation from "./pages/accomodation/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logement" element={<Accomodation />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
