"use client";

import type React from "react";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  duration?: number;
}

export function GradientText({
  children,
  colors = ["#4b5563", "#9ca3af", "#4b5563"],
  duration = 5,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")})`;

  return (
    <motion.span
      style={{
        background: gradient,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration, repeat: Number.POSITIVE_INFINITY }}
    >
      {children}
    </motion.span>
  );
}
