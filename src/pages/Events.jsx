import { photos, img } from "../utils/images";
import { eventTypes, eventFeatures, planSteps } from "../data/events";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import { FaCheckCircle } from "react-icons/fa";

export default function Events() {
  return (
    <>
      <PageHero
        title="Events & convention center"
        text="Weddings, receptions, conferences and celebrations — hosted under the same roof as your guests' rooms."
        image={photos.hall}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Spaces for every occasion"
            text="From a family function to a full-day conference, we shape the hall around your event."
          />
          <div className="grid grid-4">
            {eventTypes.map((e, i) => (
              <Reveal key={e.title} delay={i * 100} className="event-card tall">
                <img src={img(e.image, 800)} alt={e.title} loading="lazy" />
                <div className="event-card-overlay glass">
                  <span className="icon-bubble sm"><e.icon /></span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-text">
            <AnimatedText text="Stay and celebrate in one place" as="h2" />
            <Reveal as="p" delay={150}>
              Out-of-town guests are the hardest part of any event. With rooms, triple rooms and suites on
              site, your family and friends can rest steps from the celebration, with free parking, an
              elevator and a 24-hour front desk to look after them.
            </Reveal>
            <Reveal as="ul" delay={250} className="check-list">
              {["Meeting and banquet facilities", "Rooms and suites for your guests", "Free private parking", "Free Wi-Fi throughout", "Room service for guests"].map((t) => (
                <li key={t}><FaCheckCircle /> {t}</li>
              ))}
            </Reveal>
          </div>
          <Reveal variant="right" className="split-media">
            <img className="single" src="/assets/party.jpg" alt="Wedding décor" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="How we support your event" />
          <div className="grid grid-3">
            {eventFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 120} variant="zoom" className="amenity glass">
                <span className="icon-bubble"><f.icon /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Planning your event, step by step" text="A simple process from first call to final guest." />
          <div className="steps">
            {planSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="step glass">
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-text">
            <AnimatedText text="Tell us about your event" as="h2" />
            <Reveal as="p" delay={150}>
              Share your date, expected guest count and what you have in mind. We'll respond with
              availability and a clear plan for halls, rooms and services.
            </Reveal>
          </div>
          <Reveal variant="right">
            <EnquiryForm kind="event" options={["Wedding / reception", "Corporate meeting", "Birthday / anniversary", "Seminar / launch", "Other"]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
