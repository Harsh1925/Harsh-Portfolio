/* eslint-disable react/jsx-key */
import "./about.scss";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const cards = [
  {
    title: "Who I Am",
    description:
      "I’m Harsh Modi, a full-stack developer passionate about secure, scalable web apps. With a 3.97 GPA in MS CS at Pace University, I’ve led projects with advanced tech stacks and real-world impact.",
    icons: [<FaReact />, <FaGithub />, <FaNodeJs />, <FaDatabase />, <FaAws />],
  },
  {
    title: "Experience",
    description:
      "Worked at Sensegood as a web development intern, enhancing UI with ReactJS and improving user engagement by 15%. Built and deployed several production-grade apps using MERN stack.",
    icons: [
      <FaReact />,
      <DiMongodb />,
      <FaNodeJs />,
      <SiExpress />,
      <SiTailwindcss />,
    ],
  },
  {
    title: "Expertise",
    description:
      "Proficient in full-stack development using MERN, REST APIs, Prisma ORM, CI/CD (Jenkins), and AWS. Skilled in agile methodology and real-time features like chat & auth.",
    icons: [
      <FaReact />,
      <FaAws />,
      <FaNodeJs />,
      <FaDatabase />,
      <IoLogoJavascript />,
    ],
  },
];

const About = () => {
  return (
    <section className="about" id="About">
      <div className="heading">
        <span className="tag">about me</span>
        <div className="headingWrapper">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Digital Bridges
          </motion.h1>
          <a href="#Contact">
            <button className="contactButton">Get in touch</button>
          </a>
        </div>
      </div>

      <div className="cardWrapper">
        {cards.map((card, index) => (
          <motion.div
            className="floatingWrapper"
            key={index}
            animate={{ y: [0, -20, 0] }} // ⬅️ more vertical motion
            transition={{
              duration: 2, // ⬅️ faster float
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <div className="card">
              <div className="cardInner">
                <div className="cardFront">
                  <h2>{card.title}</h2>
                </div>
                <div className="cardBack">
                  <div className="content">
                    <p>{card.description}</p>
                    <div className="tech-icons">
                      {card.icons.map((Icon, i) => (
                        <span key={i}>{Icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
