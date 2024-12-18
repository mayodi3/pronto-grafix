"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/app/components/Footer";

const services = [
  {
    id: "custom-fabric-branding",
    title: "Custom Fabric Branding",
    description: "High-quality fabric printing for your brand",
    image: "/custom-fabric-branding.jpg?height=400&width=600",
    details:
      "Our state-of-the-art printing technology ensures vibrant, long-lasting designs on a variety of fabric types. From t-shirts to banners, we bring your vision to life with precision and care.",
    features: [
      "High-quality fabric printing",
      "Wide range of fabric options",
      "Vibrant and long-lasting designs",
      "Custom sizes and shapes",
      "Eco-friendly ink options",
    ],
    process: [
      "Consultation to understand your needs",
      "Design creation or refinement",
      "Fabric selection",
      "Sample production",
      "Bulk printing",
      "Quality control",
      "Packaging and delivery",
    ],
  },
  {
    id: "promotional-items",
    title: "Promotional Items",
    description: "Branded merchandise to boost your marketing",
    image: "/custom-fabric-branding.jpg?height=400&width=600",
    details:
      "Stand out from the crowd with our wide range of customizable promotional items. From pens and mugs to tech gadgets, we help you leave a lasting impression on your clients and partners.",
    features: [
      "Wide range of promotional products",
      "High-quality branding",
      "Bulk order discounts",
      "Custom packaging options",
      "Eco-friendly product choices",
    ],
    process: [
      "Product selection consultation",
      "Design adaptation for chosen products",
      "Sample production",
      "Approval and refinement",
      "Bulk production",
      "Quality assurance",
      "Packaging and shipping",
    ],
  },
  {
    id: "design-services",
    title: "Design Services",
    description: "Professional design for your branding needs",
    image: "/custom-fabric-branding.jpg?height=400&width=600",
    details:
      "Our team of experienced designers work closely with you to create stunning visuals that capture your brand essence. We offer logo design, packaging design, and comprehensive brand identity development.",
    features: [
      "Logo design",
      "Brand identity development",
      "Packaging design",
      "Marketing material design",
      "Web and digital design",
    ],
    process: [
      "Initial consultation and brief",
      "Research and concept development",
      "Initial design presentations",
      "Feedback and refinement",
      "Final design approval",
      "File preparation and delivery",
      "Brand guidelines creation",
    ],
  },
  {
    id: "large-format-printing",
    title: "Large Format Printing",
    description: "Eye-catching banners and signage",
    image: "/custom-fabric-branding.jpg?height=400&width=600",
    details:
      "Make a big impact with our large format printing services. Perfect for trade shows, events, and retail displays, we deliver high-resolution prints that command attention.",
    features: [
      "High-resolution printing",
      "Indoor and outdoor options",
      "Durable materials",
      "Custom sizes and shapes",
      "Installation services available",
    ],
    process: [
      "Project requirements discussion",
      "Material selection",
      "Design adaptation for large format",
      "Proof approval",
      "Production",
      "Quality check",
      "Delivery or installation",
    ],
  },
  {
    id: "embroidery",
    title: "Embroidery",
    description: "Add a touch of class with embroidered designs",
    image: "/custom-fabric-branding.jpg?height=400&width=600",
    details:
      "Elevate your brand with our precision embroidery services. Ideal for corporate wear, sports uniforms, and high-end promotional items, our embroidery adds a premium feel to your branded products.",
    features: [
      "High-quality thread options",
      "Precision stitching",
      "Suitable for various fabrics",
      "Durable and long-lasting",
      "Available for small and large orders",
    ],
    process: [
      "Design consultation",
      "Digitization of design for embroidery",
      "Thread color selection",
      "Sample production",
      "Approval and refinement",
      "Bulk production",
      "Quality control and finishing",
    ],
  },
];

export default function ServicePage() {
  const params = useParams();
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto py-12 px-3">
        <Link href="/services" passHref>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Button>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg mb-4">{service.details}</p>
              <h2 className="text-2xl font-semibold mb-2">Features</h2>
              <ul className="list-disc pl-5 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <ol className="list-decimal pl-5">
              {service.process.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-8 text-center">
            <Link href="/contact" passHref>
              <Button size="lg">Get a Quote</Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
