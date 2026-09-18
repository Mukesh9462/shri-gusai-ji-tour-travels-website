export const vehicleCategories = [
  { id: "all", hi: "सभी", en: "All" },
  { id: "car", hi: "कार", en: "Cars" },
  { id: "suv", hi: "SUV", en: "SUV" },
  { id: "four-wheeler", hi: "चार पहिया", en: "Four Wheelers" },
  { id: "premium", hi: "प्रीमियम", en: "Premium" },
  { id: "group", hi: "ग्रुप यात्रा", en: "Group Travel" },
  { id: "bus", hi: "बस", en: "Bus" }
];

const fleetVehicles = [
  { id: "swift", nameHi: "स्विफ्ट", nameEn: "Maruti Suzuki Swift", categoryHi: "कार", categoryEn: "Car", filterCategories: ["car", "four-wheeler"], descHi: "छोटे परिवार, स्थानीय यात्रा और शहर के सफर के लिए।", descEn: "For small families, local travel and city journeys.", image: "/images/fleet/swift.jpg", suitableFor: ["local", "family"], availableOnRequest: true },
  { id: "etios", nameHi: "टोयोटा इटियोस", nameEn: "Toyota Etios", categoryHi: "कार", categoryEn: "Car", filterCategories: ["car", "four-wheeler"], descHi: "स्थानीय और आउटस्टेशन यात्रा के लिए।", descEn: "For local and outstation travel.", image: "/images/fleet/etios.jpg", suitableFor: ["local", "outstation"], availableOnRequest: true },
  { id: "innova", nameHi: "टोयोटा इनोवा", nameEn: "Toyota Innova", categoryHi: "एमपीवी", categoryEn: "MPV", filterCategories: ["suv", "four-wheeler", "group"], descHi: "परिवार, टूर और आउटस्टेशन यात्रा के लिए।", descEn: "For family travel, tours and outstation journeys.", image: "/images/fleet/innova.jpg", suitableFor: ["family", "tour", "outstation"], availableOnRequest: true },
  { id: "innova-crysta", nameHi: "टोयोटा इनोवा क्रिस्टा", nameEn: "Toyota Innova Crysta", categoryHi: "प्रीमियम एमपीवी", categoryEn: "Premium MPV", filterCategories: ["suv", "premium", "four-wheeler", "group"], descHi: "आरामदायक परिवार और लंबी दूरी की यात्रा के लिए।", descEn: "For comfortable family and long-distance travel.", image: "/images/fleet/innova-crysta.jpg", suitableFor: ["family", "long-distance"], availableOnRequest: true },
  { id: "fortuner", nameHi: "टोयोटा फॉर्च्यूनर", nameEn: "Toyota Fortuner", categoryHi: "प्रीमियम SUV", categoryEn: "Premium SUV", filterCategories: ["suv", "premium", "four-wheeler"], descHi: "प्रीमियम यात्रा, टूर और विशेष अवसरों के लिए।", descEn: "For premium travel, tours and special occasions.", image: "/images/fleet/fortuner.jpg", suitableFor: ["premium", "tour", "events"], availableOnRequest: true },
  { id: "cruiser", nameHi: "क्रूजर", nameEn: "Toyota Urban Cruiser", categoryHi: "SUV", categoryEn: "SUV", filterCategories: ["suv", "four-wheeler", "group"], descHi: "ग्रामीण यात्रा, टूर और बड़े परिवार या समूह के लिए।", descEn: "For rural travel, tours and larger families or groups.", image: "/images/fleet/cruiser.jpg", suitableFor: ["rural", "tour", "group"], availableOnRequest: true },
  { id: "bolero", nameHi: "महिंद्रा बोलेरो", nameEn: "Mahindra Bolero", categoryHi: "SUV", categoryEn: "SUV", filterCategories: ["suv", "four-wheeler", "group"], descHi: "आउटस्टेशन, ग्रामीण क्षेत्र और यात्रा के लिए।", descEn: "For outstation travel, rural areas and journeys.", image: "/images/fleet/bolero.jpg", suitableFor: ["outstation", "rural"], availableOnRequest: true },
  { id: "tempo-traveller", nameHi: "टेम्पो ट्रैवलर", nameEn: "Tempo Traveller", categoryHi: "ग्रुप वाहन", categoryEn: "Group Vehicle", filterCategories: ["group", "four-wheeler"], descHi: "परिवार, ग्रुप टूर और राजस्थान यात्रा के लिए।", descEn: "For families, group tours and Rajasthan travel.", image: "/images/fleet/tempo-traveller.jpg", suitableFor: ["family", "group", "tour"], availableOnRequest: true },
  { id: "bus", nameHi: "बस", nameEn: "Bus", categoryHi: "ग्रुप यात्रा", categoryEn: "Group Travel", filterCategories: ["bus", "group"], descHi: "शादी, बारात, धार्मिक यात्रा, स्कूल या कॉलेज ग्रुप, टूर और बड़े समूहों के लिए।", descEn: "For weddings, baraat, religious trips, school or college groups, tours and large groups.", image: "/images/fleet/bus.jpg", suitableFor: ["wedding", "religious", "group"], availableOnRequest: true },
  { id: "other-four-wheelers", nameHi: "अन्य चार पहिया वाहन", nameEn: "Other Four Wheelers", categoryHi: "चार पहिया", categoryEn: "Four Wheelers", filterCategories: ["four-wheeler"], descHi: "आवश्यकता और उपलब्धता के अनुसार वाहन की व्यवस्था।", descEn: "Vehicle arrangements according to requirements and availability.", image: "/images/fleet/other-four-wheeler.jpg", suitableFor: ["custom"], availableOnRequest: true }
];

export const vehicles = fleetVehicles.map(vehicle => ({
  ...vehicle,
  name: vehicle.nameEn,
  hindiName: vehicle.nameHi,
  category: vehicle.categoryEn,
  description: vehicle.descEn
}));
