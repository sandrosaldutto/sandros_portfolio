import "./Nav.scss";
import logo from "../../assets/logos/logo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <section className="nav">
      <NavLink to="/">
        <img src={logo} alt="sandros website logo" className="nav__logo" />
      </NavLink>
    </section>
  );
}

export default Nav;
