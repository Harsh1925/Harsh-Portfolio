import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const updatePointerGlow = (event) => {
    if (event.pointerType === "touch") return;

    const { left, top } = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - top}px`);
    event.currentTarget.style.setProperty("--pointer-opacity", "1");
  };

  const hidePointerGlow = (event) => {
    event.currentTarget.style.setProperty("--pointer-opacity", "0");
  };

  return (
    <div
      className="navbar"
      onPointerMove={updatePointerGlow}
      onPointerLeave={hidePointerGlow}
    >
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="site-name">Harsh Modi</span>
        </motion.span>
        <div className="social">
          <a href="https://www.instagram.com/__harsh__007/">
            <img src="instagram1.png" alt="" />
          </a>
          <a href="https://github.com/Harsh1925">
            <img src="github.png" alt="" />
          </a>
          <a href="#">
            <img src="youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-modi-oo7/">
            <img src="linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
