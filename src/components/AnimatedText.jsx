import { Fragment, createElement } from "react";
import useReveal from "../utils/useReveal";

// Word-by-word text reveal when the text scrolls into view.
// Spacing between words comes from CSS margin on .word-mask (never collapses); <wbr> allows line breaks.
export default function AnimatedText({ text, as = "h2", className = "", delay = 0, step = 55 }) {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  const words = String(text).split(" ");
  return createElement(
    as,
    { ref, className: `anim-text ${shown ? "is-visible" : ""} ${className}`.trim(), "aria-label": text },
    words.map((w, i) =>
      createElement(
        Fragment,
        { key: i },
        createElement(
          "span",
          { className: "word-mask", "aria-hidden": "true" },
          createElement("span", { className: "word", style: { transitionDelay: `${delay + i * step}ms` } }, w)
        ),
        i < words.length - 1 ? createElement("wbr") : null
      )
    )
  );
}
