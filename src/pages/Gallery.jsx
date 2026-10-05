import { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import { img, photos } from "../utils/images";
import { gallery, galleryCategories } from "../data/gallery";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [active, setActive] = useState(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.cat === cat);

  const move = (d) => setActive((i) => (i + d + items.length) % items.length);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, items.length]);

  return (
    <>
      <PageHero
        title="Gallery"
        text="Rooms, banquet halls, dining and the building — a closer look at Hydepark Regency."
        image={photos.exterior}
      />

      <section className="section">
        <div className="container">
          <Reveal className="chips">
            {galleryCategories.map((c) => (
              <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => { setCat(c); setActive(null); }}>
                {c}
              </button>
            ))}
          </Reveal>

          <div className="masonry" key={cat}>
            {items.map((g, i) => (
              <Reveal key={g.id} variant="zoom" delay={(i % 4) * 70} className="masonry-item">
                <button onClick={() => setActive(i)} aria-label={`Open ${g.alt}`}>
                  <img src={img(g.src, 800)} alt={g.alt} loading="lazy" />
                  <span className="masonry-overlay"><FaExpand /></span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active !== null && items[active] && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lb-btn lb-close" onClick={() => setActive(null)} aria-label="Close"><FaTimes /></button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous"><FaChevronLeft /></button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={img(items[active].src, 1800, 85)} alt={items[active].alt} />
            <figcaption className="glass">{items[active].alt} · {active + 1}/{items.length}</figcaption>
          </figure>
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next"><FaChevronRight /></button>
        </div>
      )}

      <CTABanner />
    </>
  );
}
