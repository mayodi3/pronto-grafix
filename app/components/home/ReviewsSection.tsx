"use client";

import { motion } from "framer-motion";
import { Reviews } from "../Reviews";

const reviews = [
  { id: "1", name: "Janet Ambani", content: "Excellent quality and service!", rating: 5 },
  { id: "2", name: "Wilberforce Kitiezo", content: "Fast delivery and great products.", rating: 4 },
  { id: "3", name: "Mary Mmbone", content: "Very satisfied with my order.", rating: 5 },
];

const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

export function ReviewsSection() {
  return (
    <motion.section className="mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Reviews reviews={reviews} averageRating={averageRating} />
    </motion.section>
  );
}