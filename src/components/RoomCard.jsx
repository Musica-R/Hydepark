import { FaBed, FaUserFriends, FaArrowRight } from "react-icons/fa";
import { img } from "../utils/images";
import { formatPrice, bookingLink } from "../utils/helpers";
import Reveal from "./Reveal";

export default function RoomCard({ room, delay = 0 }) {
  return (
    <Reveal className="room-card glass" delay={delay} variant="up">
      <div className="room-card-media">
        <img src={img(room.image, 900)} alt={room.name} loading="lazy" />
        {/* <span className="price-tag">
          {formatPrice(room.price)}<small> / night</small>
        </span> */}
      </div>
      <div className="room-card-body">
        <h3>{room.name}</h3>
        <p>{room.summary}</p>
        <ul className="room-meta">
          <li><FaBed /> {room.beds}</li>
          <li><FaUserFriends /> Up to {room.guests} guests</li>
        </ul>
        <a className="link-arrow" href={bookingLink()} target="_blank" rel="noreferrer">
          Check availability <FaArrowRight />
        </a>
      </div>
    </Reveal>
  );
}
