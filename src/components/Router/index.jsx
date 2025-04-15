import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/index.jsx";
import About from "../../pages/about/index.jsx";
import Error from "../../pages/error/index.jsx";
import Accomodation from "../../pages/accomodation/index.jsx";
import Layout from "../Layout/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/logement/:id" element={<Accomodation />} />
      </Route>
    </Routes>
  );
}

export default App;
