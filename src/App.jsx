import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Accomodation from "./pages/Accomodation.jsx";
import Layout from "./components/Layout.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Accomodation />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
