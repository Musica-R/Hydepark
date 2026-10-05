import { site } from "../data/site";

export const formatPrice = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export const todayISO = (offset = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split("T")[0];
};

export const bookingLink = ({ checkin, checkout, adults = 2 } = {}) => {
  const p = new URLSearchParams();
  if (checkin) p.set("checkin", checkin);
  if (checkout) p.set("checkout", checkout);
  p.set("group_adults", adults);
  p.set("no_rooms", 1);
  return `${site.bookingUrl}?${p.toString()}`;
};

export const whatsappLink = (message = "") =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
