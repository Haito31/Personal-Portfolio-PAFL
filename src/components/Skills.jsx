import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Skills = () => {
  const skills = [
    { name: "JavaScript - HTML - CSS", icon: <MdOutlineWeb /> },
    { name: "React - ReactNative", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
  ];

  return (
    <motion.div id="skills" className="skills-container">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {skill.icon} {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;
