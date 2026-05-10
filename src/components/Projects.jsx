import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Website Redesign (HTML+ CSS + JavaScript)",
      description:
        "Completed on 2026 for the client Visolit. A complete redesign of their website to improve user experience and modernize the look.",
      link: null,
    },
    {
      title: "Second Brain Application (Electron + Tailwind CSS)",
      description:
        "Completed on 2026 an application that gives purpose to your time and ideas",
      link: null,
    },
    {
      title: "Overlay clock (Python + PyQt)",
      description:
        "My latest work that is currently in development that help you manage your time.",
      link: null,
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
