import { Car, Sparkles, MapPinned, Route, Navigation, TrainFront, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useWhatsApp } from "../hooks/useWhatsApp";
const icons = { Car, Sparkles, MapPinned, Route, Navigation, TrainFront };
export default function ServiceCard({ service }) {
  const { lang, t } = useLanguage(); const { quickEnquiry } = useWhatsApp(); const Icon = icons[service.icon] || Car;
  return <article className="service-card"><div className="service-icon"><Icon size={24} /></div><h3>{lang === "hi" ? service.titleHi : service.titleEn}</h3><p>{lang === "hi" ? service.descHi : service.descEn}</p><button className="service-link" onClick={() => quickEnquiry(service.titleHi)}>{t.common.enquire}<ArrowUpRight size={17} /></button></article>;
}
