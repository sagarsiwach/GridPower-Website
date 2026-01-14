"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";

interface NavItemProps {
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  highlight?: { text: string; color: string };
  dropdownItems?: { label: string; href: string }[];
}

function NavItem({ label, isActive, hasDropdown, highlight, dropdownItems }: NavItemProps) {
  const triggerContent = (
    <motion.div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-lg text-base tracking-tight transition-colors cursor-pointer",
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
      {hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
    </motion.div>
  );

  if (hasDropdown && dropdownItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{triggerContent}</DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {dropdownItems.map((item) => (
            <DropdownMenuItem key={item.label}>
              <a href={item.href} className="w-full">
                {item.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return triggerContent;
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Residential");

  const navItems = [
    {
      label: "Residential",
      hasDropdown: true,
      dropdownItems: [
        { label: "Solar Panels", href: "/residential/solar-panels" },
        { label: "Battery Storage", href: "/residential/battery-storage" },
        { label: "EV Charging", href: "/residential/ev-charging" },
      ],
    },
    {
      label: "Workplace",
      hasDropdown: true,
      dropdownItems: [
        { label: "Office Solutions", href: "/workplace/office" },
        { label: "Commercial Solar", href: "/workplace/commercial-solar" },
      ],
    },
    {
      label: "Industrial",
      hasDropdown: true,
      dropdownItems: [
        { label: "Large Scale Solar", href: "/industrial/large-scale" },
        { label: "Energy Management", href: "/industrial/energy-management" },
      ],
    },
    {
      label: "GridScale",
      hasDropdown: true,
      highlight: { text: "Grid", color: "#fa0015" },
      dropdownItems: [
        { label: "Utility Solutions", href: "/gridscale/utility" },
        { label: "Grid Storage", href: "/gridscale/storage" },
      ],
    },
    {
      label: "Resources",
      hasDropdown: true,
      dropdownItems: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "FAQ", href: "/resources/faq" },
      ],
    },
  ];

  return (
    <motion.header
      className="bg-white h-16 rounded-lg shadow-sm overflow-visible relative"
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
                dropdownItems={item.dropdownItems}
              />
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button variant="secondary">Login</Button>
          <Button variant="default">
            Contact Us
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
