"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../Map"), { ssr: false });


export function LocationSection() {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
      <DynamicMap />
    </motion.section>
  );
}