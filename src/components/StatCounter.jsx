import useReveal from "../utils/useReveal";
import useCountUp from "../utils/useCountUp";

export default function StatCounter({ value, suffix = "", prefix = "", label }) {
  const [ref, shown] = useReveal({ threshold: 0.4 });
  const n = useCountUp(value, shown);
  return (
    <div ref={ref} className="stat">
      <strong>{prefix}{n.toLocaleString("en-IN")}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}
