"use client";

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
    <div className="relative h-full min-w-0 flex-1 overflow-hidden rounded-lg border border-gray-500/30 bg-white shadow-lg">
      {type === "video" ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{ minWidth: "100%", minHeight: "100%" }}
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
    </div>
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
    <section className="flex h-full min-h-0 flex-1 gap-2">
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
    </section>
  );
}
