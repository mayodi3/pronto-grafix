"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <main className="container mx-auto py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Textarea placeholder="Your Message" required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span>
                Mbale Town, Kisumu - Kakamega Highway, Maragoli, Kenya
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <span>+254 768 050 296</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <span>prontographicdesigns@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/ProntoGrafix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook icon"
                  width={15}
                  height={15}
                  className="w-7 h-7"
                />
                Follow us on Facebook
              </Link>
              <Link
                href="https://www.instagram.com/explore/locations/100274788169618/pronto-grafix/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <Image
                  src="/instagram.png"
                  alt="Facebook icon"
                  width={15}
                  height={15}
                  className="w-7 h-7"
                />
                Follow us on Instagram
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
