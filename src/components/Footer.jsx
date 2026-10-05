import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaFacebookF, FaInstagram, FaWhatsapp, FaHotel } from "react-icons/fa";
import { navLinks, site } from "../data/site";
import { whatsappLink } from "../utils/helpers";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Reveal className="footer-col footer-about">
          <Link to="/" className="brand">
            <span className="brand-mark"><FaHotel /></span>
            <span className="brand-text"><strong>Hydepark</strong><small>Regency</small></span>
          </Link>
          <p>
            A hotel and convention center on Manjakulam Road, Palakkad — comfortable rooms, warm service
            and halls made for celebrations.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href={whatsappLink("Hello Hydepark Regency, I'd like to enquire.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </Reveal>

        <Reveal className="footer-col" delay={100}>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="footer-col" delay={200}>
          <h4>Rooms</h4>
          <ul>
            <li><Link to="/rooms">Standard Double</Link></li>
            <li><Link to="/rooms">Standard King</Link></li>
            <li><Link to="/rooms">Triple Room</Link></li>
            <li><Link to="/rooms">Private Suite</Link></li>
          </ul>
        </Reveal>

        <Reveal className="footer-col" delay={300}>
          <h4>Visit us</h4>
          <ul className="contact-list">
            <li><FaMapMarkerAlt /> <a href={site.mapLink} target="_blank" rel="noreferrer">{site.address}</a></li>
            <li><FaPhoneAlt /> <a href={`tel:${site.phoneRaw}`}>{site.phone}</a></li>
            <li><FaClock /> Check-in {site.checkIn}<br />Check-out {site.checkOut}</li>
          </ul>
        </Reveal>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Hydepark Regency & Convention Center. All rights reserved.</span>
          <span>Valakkad, Palakkad, Kerala</span>
        </div>
      </div>
    </footer>
  );
}
