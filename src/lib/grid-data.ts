// Grid data structure for nested navigation
// Level 0: Main grid (3 cards)
// Level 1: Sub-grid (4 cards when zoomed)
// Level 2: Sub-sub-grid (4 cards when zoomed again)

export interface GridItem {
  id: string;
  title: string;
  description?: string;
  media?: {
    type: "image" | "video";
    src: string;
    poster?: string;
  };
  children?: GridItem[]; // Sub-grid items (4 items for next level)
}

export interface GridState {
  currentPath: string[]; // Array of IDs representing the navigation path
  activeItemId: string | null; // Currently focused/hovered item
}

// Example data structure
export const gridData: GridItem[] = [
  {
    id: "residential",
    title: "Residential",
    description: "Solar solutions for homes",
    media: {
      type: "video",
      src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4",
    },
    children: [
      {
        id: "residential-solar-panels",
        title: "Solar Panels",
        description: "High-efficiency home solar panels",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "res-panels-mono",
            title: "Monocrystalline",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-panels-poly",
            title: "Polycrystalline",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-panels-thin",
            title: "Thin Film",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-panels-bifacial",
            title: "Bifacial",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "residential-battery",
        title: "Battery Storage",
        description: "Home energy storage systems",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "res-battery-wall",
            title: "Wall Mount",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-battery-floor",
            title: "Floor Standing",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-battery-outdoor",
            title: "Outdoor",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-battery-modular",
            title: "Modular",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "residential-ev",
        title: "EV Charging",
        description: "Electric vehicle charging solutions",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "res-ev-level1",
            title: "Level 1",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-ev-level2",
            title: "Level 2",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-ev-smart",
            title: "Smart Chargers",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-ev-solar",
            title: "Solar Integrated",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "residential-monitoring",
        title: "Monitoring",
        description: "Energy monitoring systems",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "res-mon-app",
            title: "Mobile App",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-mon-dashboard",
            title: "Dashboard",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-mon-alerts",
            title: "Alerts",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "res-mon-reports",
            title: "Reports",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
    ],
  },
  {
    id: "commercial",
    title: "Commercial",
    description: "Solar solutions for businesses",
    media: {
      type: "video",
      src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4",
    },
    children: [
      {
        id: "commercial-rooftop",
        title: "Rooftop Solar",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "com-roof-flat",
            title: "Flat Roof",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-roof-pitched",
            title: "Pitched Roof",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-roof-carport",
            title: "Carport",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-roof-canopy",
            title: "Canopy",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "commercial-storage",
        title: "Energy Storage",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "com-stor-container",
            title: "Container",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-stor-indoor",
            title: "Indoor",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-stor-outdoor",
            title: "Outdoor",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-stor-hybrid",
            title: "Hybrid",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "commercial-fleet",
        title: "Fleet Charging",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "com-fleet-depot",
            title: "Depot",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-fleet-public",
            title: "Public",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-fleet-fast",
            title: "Fast Charging",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-fleet-smart",
            title: "Smart Grid",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "commercial-management",
        title: "Energy Management",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "com-mgmt-bms",
            title: "BMS",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-mgmt-ems",
            title: "EMS",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-mgmt-scada",
            title: "SCADA",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "com-mgmt-analytics",
            title: "Analytics",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
    ],
  },
  {
    id: "industrial",
    title: "Industrial",
    description: "Large-scale solar infrastructure",
    media: {
      type: "video",
      src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4",
    },
    children: [
      {
        id: "industrial-utility",
        title: "Utility Scale",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "ind-util-ground",
            title: "Ground Mount",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-util-floating",
            title: "Floating",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-util-tracking",
            title: "Tracking",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-util-agri",
            title: "Agrivoltaics",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "industrial-grid",
        title: "Grid Storage",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "ind-grid-bess",
            title: "BESS",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-grid-pumped",
            title: "Pumped Hydro",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-grid-hydrogen",
            title: "Hydrogen",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-grid-thermal",
            title: "Thermal",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "industrial-microgrid",
        title: "Microgrids",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "ind-micro-island",
            title: "Island Mode",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-micro-connected",
            title: "Grid Connected",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-micro-hybrid",
            title: "Hybrid",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-micro-mobile",
            title: "Mobile",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
      {
        id: "industrial-services",
        title: "Grid Services",
        media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
        children: [
          {
            id: "ind-serv-frequency",
            title: "Frequency",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-serv-voltage",
            title: "Voltage",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-serv-peak",
            title: "Peak Shaving",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
          {
            id: "ind-serv-arbitrage",
            title: "Arbitrage",
            media: { type: "video", src: "/videos/Cinematic_slow_drone_1080p_202601141625.mp4" },
          },
        ],
      },
    ],
  },
];
