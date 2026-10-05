import { FaMapMarkerAlt, FaSuitcaseRolling, FaBed, FaConciergeBell, FaGlassCheers, FaSignOutAlt } from "react-icons/fa";
import { img, photos } from "../utils/images";
import { amenities, inRoom } from "../data/amenities";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

const day = [
  { icon: FaSuitcaseRolling, time: "1:00 PM", title: "Arrive and settle in", text: "Private check-in, a cool room and a bottle of water waiting." },
  { icon: FaConciergeBell, time: "Afternoon", title: "Relax or get to work", text: "Free Wi-Fi, room service and a quiet, soundproof room." },
  { icon: FaMapMarkerAlt, time: "Evening", title: "Explore Palakkad", text: "Ask the tour desk about nearby sights and local transport." },
  { icon: FaBed, time: "Night", title: "Sleep well", text: "Daily-fresh linen and a front desk that never closes." },
  { icon: FaSignOutAlt, time: "Before 12:30 PM", title: "Check out smoothly", text: "A fast, private check-out so you can get on your way." },
];

export default function Amenities() {
  return (
    <>
      <PageHero
        title="Amenities & services"
        text="Everything that makes a stay at Hydepark Regency easy — from free Wi-Fi to a front desk that never sleeps."
        image={photos.lobby}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Property facilities"
            text="Our most-loved facilities, available to every guest."
          />
          <div className="grid grid-4 amenity-grid">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 90} variant="zoom" className="amenity glass">
                <span className="icon-bubble"><a.icon /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <Reveal variant="left" className="split-media">
            <img className="single" src={img(photos.dining, 1100)} alt="Dining at Hydepark Regency" loading="lazy" />
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

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="A day at Hydepark Regency" text="How a typical stay flows, from arrival to check-out." />
          <div className="timeline">
            {day.map((d, i) => (
              <Reveal key={d.title} variant={i % 2 ? "right" : "left"} className="timeline-item glass">
                <span className="icon-bubble sm"><d.icon /></span>
                <div>
                  <small>{d.time}</small>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Come and see for yourself" text="Book online or call the front desk — we'll make your arrival easy." />
    </>
  );
}
