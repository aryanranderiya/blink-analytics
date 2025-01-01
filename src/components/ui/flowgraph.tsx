"use client";

import { motion } from "framer-motion";
import React from "react";

export const AnimatedFlowDiagram = () => {
  const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Animated Flow Diagram
      </h1>
      <svg
        viewBox="0 0 1400 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Main Flowchart Paths */}
        <motion.path
          d="M200 150 L400 150"
          stroke="hsl(200, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M400 150 L600 150"
          stroke="hsl(340, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M600 150 L800 150"
          stroke="hsl(50, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Secondary Layer */}
        <motion.path
          d="M400 150 L400 250"
          stroke="hsl(120, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M400 250 L600 250"
          stroke="hsl(240, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M600 250 L600 150"
          stroke="hsl(100, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Blocks */}
        <rect x="150" y="125" width="100" height="50" rx="10" fill="hsl(120, 70%, 70%)" />
        <text x="170" y="155" fontSize="14" fill="#000">
          Prompt
        </text>

        <rect x="375" y="125" width="100" height="50" rx="10" fill="hsl(190, 80%, 80%)" />
        <text x="395" y="155" fontSize="14" fill="#000">
          Responsible AI
        </text>

        <rect x="575" y="125" width="100" height="50" rx="10" fill="hsl(50, 80%, 80%)" />
        <text x="590" y="155" fontSize="14" fill="#000">
          Foundation Models
        </text>

        <rect x="775" y="125" width="100" height="50" rx="10" fill="hsl(300, 70%, 70%)" />
        <text x="795" y="155" fontSize="14" fill="#000">
          Response
        </text>

        <rect x="375" y="225" width="100" height="50" rx="10" fill="hsl(160, 70%, 70%)" />
        <text x="395" y="255" fontSize="14" fill="#000">
          RAG
        </text>

        <rect x="575" y="225" width="100" height="50" rx="10" fill="hsl(80, 80%, 70%)" />
        <text x="595" y="255" fontSize="14" fill="#000">
          Tuning
        </text>

        {/* More Paths */}
        <motion.path
          d="M800 150 L800 350"
          stroke="hsl(300, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M800 350 L1000 350"
          stroke="hsl(200, 70%, 50%)"
          strokeWidth="3"
          fill="none"
          variants={pathAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Final Block */}
        <rect x="975" y="325" width="100" height="50" rx="10" fill="hsl(140, 80%, 70%)" />
        <text x="990" y="355" fontSize="14" fill="#000">
          Output
        </text>
      </svg>
    </div>
  );
};

export default AnimatedFlowDiagram;
