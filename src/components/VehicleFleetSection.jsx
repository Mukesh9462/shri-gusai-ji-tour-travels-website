import { useState } from "react";
import VehicleCard from "./VehicleCard";
import { vehicleCategories } from "../data/vehicles";
import { useLanguage } from "../context/LanguageContext";

export default function VehicleFleetSection({ vehicles, showFilters = false, className = "" }) {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredVehicles = activeCategory === "all" ? vehicles : vehicles.filter(vehicle => vehicle.filterCategories.includes(activeCategory));

  return <div className={`fleet-showcase ${className}`}>
    {showFilters && <div className="vehicle-filters" role="tablist" aria-label={lang === "hi" ? "वाहन श्रेणियां" : "Vehicle categories"}>{vehicleCategories.map(category => <button key={category.id} type="button" className={activeCategory === category.id ? "active" : ""} onClick={() => setActiveCategory(category.id)} role="tab" aria-selected={activeCategory === category.id}>{lang === "hi" ? category.hi : category.en}</button>)}</div>}
    <div className="vehicle-grid vehicle-grid-large">{filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div>
    {!filteredVehicles.length && <p className="fleet-empty">{lang === "hi" ? "इस श्रेणी के लिए वाहन पूछताछ करें।" : "Contact us to enquire about this category."}</p>}
  </div>;
}