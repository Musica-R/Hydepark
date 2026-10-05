import { createElement } from "react";
import useReveal from "../utils/useReveal";

// Wrap anything: it animates in when scrolled into view.
// variant: up | down | left | right | zoom | fade
export default function Reveal({ as = "div", variant = "up", delay = 0, className = "", children, ...rest }) {
  const [ref, shown] = useReveal();
  return createElement(
    as,
    {
      ref,
      className: `reveal reveal-${variant} ${shown ? "is-visible" : ""} ${className}`.trim(),
      style: { "--d": `${delay}ms` },
      ...rest,
    },
    children
  );
}
