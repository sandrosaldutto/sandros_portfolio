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

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__container">
        <img src={webdevIcon} alt="webdev" className="skills__icon" />
        <h2 className="skills__sub-title">Web Development</h2>
        <div className="skills__tools-container">
          <div>
            <img src={htmlIcon} alt="html" className="skills__tool-icon" />
            <img src={cssIcon} alt="css" className="skills__tool-icon" />
          </div>
          <div>
            <img src={jsIcon} alt="javascript" className="skills__tool-icon" />
            <img src={reactIcon} alt="react" className="skills__tool-icon" />
          </div>
          <div>
            <img src={mysqlIcon} alt="mysql" className="skills__tool-icon" />
            <img src={nodeIcon} alt="node" className="skills__tool-icon" />
          </div>
        </div>
      </div>

      <div className="skills__container">
        <img src={designIcon} alt="design" className="skills__icon" />
        <h2 className="skills__sub-title">Design</h2>
        <div className="skills__skills-container">
          <div>
            <img src={aiIcon} alt="illustrator" className="skills__tool-icon" />
            <img src={psIcon} alt="photoshop" className="skills__tool-icon" />
          </div>
          <div>
            <img src={figmaIcon} alt="figma" className="skills__tool-icon" />
            <img src={xdIcon} alt="xd" className="skills__tool-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
