import "./about.scss";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const highlights = [
  {
    title: "Who I Am",
    description: (
  <>
    Hello, my name is Harsh Modi, and I am a Full Stack Software Engineer <br /> dedicated to building high-scale, secure, and user-centric systems. <br />
    I am currently pursuing my Master of Science in Computer Science at Pace University in New York, <br /> building upon my Bachelor of Technology in Computer Science from Ahmedabad University.
  </>
),
    icons: [
      { id: "react", icon: <FaReact /> },
      { id: "github", icon: <FaGithub /> },
      { id: "node", icon: <FaNodeJs /> },
      { id: "database", icon: <FaDatabase /> },
      { id: "aws", icon: <FaAws /> },
    ],
  },
  {
    title: "Expertise",
    description:(
  <>
      My technical toolkit is broad, spanning languages such as JavaScript, Python and Go, <br />to modern frameworks like React.js and Django, as well as infrastructure tools like Docker and Kubernetes.<br /> Proficient in full-stack development using MERN, REST APIs, Prisma ORM, CI/CD (Jenkins), and AWS. </>
),
    icons: [
      { id: "react", icon: <FaReact /> },
      { id: "aws", icon: <FaAws /> },
      { id: "node", icon: <FaNodeJs /> },
      { id: "database", icon: <FaDatabase /> },
      { id: "js", icon: <IoLogoJavascript /> },
    ],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Shoptaki",
    summary:
      "architect and deploy a high-performance, local-first messaging microservice capable of sustaining massive message throughput while ensuring future-proof security through Post-Quantum Cryptography (PQC).",
    stack: ["Node.js", "Express.js", "Socket.IO", "Docker", "APIs", "Realtime"],
  },
  {
    role: "Software Developer",
    company: "IBM",
    summary:
      "Engineer and optimize scalable full-stack applications within cross-functional teams. The focus was on enhancing system modularity, revamping user experience (UI/UX), and fortifying backend security to ensure high availability and rapid delivery lifecycles.",
    stack: ["React", "Node.js", "NoSQL", "Docker", "Jenkins", "Github"],
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

      <div className="contentGrid">
        <div className="leftColumn">
          {highlights.map((card, index) => (
            <motion.div
              className="floatingWrapper"
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="infoCard">
                <div className="cardInner">
                  <div className="cardFront">
                    <h2>{card.title}</h2>
                  </div>
                  <div className="cardBack">
                    <p>{card.description}</p>
                    <div className="tech-icons">
                      {card.icons.map((item) => (
                        <span key={item.id}>{item.icon}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experienceCard"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="experienceHeader">
            <span>Experience</span>
            <h2>Recent Work</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div className="timelineItem" key={item.company}>
                <div className="dot" />
                <div className="timelineContent">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.summary}</p>
                  <div className="stackTags">
                    {item.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skillsBar">
            <span><FaReact /> React</span>
            <span><DiMongodb /> MongoDB</span>
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express</span>
            <span><SiTailwindcss /> Tailwind</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
