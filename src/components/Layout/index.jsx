import { Outlet } from "react-router-dom";

function Layout({ header, footer }) {
  return (
    <div className="appLayout">
      {header}
      <main>
        <Outlet />
      </main>
      {footer}
    </div>
  );
}
export default Layout;
