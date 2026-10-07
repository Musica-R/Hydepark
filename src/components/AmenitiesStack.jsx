import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { img } from "../utils/images";
import Reveal from "./Reveal";

const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
const num = (i) => String(i + 1).padStart(2, "0");

// local files from /public (start with "/") are used as they are;
// everything else (your photos keys) still goes through img()
const pic = (p, w) =>
  typeof p === "string" && p.startsWith("/")
    ? `${process.env.PUBLIC_URL || ""}${p}`
    : img(p, w);

export default function AmenitiesStack({
  items,
  limit = 8,
  linkTo = "/amenities",
  showAfter = true,
  eyebrow = "Amenities",
  lead = "Everything you need, nothing you don't.",
}) {
  const featured = items.slice(0, limit);
  const rest = items.slice(limit);
  const n = featured.length;

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = total > 0 ? clamp(-r.top / total, 0, 1) : 0;
      const idx = Math.min(n - 1, Math.floor(p * n));
      track.style.setProperty("--p", p.toFixed(4));
      track.style.setProperty("--l", clamp(p * n - idx, 0, 1).toFixed(4));
      setActive(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const total = track.offsetHeight - window.innerHeight;
      const top = track.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + ((i + 0.5) / n) * total, behavior: "smooth" });
    },
    [n]
  );

  const current = featured[active];

  return (
    <>
      <section
        className="showcase"
        ref={trackRef}
        style={{ "--n": n, "--p": 0, "--l": 0 }}
        aria-label="Amenities"
      >
        <div className="showcase-sticky">
          <div className="showcase-grid">
            {/* LEFT: text */}
            <div className="showcase-text">
              <div className="showcase-head">
                <span className="showcase-eyebrow">{eyebrow}</span>
                <span className="showcase-lead">{lead}</span>
              </div>

              <div className="showcase-big" key={active}>
                <div className="showcase-meta">
                  <span className="showcase-counter">
                    {num(active)}
                    <small>/ {num(n - 1)}</small>
                  </span>
                  <span className="showcase-tag">{current.tag}</span>
                </div>

                <h3 className="showcase-title" aria-label={current.title}>
                  {current.title.split(" ").map((w, i) => (
                    <span className="word" key={i} aria-hidden="true">
                      <span style={{ animationDelay: `${i * 90}ms` }}>{w}&nbsp;</span>
                    </span>
                  ))}
                </h3>

                <p className="showcase-desc">{current.text}</p>
                <p className="showcase-long">{current.long}</p>

                <ul className="showcase-points">
                  {current.points.map((p, i) => (
                    <li key={p} style={{ animationDelay: `${0.55 + i * 0.12}s` }}>
                      <FaCheck /> {p}
                    </li>
                  ))}
                </ul>

                {linkTo && (
                  <Link to={linkTo} className="showcase-link">
                    <span className="showcase-link-btn"><FaArrowRight /></span>
                    Know more
                  </Link>
                )}
              </div>

              <ul className="showcase-rail" aria-label="Jump to amenity">
                {featured.map((a, i) => (
                  <li key={a.title}>
                    <button
                      type="button"
                      className={i === active ? "on" : i < active ? "done" : ""}
                      onClick={() => goTo(i)}
                      aria-label={a.title}
                      title={a.title}
                    >
                      {num(i)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: image wipe */}
            <div className="showcase-media">
              {featured.map((a, i) => (
                <div
                  key={a.title}
                  className={`showcase-img ${i <= active ? "shown" : ""} ${i === active ? "cur" : ""}`}
                  style={{ zIndex: i + 1 }}
                >
                  <img
                    src={pic(a.image, 1400)}
                    alt={a.title}
                    loading={i < 2 ? "eager" : "lazy"}
                    onError={(e) => console.error("Image failed:", e.currentTarget.src)}
                  />
                </div>
              ))}

              <span className="showcase-badge" key={`b${active}`}>
                <current.icon />
              </span>
              <span className="showcase-frame-tag">{current.title}</span>
              <span className="showcase-progress"><i /></span>
            </div>
          </div>
        </div>
      </section>

      {showAfter && (
        <section className="section amenities-after">
          <div className="container">
            {rest.length > 0 && (
              <Reveal className="stack-more">
                <p>And also</p>
                <ul>
                  {rest.map((a) => (
                    <li key={a.title}><a.icon /> {a.title}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            <Reveal className="center-cta">
              <Link to="/amenities" className="btn btn-glass">
                All amenities <FaArrowRight />
              </Link>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}