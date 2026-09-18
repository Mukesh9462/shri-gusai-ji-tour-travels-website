import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, Languages } from "lucide-react";
import { business } from "../data/business";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 10); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const items = [["/", t.nav.home], ["/services", t.nav.services], ["/fleet", t.nav.fleet], ["/tours", t.nav.tours], ["/wedding", t.nav.wedding], ["/gallery", t.nav.gallery], ["/about", t.nav.about], ["/contact", t.nav.contact]];
  const nav = <nav>{items.map(([path, label]) => <NavLink key={path} to={path} end={path === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>;
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="top-strip"><div className="container top-strip-inner"><span>{lang === "hi" ? `मालिक: ${business.ownerHi}` : `Owner: ${business.ownerHi}`}</span><div><a href={`tel:${business.phoneTel}`}><Phone size={15} />{business.phoneDisplay}</a><a href={business.whatsappBase} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} />WhatsApp</a></div></div></div>
    <div className="container header-inner"><Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">श्री</span><span className="brand-text"><strong>{lang === "hi" ? business.nameHi : business.nameEn}</strong><small>TOUR &amp; TRAVELS · {lang === "hi" ? business.cityHi : "Bikaner, Rajasthan"}</small></span></Link><div className="desktop-nav">{nav}</div><div className="header-actions"><button className="language-btn" onClick={toggleLang} aria-label="Change language"><Languages size={16} />{lang === "hi" ? "EN" : "हिं"}</button><a href={`tel:${business.phoneTel}`} className="header-phone"><Phone size={16} />{business.phoneDisplay}</a><Link to="/booking" className="btn btn-primary btn-small">{t.nav.book}</Link><button className="menu-button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div></div>
    <div className={`mobile-menu ${open ? "open" : ""}`}><div className="mobile-menu-header"><strong>{lang === "hi" ? business.nameHi : business.nameEn}</strong><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>{nav}<div className="mobile-actions"><a href={`tel:${business.phoneTel}`} className="btn btn-primary"><Phone size={18} />{t.common.call}</a><a href={business.whatsappBase} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp"><MessageCircle size={18} />{t.common.whatsapp}</a></div></div>{open && <button className="mobile-overlay" onClick={() => setOpen(false)} aria-label="Close menu" />}
  </header>;
}
