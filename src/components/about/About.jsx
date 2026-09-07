import "./about.scss";
import { useRef } from "react";
import { motion, useAnimationControls, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { FaDatabase, FaNodeJs, FaReact, FaShieldAlt } from "react-icons/fa";
import { FiArrowUpRight, FiCpu, FiZap } from "react-icons/fi";

const facts = [["3+", "years owning software end to end"], ["35%", "faster targeted dashboard loads"], ["95+", "Lighthouse accessibility scores"]];
const practices = [
  { icon: FaReact, title: "Frontend", detail: "React, Next.js, TypeScript, accessible responsive UI" },
  { icon: FaNodeJs, title: "Backend", detail: "Node.js, FastAPI, REST APIs, PostgreSQL, Redis" },
  { icon: FiCpu, title: "AI systems", detail: "LLM integration, retrieval, evaluation, cost tracking" },
  { icon: FaShieldAlt, title: "Delivery", detail: "Security controls, Docker, testing, CI/CD" },
];
const jobs = [
  {
    company: "Shoptaki", role: "Software Engineer", dates: "Jun 2025 — Present",
    detail: "Building secure, local-first messaging infrastructure across Node.js, Express, Socket.IO, and Docker.",
    highlights: ["Owned 20+ REST endpoints for contacts, conversations, delivery state, and administration.", "Standardized five services—Gateway, Auth, User, Master, and Messaging—with Docker Compose, Postman collections, and runbooks.", "Implemented Zod, Helmet, rate limiting, AES-GCM, HKDF key derivation, and salted SHA-256 contact discovery."],
    impact: "5–10ms local contact-hash lookups through an in-memory TTL index",
    stack: ["Node.js", "Express", "Socket.IO", "Docker", "AES-GCM"],
  },
  {
    company: "IBM", role: "Software Developer", dates: "Oct 2021 — Aug 2023",
    detail: "Delivered enterprise React and TypeScript dashboards backed by dependable Node.js/Express services and evolving data models.",
    highlights: ["Built reusable tables, filters, forms, and detail views for internal business workflows.", "Maintained REST endpoints and SQL/NoSQL model updates with validation, predictable errors, and integration-test support.", "Improved dashboard delivery with lazy-loaded views and leaner API payloads."],
    impact: "35% faster targeted loads and 95+ Lighthouse accessibility during QA",
    stack: ["React", "TypeScript", "Node.js", "Express", "SQL / NoSQL"],
  },
];
const ease = [0.16, 1, 0.3, 1];
const cascade = {
  hiddenDown: {}, hiddenUp: {},
  enterDown: { transition: { delayChildren: 0.08, staggerChildren: 0.08 } },
  enterUp: { transition: { delayChildren: 0.08, staggerChildren: 0.08 } },
};
const panelReveal = {
  hiddenDown: { opacity: 0, clipPath: "inset(0 0 100% 0 round 12px)" },
  hiddenUp: { opacity: 0, clipPath: "inset(0 0 100% 0 round 12px)" },
  enterDown: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 12px)",
    transition: { duration: 1.2, delay: 0.12, ease, delayChildren: 0, staggerChildren: 0.07 },
  },
  enterUp: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0 round 12px)",
    transition: { duration: 1.2, delay: 0.12, ease, delayChildren: 0, staggerChildren: 0.07 },
  },
};
const experienceCascade = { hiddenDown: {}, hiddenUp: {}, enterDown: { transition: { staggerChildren: 0.08 } }, enterUp: { transition: { staggerChildren: 0.08 } } };
const experienceReveal = {
  hiddenDown: { opacity: 0, y: 22, filter: "blur(6px)" },
  hiddenUp: { opacity: 0, y: -22, filter: "blur(6px)" },
  enterDown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.48, ease } },
  enterUp: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.48, ease } },
};
const roleReveal = {
  hiddenDown: { opacity: 0, y: 24, filter: "blur(6px)" },
  hiddenUp: { opacity: 0, y: -24, filter: "blur(6px)" },
  enterDown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.42, ease, when: "beforeChildren", delayChildren: 0.04 } },
  enterUp: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.42, ease, when: "beforeChildren", delayChildren: 0.04 } },
};
const roleTextCascade = { hiddenDown: {}, hiddenUp: {}, enterDown: { transition: { staggerChildren: 0.045 } }, enterUp: { transition: { staggerChildren: 0.045 } } };
const roleTextReveal = {
  hiddenDown: { opacity: 0, x: -14 }, hiddenUp: { opacity: 0, x: 14 },
  enterDown: { opacity: 1, x: 0, transition: { duration: 0.32, ease } },
  enterUp: { opacity: 1, x: 0, transition: { duration: 0.32, ease } },
};
const highlightCascade = { hiddenDown: {}, hiddenUp: {}, enterDown: { transition: { staggerChildren: 0.08 } }, enterUp: { transition: { staggerChildren: 0.08 } } };
const highlightReveal = {
  hiddenDown: { opacity: 0, x: -14 }, hiddenUp: { opacity: 0, x: 14 },
  enterDown: { opacity: 1, x: 0, transition: { duration: 0.46, ease } },
  enterUp: { opacity: 1, x: 0, transition: { duration: 0.46, ease } },
};
const sweepReveal = {
  hiddenDown: { opacity: 0, y: "-125%" }, hiddenUp: { opacity: 0, y: "125%" },
  enterDown: { opacity: [0, 0.9, 0], y: ["-125%", "210%"], transition: { duration: 1.65, delay: 0.25, ease: "linear" } },
  enterUp: { opacity: [0, 0.9, 0], y: ["125%", "-210%"], transition: { duration: 1.65, delay: 0.25, ease: "linear" } },
};

