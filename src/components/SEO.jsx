import { useEffect } from "react";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://easytravelbikaner.app").replace(/\/$/, "");
export default function SEO({ title, description, path = "/" }) {
  useEffect(() => {
    document.title = title;
    const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = url;
    [["og:title", title], ["og:description", description], ["og:url", url], ["og:type", "website"], ["og:locale", "hi_IN"], ["og:image", SITE_URL ? `${SITE_URL}/images/fleet/innova.jpg` : "/images/fleet/innova.jpg"], ["twitter:card", "summary_large_image"], ["twitter:title", title], ["twitter:description", description], ["twitter:image", SITE_URL ? `${SITE_URL}/images/fleet/innova.jpg` : "/images/fleet/innova.jpg"]].forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) meta = document.querySelector(`meta[name="${property}"]`);
      if (!meta) { meta = document.createElement("meta"); meta.setAttribute("property", property); document.head.appendChild(meta); }
      if (property.startsWith("twitter:")) { meta.removeAttribute("property"); meta.setAttribute("name", property); }
      meta.content = content;
    });
  }, [title, description, path]);
  return null;
}
