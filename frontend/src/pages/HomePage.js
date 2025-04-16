import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <div className="snap-start">
        <AboutMe />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </div>
  );
}

export { HomePage };
