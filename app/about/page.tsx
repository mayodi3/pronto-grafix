"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Pronto Grafix
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 p-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/about.png?height=400&width=600"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Pronto Grafix has been at the forefront of fabric branding and
              promotional item production for over a decade. Founded in 2010 by
              a group of passionate designers and printing experts, we set out
              to revolutionize the way businesses approach their branding needs.
            </p>
            <p className="mb-4">
              Our journey began in a small workshop with a single printing press
              and a vision to deliver exceptional quality and creativity to our
              clients. Today, we&apos;ve grown into a full-service branding
              powerhouse, equipped with cutting-edge technology and a team of
              skilled professionals.
            </p>
            <p>
              At Pronto Grafix, we believe that every product tells a story. Our
              mission is to help businesses of all sizes craft compelling brand
              narratives through high-quality printed materials and promotional
              items. We&apos;re not just printers; we&apos;re your partners in
              bringing your brand to life.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-3">
            <Card>
              <CardHeader>
                <CardTitle>Quality Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We use only the finest materials and latest printing
                  technologies to ensure your branded items look and feel
                  premium.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Creative Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team of designers brings fresh, innovative ideas to every
                  project, helping your brand stand out in a crowded market.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exceptional Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  From concept to delivery, we provide personalized attention
                  and support to ensure your complete satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
