"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeatureSection() {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Star className="h-8 w-8 text-yellow-400" />}
          title="Quality Assurance"
          description="We guarantee top-notch quality in all our products and services."
        />
        <FeatureCard
          icon={<TrendingUp className="h-8 w-8 text-green-500" />}
          title="Fast Turnaround"
          description="Quick production and delivery to meet your deadlines."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-blue-500" />}
          title="Expert Team"
          description="Our skilled professionals ensure the best results for your projects."
        />
      </div>
    </motion.section>
  );
}
