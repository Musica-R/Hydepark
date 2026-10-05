import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Reveal from "./Reveal";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <Reveal key={item.q} delay={i * 60} className={`faq-item glass ${open === i ? "open" : ""}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{item.q}</span>
            <FaPlus className="faq-icon" />
          </button>
          <div className="faq-a">
            <div><p>{item.a}</p></div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
