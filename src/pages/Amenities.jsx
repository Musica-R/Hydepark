import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt, FaSuitcaseRolling, FaBed, FaConciergeBell, FaSignOutAlt, FaCheck,
} from "react-icons/fa";
import { img, photos } from "../utils/images";
import { amenities, inRoom } from "../data/amenities";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

const num = (i) => String(i + 1).padStart(2, "0");

// local files from /public are used as they are; photos keys still go through img()
const pic = (p, w) =>
  typeof p === "string" && p.startsWith("/")
    ? `${process.env.PUBLIC_URL || ""}${p}`
    : img(p, w);

const day = [
  { icon: FaSuitcaseRolling, time: "1:00 PM", title: "Arrive and settle in", text: "Private check-in, a cool room and a bottle of water waiting." },
  { icon: FaConciergeBell, time: "Afternoon", title: "Relax or get to work", text: "Free Wi-Fi, room service and a quiet, soundproof room." },
  { icon: FaMapMarkerAlt, time: "Evening", title: "Explore Palakkad", text: "Ask the tour desk about nearby sights and local transport." },
  { icon: FaBed, time: "Night", title: "Sleep well", text: "Daily-fresh linen and a front desk that never closes." },
  { icon: FaSignOutAlt, time: "Before 12:30 PM", title: "Check out smoothly", text: "A fast, private check-out so you can get on your way." },
];

/* ============================================================
   FACILITIES — sticky left panel + screen-tall cards
   ============================================================ */
