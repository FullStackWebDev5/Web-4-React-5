import "./index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul id="navbar-left">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Max's E-Commerce
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
				<li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navbar-link-active" : "navbar-link"
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
      <ul id="navbar-right">
        <li>Sign Up</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default Navbar;
