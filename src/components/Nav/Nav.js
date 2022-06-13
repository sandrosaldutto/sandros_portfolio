import "./Nav.scss";
import logo from "../../assets/logos/logo.svg";
import { Link } from "react-scroll";

function Nav() {
  return (
    <section className="nav">
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <img src={logo} alt="sandros website logo" className="nav__logo" />
      </Link>
      <div className="nav__menu">
        <Link
          activeClass="active"
          className="nav__menu-item"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          className="nav__menu-item"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          className="nav__menu-item"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </Link>
      </div>
    </section>
  );
}

export default Nav;
