import "./ProjectGallery.scss";
import telectIcon from "../../assets/icons/telect.svg";
import wordlerIcon from "../../assets/icons/wordler.svg";
import shopifyIcon from "../../assets/icons/shopify.svg";

function ProjectGallery() {
    return (
        <section id="projects" className="projects">
            <h2 className="projects__title"> Projects</h2>
            <div className="projects__container">
                <img className="projects__logo" src={telectIcon} alt="telect logo"></img>
                <p className="projects__copy">Telect is my capstone project from Branstations Web Developent bootcamp. This project was created in a tight 2 week timeline. Telect is a web-responsive application that strives to satisfy the avid TV show watcher's need for organization.  </p>
                <button className="projects__button">Enter Site</button>
            </div>
            <div className="projects__container projects__container--wordler">
                <img className="projects__logo" src={wordlerIcon} alt="wordler logo"></img>
                <p className="projects__copy">Wordler is an example of a 24 hour hack-a-thon in which I had 1 other group member on my team. We decided to make a fun simple game taking some ideas from Wordle.</p>
                <button className="projects__button projects__button--wordler">Enter Site</button>
            </div>
            <div className="projects__container projects__container--shopify">
                <img className="projects__logo projects__logo--shopify" src={shopifyIcon} alt="shopify logo"></img>
                <p className="projects__copy projects__copy--shopify">Shopify Collab is another example of a 24 hour hack-a-thon but this one is special because I was partnered with a team of people. My team consisted of 2 UX designers, 1 Data Scientist and 3 Web Developers. The goal for this project was to explain how Shopify can grow thier business. We decided to focus on connecting business owners who want to sell something and artists who have a product.</p>
                <button className="projects__button projects__button--shopify">Enter Site</button>
            </div>

        </section>
    );

}

export default ProjectGallery;