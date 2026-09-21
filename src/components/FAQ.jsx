import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_URL } from "./SEO";
import "./FAQ.css";

const questions = [
	{
		question: "श्री गुसांई जी टूर & ट्रैवल्स कौन-कौन सी सेवाएं प्रदान करते हैं?",
		answer: "हम कार किराया, शादी-विवाह के लिए वाहन व्यवस्था, टूर प्रोग्राम, लोकल यात्रा, आउटस्टेशन यात्रा तथा एयरपोर्ट/रेलवे ट्रांसफर जैसी सेवाएं प्रदान करते हैं।"
	},
	{
		question: "क्या बीकानेर से दूसरे शहरों के लिए वाहन मिल सकते हैं?",
		answer: "हाँ, बीकानेर से जयपुर, जोधपुर, जैसलमेर तथा अन्य स्थानों की यात्रा के लिए वाहन उपलब्धता के अनुसार व्यवस्था की जा सकती है।"
	},
	{
		question: "शादी-विवाह के लिए कौन-कौन से वाहन उपलब्ध हैं?",
		answer: "Innova, Innova Crysta, Fortuner, Bolero, Cruiser, Swift, Etios तथा आवश्यकता के अनुसार Tempo Traveller और Bus की व्यवस्था की जा सकती है।"
	},
	{
		question: "क्या लोकल बीकानेर दर्शन के लिए वाहन मिल सकता है?",
		answer: "हाँ, बीकानेर एवं आसपास के दर्शनीय स्थलों के लिए वाहन उपलब्धता के अनुसार यात्रा की व्यवस्था की जा सकती है।"
	},
	{
		question: "वाहन की उपलब्धता कैसे पता करें?",
		answer: "अपनी यात्रा की तारीख, स्थान और आवश्यक वाहन की जानकारी देकर 99501-10771 पर कॉल या WhatsApp के माध्यम से उपलब्धता पूछ सकते हैं।"
	},
	{
		question: "क्या पहले से वाहन बुक किया जा सकता है?",
		answer: "हाँ, यात्रा की तारीख और आवश्यक जानकारी साझा करके बुकिंग के लिए संपर्क किया जा सकता है। बुकिंग उपलब्धता की पुष्टि के बाद तय होती है।"
	},
	{
		question: "क्या टूर का किराया पहले से तय होता है?",
		answer: "यात्रा का किराया वाहन, दूरी, यात्रा की अवधि और यात्रा योजना के अनुसार अलग-अलग हो सकता है। सही जानकारी के लिए सीधे संपर्क करें।"
	},
	{
		question: "WhatsApp पर जानकारी कैसे प्राप्त करें?",
		answer: "आप 99501-10771 पर WhatsApp करके वाहन, यात्रा और उपलब्धता के बारे में जानकारी पूछ सकते हैं।"
	}
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	useEffect(() => {
		const scriptId = "gursai-faq-schema";
		let script = document.getElementById(scriptId);
		if (!script) {
			script = document.createElement("script");
			script.id = scriptId;
			script.type = "application/ld+json";
			document.head.appendChild(script);
		}
		script.textContent = JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: questions.map(({ question, answer }) => ({
				"@type": "Question",
				name: question,
				acceptedAnswer: { "@type": "Answer", text: answer }
			}))
		});
		return () => document.getElementById(scriptId)?.remove();
	}, []);

	return <section className="section faq-section" aria-labelledby="faq-heading">
		<div className="container">
			<div className="section-heading faq-heading">
				<div><div className="eyebrow">सवाल और जवाब</div><h2 id="faq-heading">अक्सर पूछे जाने वाले सवाल</h2></div>
				<p>वाहन, यात्रा योजना और बुकिंग से जुड़ी सामान्य जानकारी।</p>
			</div>
			<div className="faq-list">
				{questions.map(({ question, answer }, index) => {
					const isOpen = openIndex === index;
					const buttonId = `faq-question-${index}`;
					const panelId = `faq-answer-${index}`;
					return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={question}>
						<h3>
							<button id={buttonId} className="faq-trigger" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>
								<span>{question}</span><ChevronDown size={20} aria-hidden="true" />
							</button>
						</h3>
						<div id={panelId} className="faq-panel" role="region" aria-labelledby={buttonId} hidden={!isOpen}><p>{answer}</p></div>
					</article>;
				})}
			</div>
		</div>
	</section>;
}