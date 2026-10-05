import { FaBed, FaUserFriends, FaCheck, FaClock, FaSignOutAlt, FaCalendarCheck } from "react-icons/fa";
import { img, photos } from "../utils/images";
import { site } from "../data/site";
import { rooms } from "../data/rooms";
import { inRoom } from "../data/amenities";
import { formatPrice, bookingLink } from "../utils/helpers";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import CTABanner from "../components/CTABanner";

export default function Rooms() {
  return (
    <>
      <PageHero
        title="Rooms & suites"
        text="Four air-conditioned room types, from ₹2,200 a night — each with a flat-screen TV, private bathroom and free Wi-Fi."
        image={photos.roomKing}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Find the room that fits your trip"
            text="Solo, couple, family or group — pick a room and check live availability on our booking page."
          />
          <div className="room-list">
            {rooms.map((r, i) => (
              <article key={r.id} className={`room-row ${i % 2 ? "reverse" : ""}`}>
                <Reveal variant={i % 2 ? "right" : "left"} className="room-row-media">
                  <img src={img(r.image, 1100)} alt={r.name} loading="lazy" />
                  <span className="price-tag">{formatPrice(r.price)}<small> / night</small></span>
                </Reveal>
                <div className="room-row-body glass">
                  <AnimatedText text={r.name} as="h3" />
                  <Reveal as="p" delay={120}>{r.description}</Reveal>
                  <Reveal as="ul" delay={200} className="room-meta big">
                    <li><FaBed /> {r.beds}</li>
                    <li><FaUserFriends /> Up to {r.guests} guests</li>
                  </Reveal>
                  <Reveal as="ul" delay={260} className="tag-list">
                    {r.features.map((f) => <li key={f}><FaCheck /> {f}</li>)}
                  </Reveal>
                  <Reveal delay={320}>
                    <a className="btn btn-gold" href={bookingLink()} target="_blank" rel="noreferrer">
                      <FaCalendarCheck /> Check availability
                    </a>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Compare rooms at a glance" />
          <Reveal className="table-wrap glass">
            <table className="compare">
              <thead>
                <tr><th>Room</th><th>Beds</th><th>Guests</th><th>Price / night</th></tr>
              </thead>
              <tbody>
                {rooms.map((r) => (
                  <tr key={r.id}>
                    <td data-label="Room">{r.name}</td>
                    <td data-label="Beds">{r.beds}</td>
                    <td data-label="Guests">{r.guests}</td>
                    <td data-label="Price">{formatPrice(r.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal as="p" className="fine-print">Prices are indicative and vary by dates and booking platform.</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="In every room" text="The essentials are always included." />
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
        <div className="container grid grid-2">
          <Reveal variant="left" className="policy glass">
            <span className="icon-bubble"><FaClock /></span>
            <h3>Check-in</h3>
            <p className="big-text">{site.checkIn}</p>
            <p>Arriving outside this window? Our 24-hour front desk will help — please call ahead.</p>
          </Reveal>
          <Reveal variant="right" className="policy glass">
            <span className="icon-bubble"><FaSignOutAlt /></span>
            <h3>Check-out</h3>
            <p className="big-text">{site.checkOut}</p>
            <p>Need a late check-out? Ask at the desk and we'll do our best to arrange it.</p>
          </Reveal>
        </div>
      </section>

      <CTABanner title="Ready to book your room?" text="Pick your dates and see live prices, or call the front desk to book directly." />
    </>
  );
}
