import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import TravelAssistant from "./components/TravelAssistant";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Tours from "./pages/Tours";
import Wedding from "./pages/Wedding";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
export default function App() { return <BrowserRouter><LocalBusinessSchema /><Header /><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/fleet" element={<Fleet />} /><Route path="/tours" element={<Tours />} /><Route path="/wedding" element={<Wedding />} /><Route path="/gallery" element={<Gallery />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="/booking" element={<Booking />} /><Route path="*" element={<NotFound />} /></Routes><Footer /><TravelAssistant /><WhatsAppFloat /></BrowserRouter>; }
