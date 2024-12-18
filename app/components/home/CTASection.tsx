"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <motion.section className="text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <Link href="/contact" passHref>
        <Button size="lg">
          Contact Us Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </motion.section>
  );
}