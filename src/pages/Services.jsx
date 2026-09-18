import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { useLanguage } from "../context/LanguageContext";
export default function Services() { const { t } = useLanguage(); return <><SEO title="Car Rental & Travel Services in Bikaner" description="श्री गुसांई जी टूर & ट्रैवल्स की कार किराये, शादी-विवाह, टूर और यात्रा सेवाएं।" path="/services" /><PageIntro eyebrow={t.services.eyebrow} title={t.services.title} accent={t.services.accent} description={t.services.description} /><section className="section"><div className="container"><div className="service-grid service-grid-large">{services.map(service => <ServiceCard key={service.id} service={service} />)}</div></div></section></>; }
export function PageIntro({ eyebrow, title, accent, description }) { return <section className="page-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title} <span>{accent}</span></h1>{description && <p>{description}</p>}</div></section>; }
