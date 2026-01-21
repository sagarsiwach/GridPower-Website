"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./DropdownMenu";

// Icons as inline SVGs
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.22 6.22C4.36063 6.07955 4.55125 6.00066 4.75 6.00066C4.94875 6.00066 5.13937 6.07955 5.28 6.22L8 8.94L10.72 6.22C10.7887 6.14631 10.8715 6.08721 10.9635 6.04622C11.0555 6.00523 11.1548 5.98319 11.2555 5.98141C11.3562 5.97963 11.4562 5.99816 11.5496 6.03588C11.643 6.0736 11.7278 6.12974 11.799 6.20096C11.8703 6.27218 11.9264 6.35701 11.9641 6.4504C12.0018 6.54379 12.0204 6.64382 12.0186 6.74452C12.0168 6.84523 11.9948 6.94454 11.9538 7.03654C11.9128 7.12854 11.8537 7.21134 11.78 7.28L8.53 10.53C8.38937 10.6705 8.19875 10.7493 8 10.7493C7.80125 10.7493 7.61063 10.6705 7.47 10.53L4.22 7.28C4.07955 7.13937 4.00066 6.94875 4.00066 6.75C4.00066 6.55125 4.07955 6.36063 4.22 6.22Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 3.75C2 3.55109 2.07902 3.36032 2.21967 3.21967C2.36032 3.07902 2.55109 3 2.75 3H13.25C13.4489 3 13.6397 3.07902 13.7803 3.21967C13.921 3.36032 14 3.55109 14 3.75C14 3.94891 13.921 4.13968 13.7803 4.28033C13.6397 4.42098 13.4489 4.5 13.25 4.5H2.75C2.55109 4.5 2.36032 4.42098 2.21967 4.28033C2.07902 4.13968 2 3.94891 2 3.75ZM2 8C2 7.80109 2.07902 7.61032 2.21967 7.46967C2.36032 7.32902 2.55109 7.25 2.75 7.25H13.25C13.4489 7.25 13.6397 7.32902 13.7803 7.46967C13.921 7.61032 14 7.80109 14 8C14 8.19891 13.921 8.38968 13.7803 8.53033C13.6397 8.67098 13.4489 8.75 13.25 8.75H2.75C2.55109 8.75 2.36032 8.67098 2.21967 8.53033C2.07902 8.38968 2 8.19891 2 8ZM2 12.25C2 12.0511 2.07902 11.8603 2.21967 11.7197C2.36032 11.579 2.55109 11.5 2.75 11.5H13.25C13.4489 11.5 13.6397 11.579 13.7803 11.7197C13.921 11.8603 14 12.0511 14 12.25C14 12.4489 13.921 12.6397 13.7803 12.7803C13.6397 12.921 13.4489 13 13.25 13H2.75C2.55109 13 2.36032 12.921 2.21967 12.7803C2.07902 12.6397 2 12.4489 2 12.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Logo component
function Logo({ size = "default" }: { size?: "default" | "small" }) {
  // 1024px: h-32px, 1440px: h-40px, 1920px: h-56px
  const iconSize =
    size === "small" ? "size-8 3xl:size-10 4xl:size-14" : "size-10 3xl:size-12 4xl:size-14";
  const textSize =
    size === "small"
      ? "text-xl 3xl:text-2xl 4xl:text-[32px]"
      : "text-2xl 3xl:text-3xl 4xl:text-4xl";

  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className={cn("relative shrink-0 overflow-hidden rounded-[3px] bg-[#fa0016]", iconSize)}>
        {/* Top right dot */}
        <div className="absolute top-[15%] right-[22%] size-[18%] rounded-full bg-white" />
        {/* Bottom right dot */}
        <div className="absolute top-[42%] right-[22%] size-[18%] rounded-full bg-white" />
        {/* Left vertical bar */}
        <div className="absolute top-[15%] left-[27%] h-[70%] w-[18%] rounded-full bg-white" />
      </div>
      {/* Logo Text */}
      <span className={cn("tracking-[-0.48px] text-stone-900", textSize)}>
        <span className="font-medium">Grid</span>
        <span className="font-normal">Power</span>
      </span>
    </div>
  );
}

// Gray gradient button style (shared)
// 1024px: text-12px, 1440px: text-14px, 1920px: text-16px
const grayButtonClasses =
  "relative flex items-center justify-center gap-2 rounded bg-gradient-to-b from-gray-100 via-gray-300 via-[70%] to-gray-200 border-[0.5px] border-gray-400 px-2 py-1 shadow-[0px_0.5px_0px_0px_#6b7280] font-mono text-xs font-medium uppercase tracking-[0.48px] text-gray-700 3xl:text-sm 3xl:tracking-[-0.28px] 4xl:text-base 4xl:tracking-[0.64px]";

const grayButtonInset =
  "pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1px_0px_#f3f4f6]";

// Red gradient button style (shared)
const redButtonClasses =
  "relative flex items-center justify-center rounded bg-gradient-to-b from-red-600 via-red-700 via-[70%] to-red-600 border-[0.5px] border-red-700 px-2 py-1 shadow-[0px_0.5px_0px_0px_#ef4444] font-mono text-xs font-medium uppercase tracking-[-0.28px] text-white 3xl:text-sm 4xl:text-base 4xl:tracking-[-0.32px]";

const redButtonInset =
  "pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_1px_0px_#fef2f2]";

