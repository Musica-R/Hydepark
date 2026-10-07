import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Resets scroll position on every route change */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // let in-page anchors (#section) work normally
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}