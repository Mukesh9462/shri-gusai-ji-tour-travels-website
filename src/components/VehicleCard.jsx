import { Phone, MessageCircle } from "lucide-react";
import { business, buildWhatsAppLink } from "../data/business";
import { useLanguage } from "../context/LanguageContext";
import "./VehicleCard.css";
export default function VehicleCard({ vehicle }) {
  const { lang, t } = useLanguage(); const name = lang === "hi" ? vehicle.nameHi : vehicle.nameEn; const category = lang === "hi" ? vehicle.categoryHi : vehicle.categoryEn; const description = lang === "hi" ? vehicle.descHi : vehicle.descEn;
  const message = `नमस्ते,\n\nमुझे ${vehicle.nameHi} की बुकिंग के बारे में जानकारी चाहिए।\n\nकृपया उपलब्धता और किराये के बारे में जानकारी दें।`;
  const arrangedVehicle = ["bus", "tempo-traveller", "other-four-wheelers"].includes(vehicle.id);
  const availability = arrangedVehicle
    ? (lang === "hi" ? "आवश्यकता एवं उपलब्धता के अनुसार वाहन की व्यवस्था के लिए संपर्क करें।" : "Contact us to arrange a vehicle according to your requirements and availability.")
    : (lang === "hi" ? "उपलब्धता के लिए संपर्क करें।" : "Contact us for availability.");
  const fallback = <div className="vehicle-placeholder" hidden={Boolean(vehicle.image)}><span>{lang === "hi" ? "फोटो जल्द उपलब्ध" : "Photo coming soon"}</span></div>;
  return <article className="vehicle-card"><div className="vehicle-image">{vehicle.image && <img src={vehicle.image} alt={name} loading="lazy" onError={event => { event.currentTarget.hidden = true; event.currentTarget.nextElementSibling.hidden = false; }} />}{fallback}</div><div className="vehicle-content"><span className="pill">{category}</span><h3>{name}</h3><p>{description}</p><p className="vehicle-availability">{availability}</p><div className="vehicle-actions"><a href={buildWhatsAppLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><MessageCircle size={17} />{lang === "hi" ? "WhatsApp पर पूछें" : "Ask on WhatsApp"}</a><a href={`tel:${business.phoneTel}`} className="btn btn-outline"><Phone size={17} />{t.common.call}</a></div></div></article>;
}
