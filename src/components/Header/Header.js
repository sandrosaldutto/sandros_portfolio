import "./Header.scss";
import sandro from "../../assets/images/sandro.png";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";
import spotifyLogo from "../../assets/icons/spotify.svg";
import appleLogo from "../../assets/icons/apple.svg";
import sportChekLogo from "../../assets/icons/sport-chek.svg";
import cobraLogo from "../../assets/icons/cobra.svg";
import resume from "../../assets/resume/sandro-saldutto-resume.pdf";

function Header() {
  return (
    <section className="header">
      <div className="header__intro-container">
        <img id="home" src={sandro} alt="sandro" className="header__sandro" />
        <div className="header__name-container">
          <h2 className="header__name">Sandro Saldutto</h2>
          <p className="header__role">Designer | Developer</p>
        </div>
      </div>
      <div className="header__bio-container">
        <h3 className="header__title">Bio</h3>
        <p className="header__bio">
          <span className="header__bold">Hello</span>, I'm Sandro. I'm a
          designer that codes. I've done many different projects from full stack
          development, to prototyping and building brands. I've been a designer
          for more than 7 years, and I care deeply about how design affects the
          user experience in every medium. I spend my free time gaming, playing
          golf and hanging out with friends, family and dog, Oaks.
        </p>
      </div>

      <div className="header__contact-container">
        <h3 className="header__title header__title--contact">Contact</h3>
        <div className="header__contact">
          <a
            className="header__linkedin-link"
            href="https://www.linkedin.com/in/sandrosaldutto/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="linkedin"
              className="header__linkedin"
            />
          </a>
          <a
            className="header__github-link"
            href="https://github.com/sandrosaldutto"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="github" className="header__github" />
          </a>
        </div>
        <p className="header__email">sandro.saldutto@hotmail.ca</p>
        <p className="header__phone">416 271 3726</p>
        <div className="header__resume-container">
          <button className="header__resume-button">
            <a className="header__resume" href={resume} download>
              Resume
            </a>
          </button>
        </div>
      </div>

      <div className="header__brands-container">
        <h3 className="header__title">Brands</h3>
        <div className="header__logos-container">
          <img src={spotifyLogo} alt="spotify" className="header__brand-logo" />
          <img
            src={cobraLogo}
            alt="cobra"
            className="header__brand-logo header__brand-logo--cobra "
          />
        </div>
        <div className="header__logos-container">
          <img src={appleLogo} alt="apple" className="header__brand-logo" />
          <img
            src={sportChekLogo}
            alt="sport chek"
            className="header__brand-logo header__brand-logo--sportchek"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
