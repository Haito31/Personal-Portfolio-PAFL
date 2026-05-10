import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Testimonials from "./components/Testimonials.jsx";


function App() {
  return (
    <div>
      <Hero />
      <div className="about-skills-container">
        <About />
        <Skills />
      </div>
      <div className="services-projects-container">
        <Services />
        <Projects />
      </div>
      <div className="experience-testimonials-container"> 
          <Experience />
          <Testimonials />
      </div>
      <Contact />
      <footer className="footer">
        <p>© 2025 Paulo Freire Lara. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
