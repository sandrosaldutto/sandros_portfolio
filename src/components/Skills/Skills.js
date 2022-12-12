import "./Skills.scss";
import webdevIcon from "../../assets/icons/webdev-skills.svg";
import designIcon from "../../assets/icons/design-skills.svg";
import reactIcon from "../../assets/icons/react.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import nodeIcon from "../../assets/icons/node.svg";
import psIcon from "../../assets/icons/ps.svg";
import aiIcon from "../../assets/icons/ai.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import xdIcon from "../../assets/icons/xd.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section id="skills" className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__container">
        <img src={designIcon} alt="design" className="skills__icon" />
        <h2 className="skills__sub-title">Design</h2>
        <div className="skills__design-skills">
          <div data-aos="fade-up" className="skills__row">
            <div className="skills__image">
              <img
                src={aiIcon}
                alt="adobe illustrator"
                className="skills__tool-icon"
              />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">Illustrator</h3>
              </div>
            </div>
            <div className="skills__image">
              <img
                src={psIcon}
                alt="adobe photoshop"
                className="skills__tool-icon"
              />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">Photoshop</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="skills__row">
            <div className="skills__image">
              <img src={xdIcon} alt="adobe XD" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">XD</h3>
              </div>
            </div>
            <div className="skills__image">
              <img src={figmaIcon} alt="figma" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">Figma</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills__container">
        <img src={webdevIcon} alt="webdev" className="skills__icon" />
        <h2 className="skills__sub-title">Web Development</h2>
        <div className="skills__webdev-skills">
          <div data-aos="fade-up" className="skills__row">
            <div className="skills__image">
              <img src={htmlIcon} alt="html" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">HTML</h3>
              </div>
            </div>
            <div className="skills__image">
              <img src={cssIcon} alt="css" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">CSS</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="skills__row">
            <div className="skills__image">
              <img
                src={jsIcon}
                alt="javascript"
                className="skills__tool-icon"
              />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">Java Script</h3>
              </div>
            </div>
            <div className="skills__image">
              <img src={reactIcon} alt="react" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">React</h3>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="skills__row">
            <div className="skills__image">
              <img src={mysqlIcon} alt="mysql" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">MySQL</h3>
              </div>
            </div>
            <div className="skills__image">
              <img src={nodeIcon} alt="node" className="skills__tool-icon" />
              <div className="skills__overlay">
                <h3 className="skills__icon-name">Node</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
