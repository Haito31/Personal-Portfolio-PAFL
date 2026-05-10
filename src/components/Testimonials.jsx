import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <motion.div
      id="testimonials"
      className="testimonials-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        <div className="testimonial-card">
          <FaQuoteLeft />
          <p>&ldquo;Great communication and problem-solving skills!&rdquo;</p>
          <h4>- Jean Carries ~ Branch Manager PNC Bank</h4>
        </div>
        <div className="testimonial-card">
          <FaQuoteLeft />
          <p>&ldquo;An excellent developer who delivers high-quality work!&rdquo;</p>
          <h4>- Ricardo Seminario ~ Visolit - COO</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
