"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

function ImageCard({ src, alt, priority }: ImageCardProps) {
  return (
    <motion.div
      className="flex-1 min-w-0 h-full bg-white border border-gray-500/30 rounded-lg overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </motion.div>
  );
}

interface HeroSectionProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function HeroSection({ images }: HeroSectionProps) {
  return (
    <motion.section
      className="flex gap-2 flex-1 min-h-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image.src}
          alt={image.alt}
          priority={index === 0}
        />
      ))}
    </motion.section>
  );
}
