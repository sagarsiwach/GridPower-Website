"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { GridItem } from "@/lib/grid-data";
import { useTilt } from "@/hooks/useTilt";

interface GridCardProps {
  item: GridItem;
  onClick?: () => void;
}

export default function GridCard({ item, onClick }: GridCardProps) {
  const hasChildren = item.children && item.children.length > 0;

  // Subtle 3D tilt effect
  const {
    ref,
    style: tiltStyle,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = useTilt({
    maxRotation: 3,
    perspective: 1200,
  });

  return (
    <div
      ref={ref}
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-lg border border-gray-500/30 bg-white shadow-lg"
      style={tiltStyle}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Media Background */}
      {item.media && (
        <>
          {item.media.type === "video" ? (
            <video
              src={item.media.src}
              poster={item.media.poster}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={item.media.src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </>
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
        <h3 className="mb-1 text-2xl font-medium">{item.title}</h3>
        {item.description && <p className="text-sm text-white/80">{item.description}</p>}
      </div>

      {/* Corner Indicator for items with children */}
      {hasChildren && (
        <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <Plus className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  );
}
