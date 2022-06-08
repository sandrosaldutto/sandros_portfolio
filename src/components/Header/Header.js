import "./Header.scss";
import avatar from "../../assets/images/avatar.png";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";
import headerTitle from "../../assets/icons/header-title.svg";

function Header() {
  return (
    <section id="about" className="header">
      <img id="home" src={headerTitle} alt="sandro's avatar" className="header__title" />
      <img src={avatar} alt="sandro's avatar" className="header__avatar" />
      <div className="header__about-container">
        <div className="header__contact">
          <a className="header__linkedin-link" href="https://www.linkedin.com/in/sandrosaldutto/" target="_blank" rel="noreferrer">
            <img
              src={linkedinLogo}
              alt="linkedin"
              className="header__linkedin"
            />
          </a>
          <a className="header__github-link" href="https://github.com/sandrosaldutto" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="github" className="header__github" />
          </a>
        </div>
        <p className="header__email">sandro.saldutto@hotmail.ca</p>
        <p className="header__phone">416 271 3726</p>
      </div>
    </section>
  );
}

export default Header;
