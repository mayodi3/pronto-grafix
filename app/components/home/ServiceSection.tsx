"use client";

import { motion } from "framer-motion";
import { Printer, Package, Palette } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export function ServiceSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Printer className="h-12 w-12 text-primary" />}
          image="/promotional-items.jpg?height=400&width=600"
          title="Custom Fabric Branding"
          description="High-quality fabric printing for your brand"
        />
        <ServiceCard
          icon={<Package className="h-12 w-12 text-primary" />}
          image="/promotional-items.jpg?height=400&width=600"
          title="Promotional Items"
          description="Branded merchandise to boost your marketing"
        />
        <ServiceCard
          icon={<Palette className="h-12 w-12 text-primary" />}
          image="/promotional-items.jpg?height=400&width=600"
          title="Design Services"
          description="Professional design for your branding needs"
        />
      </div>
    </motion.section>
  );
}
