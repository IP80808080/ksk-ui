"use client";

import { useState } from "react";
import SignatureCard from "./SignatureCard";
import { motion } from "framer-motion";

const signatures = [
  {
    id: 1,
    title: "Executive Elegance",
    imageUrl: "/images/S9.jpg?height=200&width=400",
    hasGDriveLink: true,
  },
  {
    id: 2,
    title: "Creative Flair",
    imageUrl: "/images/S12.jpg?height=200&width=400",
  },
  {
    id: 3,
    title: "Minimalist Chic",
    imageUrl: "/images/S5.jpg?height=200&width=400",
  },
  {
    id: 4,
    title: "Bold Impact",
    imageUrl: "/images/S7.jpg?height=200&width=400",
  },
  {
    id: 5,
    title: "Eco Conscious",
    imageUrl: "/images/S1.jpg?height=200&width=400",
  },
  {
    id: 6,
    title: "Tech Innovator",
    imageUrl: "/images/S6.jpg?height=200&width=400",
  },
];

export default function SignatureShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <p className="text-center text-gray-600 mb-8">
        Each signature below has been expertly designed in Adobe Photoshop,
        ensuring pixel-perfect quality and professional aesthetics.
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {signatures.map((signature) => (
          <motion.div
            key={signature.id}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredId(signature.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <SignatureCard
              {...signature}
              isHovered={hoveredId === signature.id}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
