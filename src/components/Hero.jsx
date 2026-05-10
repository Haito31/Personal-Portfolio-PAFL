import Rin from "../assets/Rin.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I&apos;m Paulo Freire</h1>
      <h2>Junior Programmer | Creator</h2>
      <img src={Rin} alt="Profile" className="profile-pic" />
      <div className="social-links">
        <a
          href="https://linkedin.com/in/paulo-freire-ab431923a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Haito31"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
