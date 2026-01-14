"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface MediaCardProps {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
  priority?: boolean;
}

function MediaCard({ type, src, alt, poster, priority }: MediaCardProps) {
  return (
    <motion.div
      className="flex-1 min-w-0 h-full bg-white border border-gray-500/30 rounded-lg overflow-hidden shadow-lg relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {type === "video" ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image
          src={src}
          alt={alt || ""}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      )}
    </motion.div>
  );
}

interface HeroMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

interface HeroSectionProps {
  media: HeroMedia[];
}

export default function HeroSection({ media }: HeroSectionProps) {
  return (
    <motion.section
      className="flex gap-2 flex-1 min-h-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      {media.map((item, index) => (
        <MediaCard
          key={index}
          type={item.type}
          src={item.src}
          alt={item.alt}
          poster={item.poster}
          priority={index === 0}
        />
      ))}
    </motion.section>
  );
}
