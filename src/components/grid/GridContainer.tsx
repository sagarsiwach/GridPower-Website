"use client";

import { useState, useCallback, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { GridItem } from "@/lib/grid-data";
import GridCard from "./GridCard";

interface GridContainerProps {
  items: GridItem[];
}

type TransitionState = "idle" | "zooming-out" | "zooming-in";

export default function GridContainer({ items }: GridContainerProps) {
  const [path, setPath] = useState<string[]>([]);
  const [transitionState, setTransitionState] = useState<TransitionState>("idle");
  const [displayItems, setDisplayItems] = useState<GridItem[]>(items);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get items for a given path
  const getItemsForPath = useCallback(
    (targetPath: string[]): GridItem[] => {
      if (targetPath.length === 0) return items;

      let current: GridItem[] = items;
      for (const id of targetPath) {
        const found = current.find((item) => item.id === id);
        if (found?.children) {
          current = found.children;
        } else {
          break;
        }
      }
      return current;
    },
    [items]
  );

  const currentLevel = path.length;

  // Handle navigation with smooth transition
  const handleNavigate = useCallback(
    (item: GridItem) => {
      if (!item.children || item.children.length === 0) return;

      // Start zoom-out transition
      setTransitionState("zooming-out");

      // After zoom-out, change content and zoom-in
      setTimeout(() => {
        const newPath = [...path, item.id];
        setPath(newPath);
        setDisplayItems(getItemsForPath(newPath));
        setTransitionState("zooming-in");

        // Reset to idle after zoom-in
        setTimeout(() => {
          setTransitionState("idle");
        }, 400);
      }, 300);
    },
    [path, getItemsForPath]
  );

  // Handle back navigation with smooth transition
  const handleBack = useCallback(() => {
    if (path.length === 0) return;

    setTransitionState("zooming-in");

    setTimeout(() => {
      const newPath = path.slice(0, -1);
      setPath(newPath);
      setDisplayItems(getItemsForPath(newPath));
      setTransitionState("zooming-out");

      setTimeout(() => {
        setTransitionState("idle");
      }, 400);
    }, 300);
  }, [path, getItemsForPath]);

  // Get breadcrumbs
  const getBreadcrumbs = useCallback((): { id: string; title: string }[] => {
    const crumbs: { id: string; title: string }[] = [];
    let current: GridItem[] = items;

    for (const id of path) {
      const found = current.find((item) => item.id === id);
      if (found) {
        crumbs.push({ id: found.id, title: found.title });
        if (found.children) current = found.children;
      }
    }
    return crumbs;
  }, [items, path]);

  const breadcrumbs = getBreadcrumbs();

  // Grid layout based on level
  const gridClass =
    currentLevel === 0 ? "grid grid-cols-3 gap-2" : "grid grid-cols-2 grid-rows-2 gap-2";

  // Transition styles
  const getTransitionStyles = (): React.CSSProperties => {
    switch (transitionState) {
      case "zooming-out":
        return {
          transform: "scale(1.1)",
          opacity: 0,
          filter: "blur(8px)",
        };
      case "zooming-in":
        return {
          transform: "scale(0.9)",
          opacity: 0,
          filter: "blur(8px)",
        };
      default:
        return {
          transform: "scale(1)",
          opacity: 1,
          filter: "blur(0px)",
        };
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      {/* Breadcrumb Navigation */}
      {path.length > 0 && (
        <div
          className="mb-2 flex items-center gap-2 px-1 transition-all duration-300"
          style={{ opacity: transitionState === "idle" ? 1 : 0.5 }}
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-gray-600 transition-colors hover:text-gray-900"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <span className="text-gray-400">/</span>
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.id} className="flex items-center gap-2">
              <span
                className={
                  index === breadcrumbs.length - 1 ? "font-medium text-gray-900" : "text-gray-500"
                }
              >
                {crumb.title}
              </span>
              {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
            </span>
          ))}
        </div>
      )}

      {/* Grid with transitions */}
      <div
        ref={containerRef}
        className={`${gridClass} flex-1 transition-all duration-300 ease-out`}
        style={getTransitionStyles()}
      >
        {displayItems.map((item) => (
          <GridCard key={item.id} item={item} onClick={() => handleNavigate(item)} />
        ))}
      </div>
    </div>
  );
}
