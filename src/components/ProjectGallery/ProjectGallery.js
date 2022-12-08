import "./ProjectGallery.scss";
import telectIcon from "../../assets/icons/telect.svg";
import shopifyIcon from "../../assets/icons/shopify.svg";
import tnIcon from "../../assets/icons/tn.svg";
import davidsTeaIcon from "../../assets/icons/davids-tea.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProjectGallery() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title"> Projects</h2>
      <div
        data-aos="fade-down"
        className="projects__container projects__container--davids-tea"
      >
        <img
          className="projects__logo"
          src={davidsTeaIcon}
          alt="davids tea logo"
        ></img>
        <div className="projects__right-container">
          <p className="projects__copy">
            Telect is a web-responsive application that strives to satisfy the
            avid TV show watcher's need for organization. The app provides the
            user with the ability to search shows from a database, and add and
            remove these shows from their list. Telect is my capstone project
            that I created while attending Branstation's Web Developent
            bootcamp.
          </p>
          <a
            className="projects__link"
            href="https://davids-tea.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projects__button projects__button--davids-tea">
              Enter Site
            </button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-down"
        className="projects__container projects__container--tn"
      >
        <img
          className="projects__logo projects__logo--tn"
          src={tnIcon}
          alt="shopify logo"
        ></img>
        <div className="projects__right-container">
          <p className="projects__copy projects__copy--tn">
            Truscello Nair LLP is website I designed for a pair of starting-out
            criminal lawyers. The intent of their website is to provide
            information to those looking for a criminal lawyer or information on
            the process, along with contact information for potential
            representation. As the clients wanted to continue their own site
            updates and edits past initial launch, the site is hosted on Wix.
          </p>
          <a
            className="projects__link"
            href="https://www.truscellonairllp.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projects__button projects__button--tn">
              Enter Site
            </button>
          </a>
        </div>
      </div>

      <div data-aos="fade-down" className="projects__container">
        <img
          className="projects__logo"
          src={telectIcon}
          alt="telect logo"
        ></img>
        <div className="projects__right-container">
          <p className="projects__copy">
            Telect is a web-responsive application that strives to satisfy the
            avid TV show watcher's need for organization. The app provides the
            user with the ability to search shows from a database, and add and
            remove these shows from their list. Telect is my capstone project
            that I created while attending Branstation's Web Developent
            bootcamp.
          </p>
          <a
            className="projects__link"
            href="https://telect-client.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projects__button">Enter Site</button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-down"
        className="projects__container projects__container--shopify"
      >
        <img
          className="projects__logo projects__logo--shopify"
          src={shopifyIcon}
          alt="shopify logo"
        ></img>
        <div className="projects__right-container">
          <p className="projects__copy projects__copy--shopify">
            Shopify Collab is an idea that allows Shopify to grow their
            business. The web application is a tool to connect business owners
            who are looking to sell products, to artsits who supply the products
            for sale. Shopify Collab is another example of a 24 hour
            hack-a-thon, but done by a larger team, consisting of two UX
            designers, one Data Scientist and three Web Developers.
          </p>
          <a
            className="projects__link"
            href="https://shopify-collab.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projects__button projects__button--shopify">
              Enter Site
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;
