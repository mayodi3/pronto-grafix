import { motion } from "framer-motion";
import Image from "next/image";

export function ServiceCard({
    icon,
    image,
    title,
    description,
  }: {
    icon: React.ReactNode;
    image: string;
    title: string;
    description: string;
  }) {
    return (
      <motion.div
        className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative h-48">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full">{icon}</div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p>{description}</p>
        </div>
      </motion.div>
    );
  }