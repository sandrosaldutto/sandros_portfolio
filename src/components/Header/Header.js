import "./Header.scss";
import sandro from "../../assets/images/sandro.png";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import githubLogo from "../../assets/icons/github.svg";
import spotifyLogo from "../../assets/icons/spotify.svg";
import appleLogo from "../../assets/icons/apple.svg";
import sportChekLogo from "../../assets/icons/sport-chek.svg";
import cobraLogo from "../../assets/icons/cobra.svg";

function Header() {
  return (
    <section id="contact" className="header">
      <img src={sandro} alt="sandro" className="header__sandro" />
      <div className="header__name-container">
        <h2 className="header__name">Sandro Saldutto</h2>
        <p className="header__role">Designer Developer</p>
      </div>
      <div className="header__bio-container">
        <h3>Bio</h3>
        <p className="header__bio">
          Designer / Developer with the skill set, knowledge and understanding
          of both the design and development stages.
        </p>
      </div>

      <div className="header__contact-container">
        <h3>Contact</h3>
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
      </div>

      <div className="header__brands-container">
        <h3>Brands</h3>
        <img src={spotifyLogo} alt="spotify" className="header__brand-logo" />
        <img src={appleLogo} alt="apple" className="header__brand-logo" />
        <img src={cobraLogo} alt="cobra" className="header__brand-logo" />
        <img
          src={sportChekLogo}
          alt="sport chek"
          className="header__brand-logo"
        />
      </div>
    </section>
  );
}

export default Header;
