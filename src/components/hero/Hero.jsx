import "./hero.scss";
import { motion } from "framer-motion";
import resumePdf from "./Harsh_Modi_Resume.pdf";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

let autoScrollActive = false;

const handleAutoScroll = () => {
  const html = document.documentElement;
  const scrollStep = 120;
  let userScrolled = false;

  if (autoScrollActive) return;
  autoScrollActive = true;

  const cancelOnUserScroll = () => {
    userScrolled = true;
    autoScrollActive = false;
    html.style.scrollSnapType = "y mandatory";
    removeListeners();
  };

  const removeListeners = () => {
    window.removeEventListener("wheel", cancelOnUserScroll);
    window.removeEventListener("touchstart", cancelOnUserScroll);
  };

  html.style.scrollSnapType = "none";
  window.addEventListener("wheel", cancelOnUserScroll, { passive: true });
  window.addEventListener("touchstart", cancelOnUserScroll, { passive: true });

  const scrollDown = () => {
    if (userScrolled) return;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    if (currentScroll + window.innerHeight < maxScroll - 1) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollDown);
    } else {
      scrollBackToTop();
    }
  };

  const scrollBackToTop = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollBy(0, -scrollStep * 1.5);
      requestAnimationFrame(scrollBackToTop);
    } else {
      autoScrollActive = false;
      html.style.scrollSnapType = "y mandatory";
      removeListeners();
    }
  };

  requestAnimationFrame(scrollDown);
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Harsh Modi</motion.h2>

          <motion.h1
            style={{ marginTop: 70, marginBottom: 20, lineHeight: 0 }}
            variants={textVariants}
          >
            Full Stack
          </motion.h1>

          <motion.h1
            variants={textVariants}
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Web Developer
          </motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See the Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
            <a href={resumePdf} download>
              <motion.button variants={textVariants}>
                Download Resume
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="scrollIcon"
            onClick={handleAutoScroll}
            style={{ cursor: "pointer" }}
            variants={textVariants}
            animate="scrollButton"
          >
            <img src="scroll.png" alt="Scroll Down" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Master Graduate MERN Stack Developer
      </motion.div>

      <div className="imageContainer">
        <img src="hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
