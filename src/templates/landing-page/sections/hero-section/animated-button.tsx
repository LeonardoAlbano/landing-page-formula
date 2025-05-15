"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  children?: React.ReactNode;
}

export function AnimatedButton({
  onClick,
  className,
  variant = "default",
  children = "Welcome",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("flex items-center justify-center", className)}
    >
      <Button
        onClick={onClick}
        variant={variant}
        className="rounded-3xl"
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}
