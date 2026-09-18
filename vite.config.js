import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const routes = ["/", "/services", "/fleet", "/tours", "/wedding", "/gallery", "/about", "/contact", "/booking"];

function seoFiles(siteUrl) {
  const normalizedUrl = siteUrl.replace(/\/$/, "");
  return {
    name: "seo-files",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${normalizedUrl}/sitemap.xml\n`
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${normalizedUrl}${route}</loc></url>`).join("\n")}\n</urlset>\n`
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL || "http://localhost:4173";
  return { plugins: [react(), seoFiles(siteUrl)] };
});