// Nav item types
interface NavItemData {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

// Desktop nav item (1024px+ style)
function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItemData;
  isActive?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <button
      onClick={onClick}
      className={cn(grayButtonClasses, isActive && "font-medium text-gray-900")}
    >
      <span>{item.label}</span>
      {item.hasDropdown && <ChevronDownIcon className="size-4 text-gray-500" />}
      <div className={grayButtonInset} />
    </button>
  );

  if (item.dropdownItems) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{content}</DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {item.dropdownItems.map((dropdownItem) => (
            <DropdownMenuItem key={dropdownItem.label}>
              <a href={dropdownItem.href} className="w-full">
                {dropdownItem.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return content;
}

// Mobile menu
function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItemData[];
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      {/* Menu panel */}
      <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-white p-6">
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <button onClick={onClose} className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
            <CloseIcon className="size-5" />
          </button>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block rounded-lg px-4 py-3 font-mono text-sm tracking-wide text-gray-700 uppercase hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 space-y-3">
          <button className="w-full rounded border border-gray-400 bg-gradient-to-b from-gray-100 via-gray-200 via-[70%] to-gray-200 px-4 py-3 font-mono text-sm font-medium text-gray-700 uppercase shadow-[0px_0.5px_0px_0px_#6b7280]">
            Login
          </button>
          <button className="w-full rounded border border-red-700 bg-gradient-to-b from-red-600 via-red-700 via-[70%] to-red-600 px-4 py-3 font-mono text-sm font-medium text-white uppercase shadow-[0px_0.5px_0px_0px_#ef4444]">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Header component
export default function Header() {
  const [activeNav, setActiveNav] = useState("ENERGY");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items for 1024px+ (new design)
  const navItems: NavItemData[] = [
    {
      label: "ENERGY",
      hasDropdown: true,
      dropdownItems: [
        { label: "Solar Panels", href: "/energy/solar-panels" },
        { label: "Battery Storage", href: "/energy/battery-storage" },
      ],
    },
    {
      label: "CHARGE",
      hasDropdown: true,
      dropdownItems: [
        { label: "Home Charging", href: "/charge/home" },
        { label: "Commercial Charging", href: "/charge/commercial" },
      ],
    },
    {
      label: "DRIVE",
      hasDropdown: true,
      dropdownItems: [
        { label: "EV Solutions", href: "/drive/ev" },
        { label: "Fleet Management", href: "/drive/fleet" },
      ],
    },
    {
      label: "WHY OPEN",
      hasDropdown: false,
    },
    {
      label: "ABOUT",
      hasDropdown: true,
      dropdownItems: [
        { label: "Our Story", href: "/about/story" },
        { label: "Team", href: "/about/team" },
      ],
    },
    {
      label: "RESOURCES",
      hasDropdown: true,
      dropdownItems: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "FAQ", href: "/resources/faq" },
      ],
    },
  ];

  return (
    <>
      <header className="relative h-14 overflow-visible rounded-lg bg-white shadow-[6px_6px_3px_0px_rgba(0,0,0,0),4px_4px_2px_0px_rgba(0,0,0,0.01),2px_2px_2px_0px_rgba(0,0,0,0.05),1px_1px_1px_0px_rgba(0,0,0,0.09),0px_0px_1px_0px_rgba(0,0,0,0.1)]">
        {/* Container with max-width for larger screens */}
        <div className="3xl:max-w-[1280px] 3xl:px-2 4xl:max-w-[1536px] 4xl:px-4 mx-auto flex h-full max-w-[1024px] items-center justify-between px-4 lg:px-2">
          {/* ===== MOBILE (<640px): Hamburger + Centered Logo + Register ===== */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(grayButtonClasses, "sm:hidden")}
          >
            <MenuIcon className="size-4 text-gray-700" />
            <div className={grayButtonInset} />
          </button>

          {/* ===== TABLET (640px-1023px): MENU button + Centered Logo + Register ===== */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(grayButtonClasses, "hidden sm:flex lg:hidden")}
          >
            <span>MENU</span>
            <MenuIcon className="size-4 text-gray-700" />
            <div className={grayButtonInset} />
          </button>

          {/* ===== DESKTOP (1024px+): Logo on left ===== */}
          <div className="hidden lg:block">
            <Logo size="small" />
          </div>

          {/* ===== MOBILE & TABLET: Centered Logo ===== */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
            <Logo size="small" />
          </div>

          {/* ===== DESKTOP (1024px+): Navigation (center) ===== */}
          {/* Nav gap: 1024px=2px, 1440px=2px, 1920px=4px */}
          <nav className="4xl:gap-1 absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                item={item}
                isActive={activeNav === item.label}
                onClick={() => setActiveNav(item.label)}
              />
            ))}
          </nav>

          {/* ===== MOBILE & TABLET: Register button ===== */}
          <button className={cn(redButtonClasses, "lg:hidden")}>
            <span>REGISTER</span>
            <div className={redButtonInset} />
          </button>

          {/* ===== DESKTOP (1024px+): Login + Contact buttons ===== */}
          <div className="hidden items-center gap-0.5 lg:flex">
            <button className={grayButtonClasses}>
              <span>LOGIN</span>
              <div className={grayButtonInset} />
            </button>
            <button className={redButtonClasses}>
              <span>CONTACT</span>
              <div className={redButtonInset} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
