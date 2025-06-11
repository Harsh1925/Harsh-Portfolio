import { useRef } from "react";
import "./parallax1.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax1 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "215%"]);

  return (
    <div
      className="parallax1"
      style={{ background: "linear-gradient(180deg, #111132, #505064)" }}
    >
      <motion.h1 style={{ y: yText }}>About Me</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax1;
