"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "../components/Footer";

// In a real application, this would come from a database or API
const portfolioItems = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  image: `/custom-fabric-branding.jpg?height=300&width=300&text=Project ${
    i + 1
  }`,
}));

const itemsPerPage = 12;

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolioItems.slice(startIndex, endIndex);

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="icon"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
