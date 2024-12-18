"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  useEffect(() => {
    const textElement = document.querySelector(".typing-text");
    const text =
      "Your one-stop solution for high-quality fabric branding and promotional items";
    let index = 0;
    const typingSpeed = 1200 / 30; // 50 words per minute

    const type = () => {
      if (index < text.length) {
        textElement!.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();
  }, []);

  return (
    <motion.header
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Pronto Grafix</h1>
      <p className="typing-text text-xl mb-6"></p>
      <div className="flex justify-center space-x-4">
        <Link href="/customer/login" passHref>
          <Button>Customer Login</Button>
        </Link>
        <Link href="/admin/login" passHref>
          <Button variant="outline">Admin Login</Button>
        </Link>
      </div>
    </motion.header>
  );
}
