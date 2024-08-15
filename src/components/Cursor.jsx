import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,
      backgroundColor: "#FF520E",
      border: "2px solid #FF520E",
      borderRadius: "50%",
      padding: "0px",
    },
    buttonHover: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,
      backgroundColor: "#00000",
      border: "1px solid #00000",
      borderRadius: "50%",
      padding: "0px",
    },
  };

  return (
    <motion.div
      className="cursor fixed pointer-events-none"
      variants={variants}
      animate={cursorVariant}
      transition={{ duration: 0, ease: "easeOut" }}
      style={{
        width: cursorVariant === "buttonHover" ? "15px" : "15px",
        height: cursorVariant === "buttonHover" ? "15px" : "15px",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
