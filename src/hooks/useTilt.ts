"use client";

import { useRef, useState, useCallback, RefObject } from "react";

interface TiltState {
  rotateX: number;
  rotateY: number;
}

interface UseTiltOptions {
  maxRotation?: number; // Max rotation in degrees
  perspective?: number; // CSS perspective value
}

export function useTilt(options: UseTiltOptions = {}): {
  ref: RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} {
  const { maxRotation = 3, perspective = 1200 } = options; // Subtle: 3 degrees max

  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to center (-1 to 1)
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Calculate rotation (inverted for natural feel)
      const rotateY = mouseX * maxRotation;
      const rotateX = -mouseY * maxRotation;

      setTilt({ rotateX, rotateY });
    },
    [maxRotation]
  );

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const style: React.CSSProperties = {
    transform: isHovered
      ? `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
      : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg)`,
    transition: isHovered ? "transform 0.15s ease-out" : "transform 0.4s ease-out",
    transformStyle: "preserve-3d",
  };

  return {
    ref,
    style,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  };
}
