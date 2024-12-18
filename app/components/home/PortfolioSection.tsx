"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Our Work</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.div
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={`/promotional-items.jpg?height=300&width=300&text=Project ${i}`}
              alt={`Project ${i}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/portfolio" passHref>
          <Button>
            Explore More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}