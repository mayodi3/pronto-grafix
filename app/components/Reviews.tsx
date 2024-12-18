"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  content: string;
  rating: number;
};

type ReviewsProps = {
  reviews: Review[];
  averageRating: number;
};

export function Reviews({ reviews, averageRating }: ReviewsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
      <div className="flex justify-center items-center mb-8">
        <div className="flex items-center">
          {renderStars(Math.round(averageRating))}
        </div>
        <span className="ml-2 text-2xl font-semibold">
          {averageRating.toFixed(1)}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="mb-4">{review.content}</p>
            <p className="font-semibold">{review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
