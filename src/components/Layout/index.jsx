import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

function Layout() {
  return (
    <div className="appLayout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
