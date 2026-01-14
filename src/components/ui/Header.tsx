"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  highlight?: { text: string; color: string };
}

function NavItem({ label, isActive, hasDropdown, highlight }: NavItemProps) {
  return (
    <motion.button
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg text-base tracking-tight transition-colors",
        isActive
          ? "bg-gray-100 border border-gray-200/20 shadow-sm font-medium text-gray-700"
          : "bg-white text-gray-500 hover:bg-gray-50"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="font-normal">
        {highlight ? (
          <>
            <span className="font-medium" style={{ color: highlight.color }}>
              {highlight.text}
            </span>
            {label.replace(highlight.text, "")}
          </>
        ) : isActive ? (
          <span className="font-medium">{label}</span>
        ) : (
          label
        )}
      </span>
      {hasDropdown && (
        <ChevronDown className="w-4 h-4 text-gray-400" />
      )}
    </motion.button>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Residential");

  const navItems = [
    { label: "Residential", hasDropdown: true },
    { label: "Workplace", hasDropdown: true },
    { label: "Industrial", hasDropdown: true },
    { label: "GridScale", hasDropdown: true, highlight: { text: "Grid", color: "#fa0015" } },
    { label: "Resources", hasDropdown: true },
  ];

  return (
    <motion.header
      className="bg-white h-16 rounded-lg shadow-sm overflow-hidden relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.div
            className="bg-[#fa0016] rounded-md w-12 h-12 flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo Icon - Grid Pattern */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-2 h-2 bg-white rounded-full top-1.5 right-2.5" />
              <div className="absolute w-2 h-2 bg-white rounded-full top-5 right-2.5" />
              <div className="absolute w-2 h-8 bg-white rounded-full left-3.5 top-1.5" />
            </div>
          </motion.div>
          <h1 className="text-2xl tracking-tight text-stone-900">
            <span className="font-medium">Grid</span>
            <span className="font-normal">Power</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} onClick={() => setActiveNav(item.label)}>
              <NavItem
                label={item.label}
                isActive={activeNav === item.label}
                hasDropdown={item.hasDropdown}
                highlight={item.highlight}
              />
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <motion.button
            className="px-4 py-2 rounded-xl border border-gray-400 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-200 text-gray-700 font-medium text-base shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-xl border border-red-700 bg-gradient-to-b from-red-600 via-red-700 to-red-600 text-white font-medium text-base shadow-sm flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
