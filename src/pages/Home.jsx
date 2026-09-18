import { ArrowRight, Car, Heart, MapPin, MessageCircle, Phone, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import VehicleFleetSection from "../components/VehicleFleetSection";
import { services } from "../data/services";
import { vehicles } from "../data/vehicles";
import { tours } from "../data/tours";
import { business, buildWhatsAppLink } from "../data/business";
import { useLanguage } from "../context/LanguageContext";
export default function Home() {
	const { lang, t } = useLanguage();
	const heroMessage = "नमस्ते, मुझे इनोवा, इटियोस और अन्य वाहन किराये के बारे में जानकारी चाहिए।";
	return <>
		<SEO title="श्री गुसांई जी टूर & ट्रैवल्स | बीकानेर" description="श्री गुसांई जी टूर & ट्रैवल्स, बीकानेर में विवाह-शादी, टूर और आउटस्टेशन यात्रा के लिए वाहन व्यवस्था।" />
		<main>
			<section className="brand-hero">
				<div className="container brand-hero-grid">
					<div className="brand-hero-copy">
						<div className="eyebrow">{t.hero.eyebrow}</div>
						<h1>{lang === "hi" ? <>विवाह-शादी व टूर<br />प्रोग्रामों में<br /><span>इनोवा, इटियोस किराये पर</span></> : <>{t.hero.title1}<br /><span>{t.hero.title2}</span></>}</h1>
						<p>{t.hero.description}</p>
						<div className="hero-buttons">
							<a href={`tel:${business.phoneTel}`} className="btn btn-primary btn-large"><Phone size={18} />{business.phoneDisplay} {lang === "hi" ? "अभी कॉल करें" : "Call Now"}</a>
							<a href={buildWhatsAppLink(heroMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-large"><MessageCircle size={18} />WhatsApp करें</a>
						</div>
					</div>
					<div className="brand-hero-showcase">
						<div className="showcase-card">
							<div className="showcase-heading"><span>{lang === "hi" ? "हमारे वाहन" : "Our Vehicles"}</span><Car size={20} /></div>
							<div className="showcase-image"><img src="/images/fleet/innova.jpg" alt="Toyota Innova" /></div>
							<div className="showcase-footer">
								<div><small>TOYOTA INNOVA</small><strong>{lang === "hi" ? "बुकिंग के लिए" : "For booking"}<br />{business.phoneDisplay}</strong></div>
								<a href={`tel:${business.phoneTel}`} aria-label={lang === "hi" ? "इनोवा के लिए कॉल करें" : "Call for Innova"}><Phone size={20} /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="quick-services">
				<div className="container quick-service-grid">{services.slice(0, 4).map(service => <ServiceCard key={service.id} service={service} />)}</div>
			</section>
			<section className="section home-fleet-section">
				<div className="container">
					<SectionHeading eyebrow="हमारे वाहन" title="आपकी हर यात्रा के लिए उपयुक्त वाहन" description="आपकी हर यात्रा के लिए उपयुक्त वाहन - उपलब्धता के लिए संपर्क करें।" action={<Link to="/fleet" className="text-link">सभी वाहन देखें <ArrowRight size={17} /></Link>} />
					<VehicleFleetSection vehicles={vehicles} showFilters className="home-fleet" />
				</div>
			</section>
			<section className="home-wedding">
				<div className="container home-feature-grid">
					<div>
						<div className="eyebrow">शादी-विवाह</div>
						<h2>शादी-विवाह के लिए वाहन व्यवस्था</h2>
						<p>बारात, परिवार एवं मेहमानों के लिए आवश्यकता अनुसार वाहनों की व्यवस्था की जा सकती है।</p>
						<div className="feature-tags"><span><Heart size={17} />बारात</span><span><Users size={17} />दुल्हा-दुल्हन</span><span><Car size={17} />वाहन व्यवस्था</span></div>
						<Link to="/wedding" className="btn btn-primary">शादी के लिए वाहन पूछें <ArrowRight size={17} /></Link>
					</div>
					<div className="feature-vehicle-list">{vehicles.filter(vehicle => ["innova", "innova-crysta", "fortuner", "bolero", "cruiser", "swift", "etios", "tempo-traveller", "bus"].includes(vehicle.id)).slice(0, 5).map(vehicle => <span key={vehicle.id}>{vehicle.nameHi}</span>)}</div>
				</div>
			</section>
			<section className="section home-tours">
				<div className="container">
					<SectionHeading eyebrow="राजस्थान टूर एवं यात्रा" title="अपनी यात्रा की योजना बनाएं" description="कस्टम यात्रा योजना के लिए संपर्क करें।" />
					<div className="home-tour-grid">{tours.slice(0, 7).map(tour => <article key={tour.id}><MapPin size={19} /><h3>{lang === "hi" ? tour.titleHi : tour.titleEn}</h3><p>{lang === "hi" ? "कस्टम यात्रा योजना के लिए संपर्क करें।" : "Contact us for a custom travel plan."}</p></article>)}</div>
				</div>
			</section>
			<section className="group-travel">
				<div className="container group-travel-inner">
					<div>
						<div className="eyebrow">ग्रुप यात्रा</div>
						<h2>बड़े समूहों के लिए वाहन व्यवस्था</h2>
						<p>बड़े परिवार, ग्रुप टूर, शादी, धार्मिक यात्रा एवं कार्यक्रमों के लिए वाहन व्यवस्था के लिए संपर्क करें।</p>
					</div>
					<div className="group-travel-items"><span>टेम्पो ट्रैवलर</span><span>बस</span><span>अन्य वाहन आवश्यकता अनुसार</span></div>
				</div>
			</section>
			<section className="trust-section">
				<div className="container">
					<SectionHeading eyebrow="हमसे संपर्क करें" title="स्थानीय सेवा, सीधा संपर्क" description="आपकी तारीख और आवश्यकता के अनुसार वाहन व्यवस्था के लिए बात करें।" />
					<div className="trust-grid">
						<div><ShieldCheck /><strong>सीधा संपर्क</strong><span>फोन और WhatsApp पर जानकारी</span></div>
						<div><MapPin /><strong>बीकानेर से सेवा</strong><span>स्थानीय और आउटस्टेशन यात्रा</span></div>
						<div><Car /><strong>उपलब्धता पूछें</strong><span>आपकी जरूरत के अनुसार वाहन</span></div>
					</div>
				</div>
			</section>
			<section className="home-contact-cta">
				<div className="container">
					<div>
						<div className="eyebrow">आज ही बात करें</div>
						<h2>अपनी यात्रा के लिए संपर्क करें</h2>
					</div>
					<div className="cta-buttons">
						<a href={`tel:${business.phoneTel}`} className="btn btn-white"><Phone size={18} />{business.phoneDisplay}</a>
						<a href={business.whatsappBase} target="_blank" rel="noopener noreferrer" className="btn btn-light"><MessageCircle size={18} />WhatsApp करें</a>
					</div>
				</div>
			</section>
		</main>
	</>;
}

function SectionHeading({ eyebrow, title, description, action }) {
	return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div><div className="section-heading-side"><p>{description}</p>{action}</div></div>;
}
