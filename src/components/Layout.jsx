import { Outlet } from "react-router-dom";

function Layout({ header, footer, children }) {
  return (
    <div className="appLayout">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}
export default Layout;
