import { useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { img } from "../utils/images";
import Reveal from "./Reveal";

export default function Testimonials({ items }) {
  const track = useRef(null);
  const paused = useRef(false);

  const scrollByCard = (dir) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector(".review-card");
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const id = setInterval(() => !paused.current && scrollByCard(1), 5500);
    return () => clearInterval(id);
  }, []);

  const avg = (items.reduce((s, r) => s + r.rating, 0) / items.length).toFixed(1);

  return (
    <div onMouseEnter={() => (paused.current = true)} onMouseLeave={() => (paused.current = false)}>
      <Reveal className="rating-summary glass">
        <strong>{avg}</strong>
        <div>
          <div className="stars">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
          <span>Average guest rating</span>
        </div>
      </Reveal>

      <div className="review-track" ref={track}>
        {items.map((r, i) => (
          <Reveal key={r.name} className="review-card glass" delay={i * 80} variant="up">
            <FaQuoteLeft className="quote-icon" />
            <div className="stars">
              {[...Array(5)].map((_, s) => <FaStar key={s} className={s < r.rating ? "on" : "off"} />)}
            </div>
            <p>{r.text}</p>
            <div className="reviewer">
              <img src={img(r.avatar, 160)} alt={r.name} loading="lazy" />
              <div>
                <strong>{r.name}</strong>
                <span>{r.stay} · {r.place}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="review-controls">
        <button onClick={() => scrollByCard(-1)} aria-label="Previous review"><FaChevronLeft /></button>
        <button onClick={() => scrollByCard(1)} aria-label="Next review"><FaChevronRight /></button>
      </div>
    </div>
  );
}
