"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement feedback submission to Appwrite
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
    setFeedback("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer ${
              star <= rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <Textarea
        placeholder="Enter your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={5}
      />
      <Button type="submit" disabled={!feedback.trim() || rating === 0}>
        Submit Feedback
      </Button>
    </form>
  );
}
