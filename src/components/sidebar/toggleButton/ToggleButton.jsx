import { motion } from "framer-motion";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 5 L 21 5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          initial="closed"
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial="closed"
          animate={open ? "open" : "closed"}
          d="M 2 11.5 L 21 11.5"
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 18 L 21 18" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          initial="closed"
          animate={open ? "open" : "closed"}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
