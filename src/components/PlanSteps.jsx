import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import AnimatedText from "./AnimatedText";

export default function PlanSteps({
  steps,
  eyebrow = "How it works",
  title = "Planning your event, step by step",
  text = "A simple process from first call to final guest.",
}) {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section plan">
      <div className="container">
        <div className="plan-head">
          <Reveal as="span" className="plan-eyebrow">{eyebrow}</Reveal>
          <AnimatedText text={title} as="h2" className="plan-title" />
          <Reveal as="p" delay={150} className="plan-sub">{text}</Reveal>
        </div>

        <ol className="plan-track" ref={trackRef} style={{ "--n": steps.length }}>
          <span className="plan-line" aria-hidden="true" />

          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`plan-item ${i % 2 ? "low" : "high"}`}
              style={{ "--i": i }}
            >
              <span className="plan-node">{i + 1}</span>
              <span className="plan-stem" aria-hidden="true" />

              <div className="plan-card">
                <span className="plan-big" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}