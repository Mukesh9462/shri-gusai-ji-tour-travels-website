import { business, buildWhatsAppLink } from "../data/business";

export function useWhatsApp() {
  const openWhatsApp = (message = "") => window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  const quickEnquiry = (topic) => openWhatsApp(`नमस्ते,\n\nमुझे ${business.nameHi} से "${topic}" के बारे में जानकारी चाहिए।\n\nकृपया वाहन और उपलब्धता के बारे में जानकारी दें।`);
  return { openWhatsApp, quickEnquiry, whatsappBase: business.whatsappBase };
}
