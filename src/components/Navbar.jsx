import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pill, setPill] = useState({ x: 0, w: 0, on: false });
  const { pathname } = useLocation();

  const navRef = useRef(null);

  /* ---- sliding pill: follows hover/focus, rests on the active page ---- */
  const placePill = useCallback((el) => {
    if (!el) return setPill((p) => ({ ...p, on: false }));
    setPill({ x: el.offsetLeft, w: el.offsetWidth, on: true });
  }, []);

  const restPill = useCallback(() => {
    placePill(navRef.current?.querySelector("a.active"));
  }, [placePill]);

  useLayoutEffect(() => {
    restPill();
  }, [pathname, restPill]);

  useEffect(() => {
    window.addEventListener("resize", restPill);
    document.fonts?.ready.then(restPill);
    return () => window.removeEventListener("resize", restPill);
  }, [restPill]);

  const trackLink = (e) => {
    const a = e.target.closest?.("a:not(.nav-call-mobile)");
    if (a && navRef.current?.contains(a)) placePill(a);
  };

  /* ---- close the drawer on route change or Escape ---- */
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* ---- compact navbar once the page is scrolled ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- lock page scroll while the drawer is open ---- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container navbar-inner">
        {/* ---------- brand (logo image) ---------- */}
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand-mark">
            <img
              src="/assets/logo.png"
              alt=""
              className="brand-logo"
              width="48"
              height="48"
              decoding="async"
            />
          </span>
          <span className="brand-text">
            <strong>Hydepark</strong>
            <small>Regency</small>
          </span>
        </Link>

        {/* ---------- centered links ---------- */}
        <nav
          ref={navRef}
          className={`nav-links ${open ? "show" : ""}`}
          aria-label="Main"
          onMouseOver={trackLink}
          onFocus={trackLink}
          onMouseLeave={restPill}
          onBlur={restPill}
        >
          <span
            className={`nav-pill ${pill.on ? "on" : ""}`}
            style={{ transform: `translateX(${pill.x}px)`, width: pill.w }}
            aria-hidden="true"
          />
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={{ "--i": i }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
          <a className="nav-call-mobile" style={{ "--i": navLinks.length }} href={`tel:${site.phoneRaw}`}>
            <FaPhoneAlt /> {site.phone}
          </a>
        </nav>

        {/* ---------- actions ---------- */}
        <div className="nav-actions">
          <a className="nav-phone" href={`tel:${site.phoneRaw}`}>
            <span className="nav-phone-icon">
              <FaPhoneAlt />
            </span>
            <span>{site.phone}</span>
          </a>
          <Link to="/rooms" className="btn btn-gold btn-sm">
            Book now
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}