import { Link } from "react-router-dom";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { img, photos } from "../utils/images";
import { site } from "../data/site";
import { bookingLink } from "../utils/helpers";
import AnimatedText from "./AnimatedText";
import Reveal from "./Reveal";

export default function CTABanner({
  title = "Your Palakkad stay starts here",
  text = "Book a room online or call our 24-hour front desk — we'll take care of the rest.",
}) {
  return (
    <section className="cta-banner">
      <div className="cta-bg" style={{ backgroundImage: `url(${img(photos.resort, 1900)})` }} />
      <div className="container">
        <div className="glass cta-card">
          <AnimatedText text={title} as="h2" />
          <Reveal as="p" delay={200}>{text}</Reveal>
          <Reveal className="cta-actions" delay={300} variant="zoom">
            <a href={bookingLink()} target="_blank" rel="noreferrer" className="btn btn-gold"><FaCalendarCheck /> Book a room</a>
            <a href={`tel:${site.phoneRaw}`} className="btn btn-glass"><FaPhoneAlt /> {site.phone}</a>
            <Link to="/events" className="btn btn-glass">Plan an event</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
