"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface UseScrollZoomOptions {
  threshold?: number; // Total scroll amount needed to trigger transition
  onZoomComplete?: () => void; // Callback when zoom completes
}

interface UseScrollZoomReturn {
  zoomProgress: number; // 0 to 1
  isZooming: boolean;
  onWheel: (e: React.WheelEvent) => void;
  reset: () => void;
}

export function useScrollZoom(options: UseScrollZoomOptions = {}): UseScrollZoomReturn {
  const { threshold = 300, onZoomComplete } = options;

  const [zoomProgress, setZoomProgress] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const accumulatedScroll = useRef(0);
  const lastScrollTime = useRef(0);
  const decayTimeout = useRef<NodeJS.Timeout | null>(null);

  // Decay the zoom if user stops scrolling
  useEffect(() => {
    if (zoomProgress > 0 && zoomProgress < 1) {
      decayTimeout.current = setTimeout(() => {
        const timeSinceLastScroll = Date.now() - lastScrollTime.current;
        if (timeSinceLastScroll > 150) {
          // Start decaying
          accumulatedScroll.current = Math.max(0, accumulatedScroll.current - 20);
          setZoomProgress(accumulatedScroll.current / threshold);
          if (accumulatedScroll.current <= 0) {
            setIsZooming(false);
          }
        }
      }, 100);
    }

    return () => {
      if (decayTimeout.current) {
        clearTimeout(decayTimeout.current);
      }
    };
  }, [zoomProgress, threshold]);

  const onWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      lastScrollTime.current = Date.now();

      // Only zoom in on scroll down (positive deltaY)
      if (e.deltaY > 0) {
        setIsZooming(true);
        accumulatedScroll.current = Math.min(
          threshold,
          accumulatedScroll.current + Math.abs(e.deltaY)
        );
      } else {
        // Scroll up reduces zoom
        accumulatedScroll.current = Math.max(0, accumulatedScroll.current - Math.abs(e.deltaY));
        if (accumulatedScroll.current <= 0) {
          setIsZooming(false);
        }
      }

      const progress = accumulatedScroll.current / threshold;
      setZoomProgress(progress);

      // Trigger completion at 100%
      if (progress >= 1 && onZoomComplete) {
        onZoomComplete();
      }
    },
    [threshold, onZoomComplete]
  );

  const reset = useCallback(() => {
    accumulatedScroll.current = 0;
    setZoomProgress(0);
    setIsZooming(false);
  }, []);

  return {
    zoomProgress,
    isZooming,
    onWheel,
    reset,
  };
}
