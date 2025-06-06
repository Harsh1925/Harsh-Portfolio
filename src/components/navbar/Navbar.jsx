import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Harsh Modi
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