function FacilityExplorer() {
  const n = amenities.length;
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState({ 0: true });

  const cardRefs = useRef([]);
  const imgRefs = useRef([]);
  const barRef = useRef(null);
  const seenRef = useRef({ 0: true });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const vc = vh / 2;
      const cards = cardRefs.current;
      if (!cards.length || !cards[0]) return;

      const rects = cards.map((el) => el.getBoundingClientRect());
      const centers = rects.map((r) => r.top + r.height / 2);

      // continuous position through the list (0 … n-1)
      let f = 0;
      if (vc <= centers[0]) f = 0;
      else if (vc >= centers[n - 1]) f = n - 1;
      else {
        for (let i = 0; i < n - 1; i++) {
          if (vc >= centers[i] && vc < centers[i + 1]) {
            f = i + (vc - centers[i]) / (centers[i + 1] - centers[i]);
            break;
          }
        }
      }

      setActive(Math.round(f));
      if (barRef.current) barRef.current.style.transform = `scaleX(${(f + 1) / n})`;

      // reveal text once a card comes into view, and parallax the photos
      let changed = false;
      rects.forEach((r, i) => {
        if (!seenRef.current[i] && r.top < vh * 0.78 && r.bottom > 0) {
          seenRef.current[i] = true;
          changed = true;
        }
        const el = imgRefs.current[i];
        if (!el) return;
        if (reduce) {
          el.style.transform = "scale(1.04)";
        } else if (r.bottom > -100 && r.top < vh + 100) {
          const off = (r.top + r.height / 2 - vc) / vh; // about -1 … 1
          el.style.transform = `translate3d(0, ${(off * -42).toFixed(1)}px, 0) scale(1.16)`;
        }
      });
      if (changed) setSeen({ ...seenRef.current });
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

  const goTo = (i) => {
    const el = cardRefs.current[i];
    if (!el) return;
    const navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 90;
    const y = el.getBoundingClientRect().top + window.scrollY - navH - 24;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="section facility">
      <div className="container facility-layout">
        {/* LEFT: sticky panel, one screen tall */}
        <aside className="facility-side">
          <div className="facility-top">
            <span className="facility-eyebrow">Property facilities</span>
            <h2 className="facility-heading">Everything that comes with your stay</h2>
            <p className="facility-intro">
              Twelve facilities, available to every guest. Scroll through them, or jump straight to the
              one you need.
            </p>
          </div>

          <div className="facility-bottom">
            <div className="facility-count">
              <b>{num(active)}</b>
              <span>/ {num(n - 1)}</span>
              <em>{amenities[active].title}</em>
            </div>
            <div className="facility-bar">
              <i ref={barRef} style={{ transform: `scaleX(${1 / n})` }} />
            </div>

            <ul className="facility-index">
              {amenities.map((a, i) => (
                <li key={a.title}>
                  <button
                    type="button"
                    className={i === active ? "on" : i < active ? "done" : ""}
                    onClick={() => goTo(i)}
                    title={a.title}
                  >
                    <b>{num(i)}</b>
                    <span>{a.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT: one screen-tall card per facility */}
        <div className="facility-cards">
          {amenities.map((a, i) => (
            <article
              key={a.title}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`facility-card ${i === active ? "is-active" : ""} ${seen[i] ? "seen" : ""}`}
            >
              <div className="facility-photo">
                <img
                  ref={(el) => (imgRefs.current[i] = el)}
                  src={pic(a.image, 1400)}
                  alt={a.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  onError={(e) => console.error("Image failed:", e.currentTarget.src)}
                />
                <span className="facility-no">{num(i)}</span>
                <span className="facility-ico"><a.icon /></span>
                <span className="facility-tagpill">{a.tag}</span>
              </div>

              <div className="facility-body">
                <h3>{a.title}</h3>
                <p className="facility-lead">{a.text}</p>
                <p className="facility-long">{a.long}</p>
                <ul className="facility-points">
                  {a.points.map((p) => (
                    <li key={p}><FaCheck /> {p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   A DAY AT HYDEPARK REGENCY — animated timeline
   (top-level component, NOT inside FacilityExplorer)
   ============================================================ */
function DayTimeline() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(track.querySelectorAll(".day-item"));

    // reveal each step as it enters the screen
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { rootMargin: "0px 0px -18% 0px", threshold: 0.15 }
    );
    items.forEach((el) => io.observe(el));

    // gold line follows scroll
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height));
      track.style.setProperty("--fill", `${(p * 100).toFixed(2)}%`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    if (reduce) {
      items.forEach((el) => el.classList.add("in"));
      track.style.setProperty("--fill", "100%");
    } else {
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    }
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="section day">
      <div className="container">
        <div className="day-head">
          <Reveal as="span" className="day-eyebrow">One day, start to finish</Reveal>
          <AnimatedText text="A day at Hydepark Regency" as="h2" className="day-title" />
          <Reveal as="p" delay={150} className="day-sub">
            How a typical stay flows, from the moment you arrive to the moment you check out.
          </Reveal>
        </div>

        <ol className="day-track" ref={trackRef} style={{ "--fill": "0%" }}>
          {day.map((d, i) => (
            <li key={d.title} className={`day-item ${i % 2 === 0 ? "to-left" : "to-right"}`}>
              <div className="day-time"><span>{d.time}</span></div>

              <span className="day-node"><d.icon /></span>

              <div className="day-card">
                <small>Step {String(i + 1).padStart(2, "0")}</small>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Amenities() {
  // smooth scrolling + gentle snapping, only while this page is open
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.add("amen-smooth");
    return () => document.documentElement.classList.remove("amen-smooth");
  }, []);

  return (
    <>
      <PageHero
        title="Amenities & services"
        text="Everything that makes a stay at Hydepark Regency easy — from free Wi-Fi to a front desk that never sleeps."
        image={photos.lobby}
      />

      <FacilityExplorer />

      <section className="section section-alt">
        <div className="container split">
          <Reveal variant="left" className="split-media">
            <img className="single" src="/assets/dinning.jpg" alt="Dining at Hydepark Regency" loading="lazy" />
          </Reveal>
          <div className="split-text">
            <AnimatedText text="Dining and room service" as="h2" />
            <Reveal as="p" delay={150}>
              Hungry after a long journey? Order from room service and enjoy a meal in the comfort of your
              room. For events, our banquet team coordinates catering so your guests are looked after from
              the first welcome drink to the last course.
            </Reveal>
            <Reveal as="p" delay={250}>
              Need something specific? Tell the front desk — we're happy to help with arrangements,
              from early breakfasts before a train to late-night snacks after a long drive.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Inside your room" text="Comforts you'll find in every room category." />
          <div className="grid grid-3">
            {inRoom.map((x, i) => (
              <Reveal key={x.title} delay={(i % 3) * 100} variant="zoom" className="inroom glass">
                <span className="icon-bubble sm"><x.icon /></span>
                <h3>{x.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DayTimeline />

      <CTABanner title="Come and see for yourself" text="Book online or call the front desk — we'll make your arrival easy." />
    </>
  );
}