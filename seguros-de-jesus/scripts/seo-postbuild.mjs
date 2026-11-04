import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const urlRaw = (process.env.SITE_URL || "").trim();
const siteUrl = urlRaw.replace(/\/+$/, "");
const htmlPath = path.join(dist, "index.html");
let html = fs.readFileSync(htmlPath, "utf8");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Seguros de Jesús",
  description: "Asesoramiento en seguros de auto, moto, hogar, vida, comercio y empresas.",
  image: siteUrl ? `${siteUrl}/compartir-seguros.jpg` : undefined,
  url: siteUrl || undefined,
  telephone: "+54 9 11 5766-2077",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gabino Ezeiza 8909",
    addressLocality: "Loma Hermosa",
    addressRegion: "Buenos Aires",
    postalCode: "1657",
    addressCountry: "AR"
  },
  sameAs: ["https://www.instagram.com/segurosdejesus/"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "12:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "15:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" }
  ]
};

if (siteUrl) {
  if (!/^https:\/\/[^\s/]+(?:\/.*)?$/.test(siteUrl)) {
    throw new Error("SITE_URL debe ser una URL HTTPS válida, por ejemplo https://www.ejemplo.com.ar");
  }
  html = html.replace("<!-- SEO_URLS: se incorporan automáticamente en el build al definir SITE_URL -->", `
    <link rel="canonical" href="${siteUrl}/" />
    <meta property="og:url" content="${siteUrl}/" />
    <meta property="og:image" content="${siteUrl}/compartir-seguros.jpg" />
    <meta name="twitter:image" content="${siteUrl}/compartir-seguros.jpg" />`);
  fs.writeFileSync(path.join(dist,"robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  fs.writeFileSync(path.join(dist,"sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc></url></urlset>\n`);
  console.log(`SEO listo para ${siteUrl}`);
} else {
  fs.writeFileSync(path.join(dist,"robots.txt"), "User-agent: *\nAllow: /\n");
  console.warn("SITE_URL sin configurar: se omitieron canonical, sitemap y URLs OG hasta elegir el dominio.");
}
html = html.replace("<!-- SEO_STRUCTURED_DATA -->", `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g,"\\u003c")}</script>`);
fs.writeFileSync(htmlPath, html);
