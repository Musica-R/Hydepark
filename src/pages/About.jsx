import { img, photos } from "../utils/images";
import { site, stats } from "../data/site";
import { values, explore } from "../data/highlights";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import CTABanner from "../components/CTABanner";
import { FaMapMarkerAlt, FaBus, FaCity } from "react-icons/fa";

export default function About() {
  return (
    <>
      <PageHero
        title="About Hydepark Regency"
        text="A hotel and convention center built around simple, dependable hospitality in Palakkad."
        image={photos.exterior2}
      />

      <section className="section">
        <div className="container split">
          <Reveal variant="left" className="split-media duo">
            <img className="duo-a" src={img(photos.exterior, 900)} alt="Hotel exterior" loading="lazy" />
            <img className="duo-b" src={img(photos.roomKing, 700)} alt="Guest room" loading="lazy" />
          </Reveal>
          <div className="split-text">
            <AnimatedText text="Hospitality without the fuss" as="h2" />
            <Reveal as="p" delay={150}>
              Hydepark Regency sits on Manjakulam Road in Valakkad, Palakkad. We started with a clear idea:
              give travellers a clean, comfortable room at a fair price, and give families a place to
              celebrate without leaving their guests scattered across town.
            </Reveal>
            <Reveal as="p" delay={250}>
              Today that means air-conditioned rooms and suites, free Wi-Fi and parking, room service, and
              a convention center with meeting and banquet facilities — all supported by a front desk that
              is open 24 hours a day.
            </Reveal>
            <Reveal as="p" delay={350}>
              Whether you are in Palakkad for a day or for a wedding week, our goal is the same: that you
              feel looked after from the moment you arrive.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="stats-strip pad">
        <div className="container glass stats-grid">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="What we stand for" text="The principles behind every stay and every event." />
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} variant="zoom" className="amenity glass">
                <span className="icon-bubble"><v.icon /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Where to find us" text={site.address} />
          <div className="grid grid-3">
            {[
              { icon: FaMapMarkerAlt, title: "Easy to spot", text: "Opposite Manjakulam Mosque on Manjakulam Road, Valakkad." },
              { icon: FaBus, title: "Close to transport", text: "A short walk from the KSRTC bus stand for easy arrivals and departures." },
              { icon: FaCity, title: "Near the city", text: "About 1.6 km from Palakkad city center." },
            ].map((x, i) => (
              <Reveal key={x.title} delay={i * 100} className="amenity glass">
                <span className="icon-bubble"><x.icon /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Discover Palakkad" text="Our tour desk can point you to the region's best-loved places." />
          <div className="grid grid-4">
            {explore.map((x, i) => (
              <Reveal key={x.title} delay={i * 100} className="amenity glass">
                <span className="icon-bubble"><x.icon /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
