import { useState } from "react";
import { FaCalendarAlt, FaUserFriends, FaSearch } from "react-icons/fa";
import { bookingLink, todayISO } from "../utils/helpers";

export default function BookingBar() {
  const [checkin, setCheckin] = useState(todayISO(0));
  const [checkout, setCheckout] = useState(todayISO(1));
  const [adults, setAdults] = useState(2);

  const onCheckin = (v) => {
    setCheckin(v);
    if (v >= checkout) {
      const d = new Date(v);
      d.setDate(d.getDate() + 1);
      setCheckout(d.toISOString().split("T")[0]);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    window.open(bookingLink({ checkin, checkout, adults }), "_blank", "noopener");
  };

  return (
    <form className="booking-bar glass" onSubmit={submit}>
      <label>
        <span><FaCalendarAlt /> Check-in</span>
        <input type="date" value={checkin} min={todayISO(0)} onChange={(e) => onCheckin(e.target.value)} required />
      </label>
      <label>
        <span><FaCalendarAlt /> Check-out</span>
        <input type="date" value={checkout} min={checkin} onChange={(e) => setCheckout(e.target.value)} required />
      </label>
      <label>
        <span><FaUserFriends /> Guests</span>
        <select value={adults} onChange={(e) => setAdults(e.target.value)}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn btn-gold"><FaSearch /> Check availability</button>
    </form>
  );
}