const About = () => {
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();
  const { scrollY } = useScroll();
  const scrollDirection = useRef("down");
  const replayFrame = useRef();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && previous !== latest) scrollDirection.current = latest > previous ? "down" : "up";
  });
  const replay = () => {
    const direction = scrollDirection.current === "up" ? "Up" : "Down";
    if (replayFrame.current) cancelAnimationFrame(replayFrame.current);
    controls.stop();
    controls.set(`hidden${direction}`);
    replayFrame.current = requestAnimationFrame(() => controls.start(`enter${direction}`));
  };
  const reset = () => {
    if (replayFrame.current) cancelAnimationFrame(replayFrame.current);
    controls.stop();
    controls.set(`hidden${scrollDirection.current === "up" ? "Up" : "Down"}`);
  };
  const staticReveal = { hiddenDown: { opacity: 0 }, hiddenUp: { opacity: 0 }, enterDown: { opacity: 1, transition: { duration: 0.18 } }, enterUp: { opacity: 1, transition: { duration: 0.18 } } };
  const unifiedTextReveal = reduceMotion ? staticReveal : experienceReveal;
  const recordReveal = reduceMotion ? staticReveal : panelReveal;
  const recordContentReveal = unifiedTextReveal;
  const textReveal = reduceMotion ? staticReveal : roleTextReveal;
  const highlightTextReveal = reduceMotion ? staticReveal : highlightReveal;
  const scanReveal = reduceMotion ? { hiddenDown: { opacity: 0 }, hiddenUp: { opacity: 0 }, enterDown: { opacity: 0 }, enterUp: { opacity: 0 } } : sweepReveal;

  return (
  <div className="about" id="About">
    <section className="about-scene">
      <motion.div className="about-frame" initial="hiddenDown" animate={controls} onViewportEnter={replay} onViewportLeave={reset} viewport={{ amount: 0.2 }} variants={cascade}>
        <div className="about-layout">
          <motion.div className="about-profile" variants={cascade}>
            <motion.p className="about-kicker" variants={unifiedTextReveal}>About Harsh Modi</motion.p>
            <motion.h1 variants={unifiedTextReveal}>Engineering useful systems, <span>end to end.</span></motion.h1>
            <motion.p className="about-lede" variants={unifiedTextReveal}>A full-stack software engineer who connects thoughtful interfaces, dependable services, and AI-powered workflows into products people can trust. I’m comfortable owning a feature from architecture through delivery—and pragmatic about the trade-offs along the way.</motion.p>
            <motion.a className="about-link" href="#Contact" variants={unifiedTextReveal}>Start a conversation <FiArrowUpRight /></motion.a>
            <motion.div className="about-proof" aria-label="Professional highlights" variants={unifiedTextReveal}>
              {facts.map(([value, label], index) => <motion.div className="proof-item" key={label} variants={unifiedTextReveal}><span>{index === 0 ? <FiZap /> : index === 1 ? <FiArrowUpRight /> : <FaShieldAlt />}</span><strong>{value}</strong><p>{label}</p></motion.div>)}
            </motion.div>
            <motion.div className="practice-grid" aria-label="Technical practice" variants={cascade}>
              {practices.map(({ icon: Icon, title, detail }) => <motion.article key={title} variants={unifiedTextReveal}><span><Icon /></span><div><h2>{title}</h2><p>{detail}</p></div></motion.article>)}
            </motion.div>
            <motion.div className="education" variants={unifiedTextReveal}>
              <span><FaDatabase /> Education</span>
              <div><strong>Pace University</strong><p>MS in Computer Science<br />New York · May 2025</p></div>
              <div><strong>Ahmedabad University</strong><p>BTech in Computer Science<br />Ahmedabad · June 2023</p></div>
            </motion.div>
          </motion.div>
          <motion.aside className="experience-panel" aria-labelledby="experience-heading" variants={recordReveal}>
            <motion.div className="experience-sweep" aria-hidden="true" variants={scanReveal} />
            <motion.div className="experience-title" variants={experienceCascade}><motion.p className="about-kicker" variants={recordContentReveal}>Experience</motion.p><motion.h2 id="experience-heading" variants={recordContentReveal}>A record of dependable delivery.</motion.h2></motion.div>
            <motion.div className="role-list" variants={experienceCascade}>
              {jobs.map((job) => <motion.article className="role" key={job.company} variants={reduceMotion ? staticReveal : roleReveal}><motion.div className="role-text" variants={roleTextCascade}><motion.div className="role-top" variants={textReveal}><div><h3>{job.company}</h3><p>{job.role}</p></div><time>{job.dates}</time></motion.div><motion.p className="role-detail" variants={textReveal}>{job.detail}</motion.p><motion.div className="role-stack" aria-label={`${job.company} technology stack`} variants={textReveal}><span>Stack</span>{job.stack.map((technology) => <em key={technology}>{technology}</em>)}</motion.div><motion.ul variants={highlightCascade}>{job.highlights.map((highlight) => <motion.li key={highlight} variants={highlightTextReveal}>{highlight}</motion.li>)}</motion.ul><motion.p className="role-impact" variants={textReveal}><FiZap /> {job.impact}</motion.p></motion.div></motion.article>)}
            </motion.div>
            <motion.div className="experience-note" variants={recordContentReveal}><strong>Selected systems</strong><p>AI Incident Command Center for log correlation and engineer-ready postmortems; OpenPilot AI for multi-provider model comparison, prompt evaluation, and GitHub PR review.</p></motion.div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  </div>
  );
};

export default About;
