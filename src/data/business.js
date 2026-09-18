export const business = {
  nameHi: "श्री गुसांई जी टूर & ट्रैवल्स",
  nameEn: "Shri Gursai Ji Tour & Travels",
  shortHi: "श्री गुसांई जी",
  ownerHi: "श्रवण राम गोदारा",
  city: "Bikaner",
  cityHi: "बीकानेर",
  state: "Rajasthan",
  phoneDisplay: "99501-10771",
  phoneTel: "9950110771",
  phoneIntl: "+919950110771",
  whatsappBase: "https://wa.me/919950110771"
};

export function buildWhatsAppLink(message = "") {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`;
}
