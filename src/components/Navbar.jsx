import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaHotel } from "react-icons/fa";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark"><FaHotel /></span>
          <span className="brand-text">
            <strong>Hydepark</strong>
            <small>Regency</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? "show" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
              {l.label}
            </NavLink>
          ))}
          <a className="nav-call-mobile" href={`tel:${site.phoneRaw}`}>
            <FaPhoneAlt /> {site.phone}
          </a>
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${site.phoneRaw}`}>
            <FaPhoneAlt /> <span>{site.phone}</span>
          </a>
          <Link to="/rooms" className="btn btn-gold btn-sm">Book now</Link>
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
