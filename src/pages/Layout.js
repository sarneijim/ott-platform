import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Layout = () => {
  return (
    <div>
        <header>
          <nav class="navbar navbar-expand shadow-md py-2 bg-white relative flex items-center w-full justify-between">
              <div class="px-6 w-full flex flex-wrap items-center justify-between">
              <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                  <ul class="navbar-nav mr-auto flex flex-row">
                  <li class="nav-item flex flex-row">
                      <a class="nav-link block pr-2 px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                          <Link to="/"><img src={logo} class="w-12" /></Link>
                      </a>
                  </li>
                  </ul>
              </div>
              </div>
          </nav>
        </header>
      <Outlet />
    </div>
  )
};

export default Layout;