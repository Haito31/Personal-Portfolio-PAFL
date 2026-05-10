import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const isMountedRef = useRef(true);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (status.state !== "success") return;
    const t = setTimeout(() => {
      if (isMountedRef.current) setStatus({ state: "idle", message: "" });
    }, 5000);
    return () => clearTimeout(t);
  }, [status.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.state === "sending") return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: "error",
        message: "Email service is not configured.",
      });
      return;
    }

    const form = formRef.current;
    setStatus({ state: "sending", message: "Sending..." });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      if (!isMountedRef.current) return;
      setStatus({ state: "success", message: "Message sent. Thanks!" });
      form?.reset();
    } catch (err) {
      console.error("EmailJS sendForm failed:", err);
      if (!isMountedRef.current) return;
      setStatus({
        state: "error",
        message: "Could not send message. Please try again later.",
      });
    }
  };

  return (
    <motion.section id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p>Fill out the form below</p>

      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="contact-name">
          Your Name
        </label>
        <input
          id="contact-name"
          name="user_name"
          type="text"
          placeholder="Your Name"
          required
        />

        <label className="visually-hidden" htmlFor="contact-email">
          Your Email
        </label>
        <input
          id="contact-email"
          name="user_email"
          type="email"
          placeholder="Your Email"
          required
        />

        <label className="visually-hidden" htmlFor="contact-message">
          Your Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Your Message"
          required
        />

        <button
          type="submit"
          className="contact-button"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status.message && (
          <p
            role="status"
            className={`contact-status contact-status--${status.state}`}
          >
            {status.message}
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
