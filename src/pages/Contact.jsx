import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp, FaDirections } from "react-icons/fa";
import { photos } from "../utils/images";
import { site } from "../data/site";
import { faqs } from "../data/faqs";
import { whatsappLink } from "../utils/helpers";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import AnimatedText from "../components/AnimatedText";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";
import FAQ from "../components/FAQ";

export default function Contact() {
  const cards = [
    { icon: FaMapMarkerAlt, title: "Address", text: site.address, href: site.mapLink, cta: "Get directions" },
    { icon: FaPhoneAlt, title: "Call us", text: site.phone, href: `tel:${site.phoneRaw}`, cta: "Call front desk" },
    { icon: FaWhatsapp, title: "WhatsApp", text: "Chat with the team for quick answers.", href: whatsappLink("Hello Hydepark Regency!"), cta: "Open WhatsApp" },
    { icon: FaClock, title: "Timings", text: `Front desk open 24 hours. Check-in ${site.checkIn}. Check-out ${site.checkOut}.` },
  ];

  return (
    <>
      <PageHero
        title="Contact us"
        text="Call, message or visit — our 24-hour front desk is always happy to help."
        image={photos.lobby}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100} variant="zoom" className="amenity glass contact-card">
                <span className="icon-bubble"><c.icon /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.href && (
                  <a className="link-arrow" href={c.href} target="_blank" rel="noreferrer">{c.cta}</a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-text">
            <AnimatedText text="Send us an enquiry" as="h2" />
            <Reveal as="p" delay={150}>
              Planning a stay or a group booking? Share a few details and we'll reply on WhatsApp with
              availability and the best rate.
            </Reveal>
            <Reveal delay={250}>
              <EnquiryForm kind="stay" options={["Standard Double Room", "Standard King Room", "Triple Room", "Private Suite", "Group booking"]} />
            </Reveal>
          </div>
          <Reveal variant="right" className="map-wrap glass">
            <iframe title="Hydepark Regency location" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <a className="btn btn-gold map-btn" href={site.mapLink} target="_blank" rel="noreferrer"><FaDirections /> Open in Maps</a>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <AnimatedText text="Before you call" as="h2" />
            <Reveal as="p" delay={150}>The questions we hear most from guests planning a visit.</Reveal>
          </div>
          <FAQ items={faqs.slice(0, 5)} />
        </div>
      </section>
    </>
  );
}
