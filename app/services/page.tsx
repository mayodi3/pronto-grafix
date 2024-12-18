"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/Footer";

const services = [
  {
    id: "custom-fabric-branding",
    title: "Custom Fabric Branding",
    description: "High-quality fabric printing for your brand",
    image: "/custom-fabric-branding.jpg?height=200&width=300",
    details:
      "Our state-of-the-art printing technology ensures vibrant, long-lasting designs on a variety of fabric types. From t-shirts to banners, we bring your vision to life with precision and care.",
  },
  {
    id: "promotional-items",
    title: "Promotional Items",
    description: "Branded merchandise to boost your marketing",
    image: "/custom-fabric-branding.jpg?height=200&width=300",
    details:
      "Stand out from the crowd with our wide range of customizable promotional items. From pens and mugs to tech gadgets, we help you leave a lasting impression on your clients and partners.",
  },
  {
    id: "design-services",
    title: "Design Services",
    description: "Professional design for your branding needs",
    image: "/custom-fabric-branding.jpg?height=200&width=300",
    details:
      "Our team of experienced designers work closely with you to create stunning visuals that capture your brand essence. We offer logo design, packaging design, and comprehensive brand identity development.",
  },
  {
    id: "large-format-printing",
    title: "Large Format Printing",
    description: "Eye-catching banners and signage",
    image: "/custom-fabric-branding.jpg?height=200&width=300",
    details:
      "Make a big impact with our large format printing services. Perfect for trade shows, events, and retail displays, we deliver high-resolution prints that command attention.",
  },
  {
    id: "embroidery",
    title: "Embroidery",
    description: "Add a touch of class with embroidered designs",
    image: "/custom-fabric-branding.jpg?height=200&width=300",
    details:
      "Elevate your brand with our precision embroidery services. Ideal for corporate wear, sports uniforms, and high-end promotional items, our embroidery adds a premium feel to your branded products.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto py-12 px-3">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{service.details}</p>
                  <Link href={`/services/${service.id}`} passHref>
                    <Button>Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
