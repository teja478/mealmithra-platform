"use client";

import {
  CookingPot,
  Truck,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import { motion } from "framer-motion";
import FeatureCard from "./cards/FeatureCard";

export default function WhyMealMithra() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-[#F7FFF8] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
            WHY CHOOSE MEALMITHRA
          </span>

          <h2 className="mt-8 text-5xl font-bold text-zinc-900">
            Home-style food,
            <span className="text-orange-600">
              {" "}made for modern professionals.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            We bring together freshness, nutrition, hygiene and punctual
            office delivery so that lunch becomes the easiest part of your day.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <FeatureCard
            icon={<CookingPot size={32} />}
            title="Freshly Cooked Daily"
            description="Prepared every morning using fresh vegetables and quality ingredients."
          />

          <FeatureCard
            icon={<Truck size={32} />}
            title="Delivered To Your Office"
            description="No waiting. No daily ordering. Lunch reaches your workplace on time."
          />

          <FeatureCard
            icon={<ShieldCheck size={32} />}
            title="100% Hygienic Kitchen"
            description="Strict hygiene standards and carefully prepared meals you can trust."
          />

          <FeatureCard
            icon={<Leaf size={32} />}
            title="Healthy & Balanced"
            description="Nutritious meals designed for IT professionals, fitness enthusiasts and busy teams."
          />

        </div>

      </div>
    </section>
  );
}