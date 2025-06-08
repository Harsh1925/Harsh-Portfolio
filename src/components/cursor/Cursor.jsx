import "./cursor.scss";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      setShowCursor(false);
      return;
    }

    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  if (!showCursor) return null;

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default Cursor;
