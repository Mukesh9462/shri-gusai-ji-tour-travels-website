import { ArrowRight, Car, Heart, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import VehicleFleetSection from "../components/VehicleFleetSection";
import { services } from "../data/services";
import { vehicles } from "../data/vehicles";
import { tours } from "../data/tours";
import { business, buildWhatsAppLink } from "../data/business";
import { useLanguage } from "../context/LanguageContext";

const featuredTours = [
	{ titleHi: "बीकानेर दर्शन", titleEn: "Bikaner Sightseeing" },
	{ titleHi: "जैसलमेर", titleEn: "Jaisalmer" },
	{ titleHi: "जोधपुर", titleEn: "Jodhpur" },
	{ titleHi: "जयपुर", titleEn: "Jaipur" },
	{ titleHi: "राजस्थान टूर", titleEn: "Rajasthan Tour" }
];

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
						<h1>{lang === "hi" ? <>बीकानेर से हर सफ़र,<br /><span>यादगार सफ़र।</span></> : <>Every journey from Bikaner,<br /><span>worth remembering.</span></>}</h1>
						<p>{lang === "hi" ? "शादी-विवाह, टूर प्रोग्राम, लोकल एवं आउटस्टेशन यात्रा के लिए वाहन सेवा।" : t.hero.description}</p>
						<div className="hero-buttons">
							<a href={`tel:${business.phoneTel}`} className="btn btn-primary btn-large"><Phone size={18} />{lang === "hi" ? `${business.phoneDisplay} पर कॉल करें` : `Call ${business.phoneDisplay}`}</a>
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
			<section className="quick-booking" aria-label={lang === "hi" ? "त्वरित बुकिंग" : "Quick booking"}>
				<div className="container quick-booking-inner">
					<div className="quick-field"><small>{lang === "hi" ? "कहाँ से" : "From"}</small><strong>{business.cityHi}</strong></div>
					<div className="quick-field"><small>{lang === "hi" ? "कहाँ तक" : "To"}</small><strong>{lang === "hi" ? "गंतव्य बताएं" : "Choose destination"}</strong></div>
					<div className="quick-field"><small>{lang === "hi" ? "यात्रा की तारीख" : "Travel date"}</small><strong>{lang === "hi" ? "तारीख बताएं" : "Share your date"}</strong></div>
					<div className="quick-field"><small>{lang === "hi" ? "गाड़ी" : "Vehicle"}</small><strong>{lang === "hi" ? "वाहन चुनें" : "Choose vehicle"}</strong></div>
					<Link to="/booking" className="btn btn-primary">{lang === "hi" ? "किराया पूछें" : "Ask for fare"}<ArrowRight size={17} /></Link>
				</div>
			</section>
			<section className="quick-services">
				<div className="container"><div className="home-section-intro"><div className="eyebrow">हमारी सेवाएं</div><h2>आपके हर सफ़र के लिए</h2><p>शादी से लेकर आउटस्टेशन यात्रा तक, आपकी जरूरत के अनुसार वाहन सेवा।</p></div><div className="quick-service-grid">{services.map(service => <ServiceCard key={service.id} service={service} />)}</div></div>
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
						<p>बारात, दूल्हा-दुल्हन, परिवार और मेहमानों के लिए आवश्यकता एवं उपलब्धता के अनुसार वाहन व्यवस्था।</p>
						<div className="feature-tags"><span><Heart size={17} />बारात</span><span><Users size={17} />दुल्हा-दुल्हन</span><span><Car size={17} />वाहन व्यवस्था</span></div>
						<Link to="/wedding" className="btn btn-primary">शादी के लिए वाहन पूछें <ArrowRight size={17} /></Link>
					</div>
					<div className="feature-vehicle-list">{vehicles.filter(vehicle => ["innova", "innova-crysta", "fortuner", "bolero", "cruiser", "swift", "etios", "tempo-traveller", "bus"].includes(vehicle.id)).slice(0, 5).map(vehicle => <span key={vehicle.id}>{vehicle.nameHi}</span>)}</div>
				</div>
			</section>
			<section className="section home-tours">
				<div className="container">
					<SectionHeading eyebrow="राजस्थान टूर एवं यात्रा" title="बीकानेर से राजस्थान घूमने का प्लान बनाएं" description="अपनी यात्रा के अनुसार योजना और वाहन उपलब्धता के लिए संपर्क करें।" action={<Link to="/tours" className="text-link">टूर प्लान पूछें <ArrowRight size={17} /></Link>} />
					<div className="home-tour-grid">{featuredTours.map(tour => <article key={tour.titleEn}><MapPin size={19} /><h3>{lang === "hi" ? tour.titleHi : tour.titleEn}</h3><p>{lang === "hi" ? "अपनी यात्रा के अनुसार योजना और वाहन उपलब्धता के लिए संपर्क करें।" : "Contact us for a travel plan and vehicle availability."}</p></article>)}</div>
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
					<SectionHeading eyebrow="हमसे संपर्क करें" title="क्यों चुनें गुसांई जी टूर & ट्रैवल्स?" description="आपकी तारीख और आवश्यकता के अनुसार वाहन व्यवस्था के लिए बात करें।" />
					<div className="trust-grid">
						<div><Car /><strong>विभिन्न वाहन विकल्प</strong><span>छोटी कार से लेकर ग्रुप यात्रा तक उपलब्ध विकल्प।</span></div>
						<div><Heart /><strong>शादी-विवाह वाहन व्यवस्था</strong><span>बारात, परिवार एवं मेहमानों के लिए वाहन व्यवस्था।</span></div>
						<div><MapPin /><strong>बीकानेर से यात्रा सेवा</strong><span>लोकल एवं आउटस्टेशन यात्रा के लिए संपर्क करें।</span></div>
						<div><Phone /><strong>सीधा संपर्क</strong><span>वाहन उपलब्धता और यात्रा योजना के लिए सीधे संपर्क करें।</span></div>
					</div>
				</div>
			</section>
			<section className="home-contact-cta">
				<div className="container">
					<div>
						<div className="eyebrow">आज ही बात करें</div>
						<h2>अपनी अगली यात्रा की योजना बनाएं</h2>
						<p>वाहन उपलब्धता और यात्रा संबंधी जानकारी के लिए सीधे संपर्क करें।</p>
					</div>
					<div className="cta-buttons">
						<a href={`tel:${business.phoneTel}`} className="btn btn-white"><Phone size={18} />कॉल करें</a>
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
