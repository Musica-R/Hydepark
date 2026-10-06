import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { img, photos } from "../utils/images";
import { site, stats } from "../data/site";
import { rooms } from "../data/rooms";
import { amenities } from "../data/amenities";
import { eventTypes } from "../data/events";
import { gallery } from "../data/gallery";
import { whyUs, explore } from "../data/highlights";
import { faqs } from "../data/faqs";
import { reviews } from "../data/reviews";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatCounter from "../components/StatCounter";
import RoomCard from "../components/RoomCard";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${img(photos.hero, 2200)})` }} />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <AnimatedText text="Stay well. Celebrate beautifully." as="h1" className="hero-title" delay={150} />
          <Reveal as="p" delay={500} className="hero-sub">
            Air-conditioned rooms from ₹2,200, a 24-hour front desk and banquet halls for every occasion —
            on Manjakulam Road, just 1.6 km from Palakkad city center.
          </Reveal>
          <Reveal delay={700} className="hero-actions">
            <Link to="/rooms" className="btn btn-gold">Explore rooms <FaArrowRight /></Link>
            <Link to="/events" className="btn btn-glass">Plan an event</Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        <div className="container glass stats-grid">
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro">
        <div className="container split">
          <div className="split-text">
            <AnimatedText text="A comfortable base in the heart of Palakkad" as="h2" />
            <Reveal as="p" delay={150}>
              Hydepark Regency is a hotel and event venue on Manjakulam Road in Valakkad, opposite Manjakulam
              Mosque and a short walk from the KSRTC bus stand. Whether you are here for business, a family
              visit or a wedding, you will find clean rooms, quick service and a team that answers any hour.
            </Reveal>
            <Reveal as="p" delay={250}>
              We keep things simple: a good bed, strong Wi-Fi, free parking and honest prices. And when
              your plans are bigger than a room, our convention center is right under the same roof.
            </Reveal>
            <Reveal as="ul" delay={350} className="check-list">
              {["Free Wi-Fi and private parking", "Soundproof, non-smoking rooms", "Room service and daily housekeeping", "Banquet and meeting facilities"].map((t) => (
                <li key={t}><FaCheckCircle /> {t}</li>
              ))}
            </Reveal>
            <Reveal delay={450}>
              <Link to="/about" className="link-arrow">Our story <FaArrowRight /></Link>
            </Reveal>
          </div>
          <Reveal variant="right" className="split-media duo">
            <img className="duo-a" src={img(photos.exterior, 900)} alt="Hydepark Regency building" loading="lazy" />
            <img className="duo-b" src={img(photos.lobby, 700)} alt="Lounge area" loading="lazy" />
            <div className="duo-badge glass"><strong>24h</strong><span>Front desk</span></div>
          </Reveal>
        </div>
      </section>

      {/* ROOMS */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Rooms for every kind of stay"
            text="From a quiet double for one to a private suite for the whole family — all air-conditioned, all with a private bathroom."
          />
          <div className="grid grid-4 rooms-grid">
            {rooms.map((r, i) => <RoomCard key={r.id} room={r} delay={i * 100} />)}
          </div>
          <Reveal className="center-cta">
            <Link to="/rooms" className="btn btn-glass">See all room details <FaArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why guests choose Hydepark Regency"
            text="Location, value and everything you need for a stay or a celebration — in one address."
          />
          <div className="grid grid-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 120} className="why-card glass">
                <div className="why-media"><img src={img(w.image, 800)} alt={w.title} loading="lazy" /></div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Everything you need, nothing you don't"
            text="Thoughtful facilities that make the stay easy from the moment you arrive."
          />
          <div className="grid grid-4 amenity-grid">
            {amenities.slice(0, 8).map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 90} variant="zoom" className="amenity glass">
                <span className="icon-bubble"><a.icon /></span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link to="/amenities" className="btn btn-glass">All amenities <FaArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section className="section section-dark events-feature">
        <div className="container">
          <SectionHeading
            title="Host your event in our convention center"
            text="Weddings, receptions, conferences and celebrations — with rooms and suites for your guests, on site."
          />
          <div className="grid grid-4">
            {eventTypes.map((e, i) => (
              <Reveal key={e.title} delay={i * 100} className="event-card">
                <img src={img(e.image, 800)} alt={e.title} loading="lazy" />
                <div className="event-card-overlay glass">
                  <span className="icon-bubble sm"><e.icon /></span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link to="/events" className="btn btn-gold">Enquire about events <FaArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="A look around" text="Rooms, halls, dining and the building itself." />
          <div className="mosaic">
            {gallery.slice(0, 6).map((g, i) => (
              <Reveal key={g.id} variant="zoom" delay={i * 80} className={`mosaic-item m${i + 1}`}>
                <img src={img(g.src, 900)} alt={g.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
          <Reveal className="center-cta">
            <Link to="/gallery" className="btn btn-glass">View full gallery <FaArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      {/* EXPLORE PALAKKAD — Must Visit Places */}
      <section className="section destinations">
        <div className="container destinations-grid">
          <div className="dest-intro">
            <Reveal as="span" className="dest-eyebrow">Our top destinations</Reveal>
            <AnimatedText text="Must Visit Places" as="h2" className="dest-title" />
            <Reveal as="p" delay={150}>
              From serene hills to historic forts, Palakkad offers a perfect blend of nature, culture and
              heritage. Our tour desk can help you plan day trips.
            </Reveal>
            <Reveal delay={250}>
              <Link to="/contact" className="dest-explore">
                <span className="dest-explore-btn"><FaArrowRight /></span>
                Explore the region
              </Link>
            </Reveal>
          </div>

          {explore.map((x, i) => (
            <Reveal key={x.title} delay={i * 120} className="dest-card">
              <span className="dest-icon"><x.icon /></span>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <Link to={x.link} className="dest-more">Know more <FaArrowRight /></Link>
              <div className={`dest-blob b${i + 1}`}>
                <img src={x.image} alt={x.title} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What our guests say"
            text="Honest words from travellers, families and event hosts who stayed with us."
          />
          <Testimonials items={reviews} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <AnimatedText text="Questions guests often ask" as="h2" />
            <Reveal as="p" delay={150}>
              Quick answers about check-in, rooms, prices, parking and events. Can't find yours? Call us
              any time on <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>.
            </Reveal>
            <Reveal delay={250}>
              <Link to="/contact" className="btn btn-glass">Contact us</Link>
            </Reveal>
          </div>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}