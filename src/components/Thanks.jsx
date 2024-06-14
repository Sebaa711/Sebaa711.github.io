import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Thanks = () => {
  return (
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Thanks to{" "}
      <a
        href="https://www.youtube.com/@javascriptmastery"
        className="blue-text-gradient"
        target="_blank"
      >
        JavaScript Mastery{" "}
      </a>
      on YouTube for the amazing tutorial on how to build a 3D Portfolio Website
      using Three.js. I learned a lot from it and I&apos;m grateful for the
      knowledge shared.
    </motion.p>
  );
};

export default SectionWrapper(Thanks, "tech");
