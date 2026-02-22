"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

/* ─── 共通アニメーション定義 ─── */

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const DEFAULT_VIEWPORT = { once: true, margin: "-100px" as const };
const DEFAULT_TRANSITION = { duration: 0.8, ease: "easeOut" as const };

/* ─── ScrollReveal ラッパー ─── */

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "footer";
};

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  as = "div",
}: ScrollRevealProps) {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={DEFAULT_VIEWPORT}
      transition={{ ...DEFAULT_TRANSITION, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/* ─── StaggerReveal ラッパー（子要素を順番にフェードイン） ─── */

export function StaggerReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}
