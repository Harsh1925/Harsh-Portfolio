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
    title: "HouseHunt (Real-Estate Web App)",
    img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "A full-stack MERN (MongoDB, Express.js, React, Node.js) based real estate web application featuring real-time chat, JWT authentication, property listing management, and secure user sessions. Built for scalability, performance, and modern UX.",
    demo: "https://github.com/Harsh1925/HouseHunt",
  },
  {
    id: 1,
    title: "Google Drive Clone (Full stack Webapp) ",
    img: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Developed a file management and sharing platform using Next.js, React, and Appwrite, enabling seamless file uploads, organization, and sharing for over 5,000+ users, with advanced features like global search and sorting options to improve accessibility by 35%.",
    demo: "https://github.com/Harsh1925/Google-Drive-Clone",
  },
  {
    id: 2,
    title: "Squaddle (Match Making Web Application)",
    img: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Innovated Squaddle, a MERN-based matchmaking platform merging Tinder-like swiping with LinkedIn's professionalism to increase in user collaboration. Leveraged HTML, CSS, JavaScript, ReactJS, Express.js, MongoDB, and NodeJS to construct Squaddle.",
    demo: "https://github.com/Harsh1925/Match-Making-Web-Application-Squaddle",
  },
  {
    id: 3,
    title: "Party-Picasso (Full stack Webapp) ",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Party Picasso is your one-stop platform for exploring and attending a diverse range of exciting events happening around you. Whether you're looking for vibrant music concerts, engaging seminars, cutting-edge tech fairs, or lively community gatherings, Party Picasso has something for everyone.",
    demo: "https://github.com/Harsh1925/partypicasso",
  },
  {
    id: 4,
    title: "Eventizer (Twitter / X Clone App) ",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Eventizer, a social media web application leveraging the MERN stack, simplifying event sharing and discovery using React.js and Redux-based user interface. Integrated advanced features that fostered a vibrant community of enthusiasts, enhancing event exploration and sharing experiences.",
    demo: "https://github.com/Harsh1925/Eventizer",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.demo}>See Demo</a>
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
