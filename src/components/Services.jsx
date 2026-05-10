import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, scalable websites.",
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful interfaces.",
    },
    {
      title: "Performance Optimization",
      description:
        "Enhancing web applications for faster load times, improved SEO, and seamless user experience.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="services-container"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Services</h2>
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </motion.section>
  );
};

export default Services;
