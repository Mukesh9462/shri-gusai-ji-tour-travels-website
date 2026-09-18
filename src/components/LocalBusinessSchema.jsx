import { useEffect } from "react";
import { business } from "../data/business";
import { SITE_URL } from "./SEO";
export default function LocalBusinessSchema() {
  useEffect(() => {
    const data = { "@context": "https://schema.org", "@type": "TravelAgency", name: business.nameHi, alternateName: business.nameEn, telephone: business.phoneIntl, url: SITE_URL, image: `${SITE_URL}/images/fleet/innova.jpg`, address: { "@type": "PostalAddress", addressLocality: business.city, addressRegion: business.state, addressCountry: "IN" }, areaServed: { "@type": "City", name: business.city }, serviceType: ["Car Rental", "Wedding Transportation", "Tour Programs", "Outstation Travel", "Local Travel", "Airport/Railway Transfer"], contactPoint: { "@type": "ContactPoint", telephone: business.phoneIntl, contactType: "customer service", availableLanguage: ["hi", "en"] } };
    let script = document.getElementById("gursai-business-schema");
    if (!script) { script = document.createElement("script"); script.id = "gursai-business-schema"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(data);
  }, []);
  return null;
}
