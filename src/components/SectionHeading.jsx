import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";

export default function SectionHeading({ title, text, align = "center" }) {
  return (
    <div className={`section-heading align-${align}`}>
      <AnimatedText text={title} as="h2" />
      {text && (
        <Reveal as="p" delay={150} className="section-lead">
          {text}
        </Reveal>
      )}
    </div>
  );
}
