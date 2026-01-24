"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverFillCardProps = {
  children: ReactNode;
  className?: string;
};

export const HoverFillCard = ({ children, className }: HoverFillCardProps) => {
  return (
    <motion.div
      initial="rest"
      whileTap="hover"
      whileFocus="hover"
      whileHover="hover"
      animate="rest"
      className={`relative overflow-hidden ${className} group cursor-pointer`}
    >
      {/* Fill layer */}
      <motion.div
        variants={{
          rest: { scale: 0, opacity: 1 },
          hover: { scale: 1.3, opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
      >
        <div className="h-40 w-40 rounded-full bg-brand-pink text-white" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={{
          rest: { color: "#272525" },
          hover: { color: "#fff" },
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
