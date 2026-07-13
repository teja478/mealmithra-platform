"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-orange-100
        bg-white/80
        backdrop-blur-xl
        p-8
        shadow-lg
        hover:shadow-2xl
        hover:shadow-orange-200/40
        transition-all
        duration-500
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-100 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-green-100 text-orange-600">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-zinc-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-zinc-600">
        {description}
      </p>
    </motion.div>
  );
}