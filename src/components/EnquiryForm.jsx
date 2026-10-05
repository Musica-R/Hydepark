import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../utils/helpers";

// Sends the enquiry to the hotel's WhatsApp with the details pre-filled
export default function EnquiryForm({ kind = "stay", options = [] }) {
  const [form, setForm] = useState({ name: "", phone: "", date: "", type: options[0] || "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = [
      `Hello Hydepark Regency, I'd like to enquire about a ${kind}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.date && `Date: ${form.date}`,
      form.type && `Interested in: ${form.type}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  return (
    <form className="enquiry glass" onSubmit={submit}>
      <div className="form-row">
        <label>Full name<input required value={form.name} onChange={set("name")} placeholder="Your name" /></label>
        <label>Phone<input required type="tel" value={form.phone} onChange={set("phone")} placeholder="+91" /></label>
      </div>
      <div className="form-row">
        <label>Preferred date<input type="date" value={form.date} onChange={set("date")} /></label>
        {options.length > 0 && (
          <label>Interested in
            <select value={form.type} onChange={set("type")}>
              {options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
        )}
      </div>
      <label>Message<textarea rows="4" value={form.message} onChange={set("message")} placeholder="Tell us about your plans, guest count or special requests" /></label>
      <button className="btn btn-gold" type="submit"><FaWhatsapp /> Send enquiry on WhatsApp</button>
    </form>
  );
}
