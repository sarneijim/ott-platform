import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Layout = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto flex flex-row">
                <li className="nav-item flex flex-row">
                  <Link className="block pr-2 px-2 py-2" to="/">
                    <img alt="logo" src={logo} className="w-12" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
