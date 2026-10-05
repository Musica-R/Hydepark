import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import Reveal from "../components/Reveal";
import AnimatedText from "../components/AnimatedText";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <Reveal className="glass notfound-card" variant="zoom">
          <span className="nf-code">404</span>
          <AnimatedText text="This page isn't on our floor plan" as="h1" />
          <p>The link may be broken or the page may have moved. Head back home to continue.</p>
          <Link to="/" className="btn btn-gold"><FaHome /> Back to home</Link>
        </Reveal>
      </div>
    </section>
  );
}
