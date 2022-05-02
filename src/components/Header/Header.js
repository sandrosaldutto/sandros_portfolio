import "./Header.scss";
import avatar from "../../assets/images/avatar.png";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <h1 className="header__title">Web Developer / Designer</h1>
      <img src={avatar} alt="sandro's avatar" className="header__avatar" />
      <div className="header__about-container">
        <h2 className="header__blurb-title">Hello.</h2>
        <p className="header__blurb">
          I am a web developer with a background and education in Graphic
          Design. With the knowledge and understanding of both the design and
          development stages I have the ability to bring design to life.
        </p>
        <div className="header__contact">
          <a className="header__linkedin-link" href="https://www.linkedin.com/in/sandrosaldutto/" target="_blank">
            <img
              src={linkedinLogo}
              alt="linkedin"
              className="header__linkedin"
            />
          </a>
          <a className="header__github-link" href="https://github.com/sandrosaldutto" target="_blank">
          <img src={githubLogo} alt="github" className="header__github" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
