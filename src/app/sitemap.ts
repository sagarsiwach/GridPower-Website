import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "/",
  "/energy",
  "/energy/home",
  "/energy/office",
  "/energy/industry",
  "/energy/power-park",
  "/charge",
  "/charge/home",
  "/charge/destination",
  "/charge/enterprise",
  "/drive",
  "/drive/two-wheeler",
  "/drive/three-wheeler",
  "/drive/four-wheeler",
  "/platform",
  "/open-ecosystem",
  "/projects",
  "/about",
  "/contact",
  "/signup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://gridpower.co.in${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
