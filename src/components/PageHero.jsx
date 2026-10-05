import { img } from "../utils/images";
import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";

export default function PageHero({ title, text, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${img(image, 2000)})` }} />
      <div className="page-hero-shade" />
      <div className="container page-hero-inner">
        <div className="glass page-hero-card">
          <AnimatedText text={title} as="h1" />
          <Reveal as="p" delay={250}>{text}</Reveal>
        </div>
      </div>
    </section>
  );
}
