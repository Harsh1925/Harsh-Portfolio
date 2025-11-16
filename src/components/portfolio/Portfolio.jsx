import { desc, img } from "framer-motion/client";
import "./portfolio.scss";
import {
  motion,
  progress,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 0,
    title: "Squaddle — Team Matchmaking Platform (MERN)",
    img: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A matchmaking web app that blends Tinder-style swiping with LinkedIn-style profiles to help people form project teams. Optimized React + Express + MongoDB data flow (memoized selectors, indexed queries, lean payloads) to keep interactions smooth as engagement grew.",
    demo: "https://github.com/Harsh1925/Match-Making-Web-Application-Squaddle",
  },
  {
    id: 1,
    title: "HouseHunt — Real-Estate Listing Platform (MERN)",
    img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "Full-stack MERN app for browsing and managing property listings with search, filters, and modern UI. Designed REST APIs, secured routes, and built responsive pages so users can explore homes without friction.",
    demo: "https://github.com/Harsh1925/HouseHunt",
  },
  {
    id: 2,
    title: "Google Drive Clone — Next.js + Appwrite",
    img: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A file management and sharing platform built with Next.js, React, and Appwrite. Supports uploads, folder structures, and sharing, with sensible defaults around UX and performance for everyday use.",
    demo: "https://github.com/Harsh1925/Google-Drive-Clone",
  },
  {
    id: 3,
    title: "Party Picasso — Event Discovery Web App",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A full-stack web app for discovering and organizing events. Focused on clear navigation, responsive layouts, and maintainable API contracts so it stays easy to extend as new event types are added.",
    demo: "https://github.com/Harsh1925/partypicasso",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo} target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
