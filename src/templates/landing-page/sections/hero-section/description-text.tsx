"use client";

import type React from "react";

import { cn } from "@/lib/utils";

interface DescriptionTextProps {
  children?: React.ReactNode;
  className?: string;
}

export function DescriptionText({ children, className }: DescriptionTextProps) {
  return (
    <p
      className={cn(
        "text-gray-300 leading-relaxed",
        className ? className : "font-semibold text-base text-left"
      )}
    >
      {children ||
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."}
    </p>
  );
}
