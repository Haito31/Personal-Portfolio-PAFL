import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="experience-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Experience & Education</h2>

      <div className="experience-list">
        <div className="experience-card">
          <FaBriefcase />
          <h3>Software Developer</h3>
          <p>Freelance | 2023 - Present</p>
        </div>

        <div className="experience-card">
          <FaGraduationCap />
          <h3>University Career</h3>
          <p>Ecotec University | 2021 - Present</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
