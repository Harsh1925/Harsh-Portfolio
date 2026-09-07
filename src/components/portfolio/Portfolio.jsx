import "./portfolio.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import incidentCommandCenter from "./assets/ai-incident-command-center.png";
import openPilotAi from "./assets/openpilot-ai.png";

const items = [
  {
    id: 0,
    title: "AI Incident Command Center",
    img: incidentCommandCenter,
    desc: "An AI incident analysis dashboard that correlates logs, alerts, metrics, and incident conversations to surface likely root cause, affected services, event timelines, and next actions.",
    stack: ["React", "FastAPI", "LangGraph", "PostgreSQL", "Elasticsearch", "Redis"],
    highlights: ["Correlates logs, alerts, metrics, and incident chat", "Surfaces root cause, affected services, and timelines", "Generates postmortems and Jira-style resolution drafts"],
    outcome: "Built to move teams from alert triage to resolution planning faster.",
    demo: null,
  },
  {
    id: 1,
    title: "OpenPilot AI — Developer Toolkit",
    img: openPilotAi,
    desc: "A full-stack developer platform for comparing responses across OpenAI, Anthropic, Gemini, Groq, OpenRouter, and local Ollama models—with streaming chat, prompt history, cost tracking, and AI-assisted PR review.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Ollama"],
    highlights: ["Compares hosted and local LLM responses side by side", "Tracks tokens, costs, prompts, and saved templates", "Reviews PR diffs for security, performance, and missing tests"],
    outcome: "A practical workspace for evaluating model quality and spend.",
    demo: null,
  },
  {
    id: 2,
    title: "Squaddle — Team Matchmaking Platform (MERN)",
    img: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A matchmaking web app that blends Tinder-style swiping with LinkedIn-style profiles to help people form project teams. Optimized React + Express + MongoDB data flow (memoized selectors, indexed queries, lean payloads) to keep interactions smooth as engagement grew.",
    stack: ["React", "Express", "MongoDB", "Node.js"],
    highlights: ["Swipe-first team discovery", "Profile-led collaboration matching", "Lean queries and memoized data flow"],
    outcome: "Designed to keep team discovery responsive as engagement grows.",
    demo: "https://github.com/Harsh1925/Match-Making-Web-Application-Squaddle",
  },
  {
    id: 3,
    title: "HouseHunt — Real-Estate Listing Platform (MERN)",
    img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "Full-stack MERN app for browsing and managing property listings with search, filters, and modern UI. Designed REST APIs, secured routes, and built responsive pages so users can explore homes without friction.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    highlights: ["Search and filter listing workflows", "Secure route and API handling", "Responsive property exploration"],
    outcome: "A clearer journey from property search to listing management.",
    demo: "https://github.com/Harsh1925/HouseHunt",
  },
  {
    id: 4,
    title: "Google Drive Clone — Next.js + Appwrite",
    img: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A file management and sharing platform built with Next.js, React, and Appwrite. Supports uploads, folder structures, and sharing, with sensible defaults around UX and performance for everyday use.",
    stack: ["Next.js", "React", "Appwrite", "File storage"],
    highlights: ["Upload and share files", "Organize files into folders", "Designed for everyday file workflows"],
    outcome: "A familiar file experience with practical sharing at its core.",
    demo: "https://github.com/Harsh1925/Google-Drive-Clone",
  },
  {
    id: 5,
    title: "Party Picasso — Event Discovery Web App",
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1000",
    desc: "A full-stack web app for discovering and organizing events. Focused on clear navigation, responsive layouts, and maintainable API contracts so it stays easy to extend as new event types are added.",
    stack: ["Full stack", "REST APIs", "Responsive UI", "Event discovery"],
    highlights: ["Discover and organize events", "Clear navigation across event types", "Maintainable contracts for future extension"],
    outcome: "Structured to grow as the event catalog and community expand.",
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
            <div className="project-brief">
              <div className="project-stack" aria-label={`${item.title} technology stack`}><span>Built with</span>{item.stack.map((technology) => <em key={technology}>{technology}</em>)}</div>
              <ul className="project-highlights">{item.highlights.map((highlight) => <li key={highlight}><FiCheck />{highlight}</li>)}</ul>
              <p className="project-outcome">{item.outcome}</p>
            </div>
            {item.demo && <a className="project-link" href={item.demo} target="_blank" rel="noreferrer">View on GitHub <FiArrowUpRight /></a>}
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
    <div className="portfolio" id="Portfolio">
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
