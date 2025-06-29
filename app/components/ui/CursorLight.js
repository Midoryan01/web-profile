"use client";

import { useState, useEffect } from "react";

const CursorLight = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-light" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />;
};

export default CursorLight;