import { useEffect, useState } from "react";
import { Car, HeartHandshake, Map, MapPin, MessageCircle, Phone, X, Minus, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { useWhatsApp } from "../hooks/useWhatsApp";
import "./TravelAssistant.css";

const HIDDEN_KEY = "gusai_travel_assistant_hidden";

export default function TravelAssistant() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [bubble, setBubble] = useState(true);
  const { quickEnquiry } = useWhatsApp();

  useEffect(() => {
    try { setHidden(localStorage.getItem(HIDDEN_KEY) === "1"); } catch {}
    const timer = window.setInterval(() => setBubble(value => !value), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const hideForever = () => {
    try { localStorage.setItem(HIDDEN_KEY, "1"); } catch {}
    setHidden(true);
    setOpen(false);
  };

  if (hidden) return null;

  const quickItems = [
    { label: "गाड़ी चाहिए", icon: Car, to: "/fleet" },
    { label: "शादी के लिए गाड़ी", icon: HeartHandshake, to: "/wedding" },
    { label: "टूर प्लान", icon: Map, to: "/tours" },
    { label: "बीकानेर दर्शन", icon: MapPin, to: "/tours" },
    { label: "संपर्क करें", icon: Phone, to: "/contact" }
  ];

  return (
    <div className="travel-assistant" aria-live="polite">
      <div className="travel-assistant-track" aria-hidden="true">
        <div className="travel-assistant-runner">
          <div className="travel-assistant-bubble">
            {bubble ? "नमस्ते! यात्रा के लिए मदद चाहिए? 👋" : "बीकानेर घूमना है? 🏰"}
          </div>
          <button
            className="travel-assistant-robot"
            type="button"
            onClick={() => setOpen(value => !value)}
            aria-label="गुसांई जी यात्रा सहायक खोलें"
            aria-expanded={open}
          >
            <img src="/images/travel-assistant.svg" alt="" />
          </button>
        </div>
      </div>

      {open ? (
        <section className="travel-assistant-panel" aria-label="गुसांई जी यात्रा सहायक">
          <button className="travel-assistant-close" type="button" onClick={() => setOpen(false)} aria-label="यात्रा सहायक बंद करें"><Minus size={18} /></button>
          <button className="travel-assistant-hide" type="button" onClick={hideForever} aria-label="यात्रा सहायक हटाएँ">×</button>
          <div className="travel-assistant-panel-head">
            <div className="travel-assistant-avatar"><Bot size={24} /></div>
            <div>
              <strong>गुसांई जी यात्रा सहायक</strong>
              <span>मैं आपकी यात्रा में मदद कर सकता हूँ।</span>
            </div>
          </div>
          <div className="travel-assistant-options">
            {quickItems.map(({ label, icon: Icon, to }) => (
              <Link key={label} to={to} onClick={() => setOpen(false)}><Icon size={18} /><span>{label}</span><b>›</b></Link>
            ))}
            <button type="button" onClick={() => quickEnquiry("WhatsApp पर यात्रा संबंधी जानकारी")}><MessageCircle size={18} /><span>WhatsApp करें</span><b>›</b></button>
          </div>
          <div className="travel-assistant-footer">आपके सफर का छोटा सा साथी ✨</div>
        </section>
      ) : (
        <button className="travel-assistant-reopen" type="button" onClick={() => setOpen(true)}>
          <img src="/images/travel-assistant.svg" alt="" />
          <span>यात्रा सहायक</span>
        </button>
      )}

      <div className="travel-assistant-remove-tip">× हटाएँ</div>
    </div>
  );
}
