import { MessageCircle } from "lucide-react";
import { business } from "../data/business";
import "./WhatsAppFloat.css";
export default function WhatsAppFloat() { return <a href={business.whatsappBase} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp"><MessageCircle size={27} /></a>; }
