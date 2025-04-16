import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollProgress } = useScroll({
    target: ref,
  });

  return (
    <div
      className="parallax"
      style={{ background: "linear-gradient(100deg, #111132, #0c0c1d" }}
    >
      <motion.h1>Coding Projects</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
