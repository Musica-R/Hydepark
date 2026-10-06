import { FaLandmark, FaWater, FaMountain, FaTree } from "react-icons/fa";
import { photos } from "../utils/images";
import { FaShieldAlt, FaHeart, FaGem, FaHandshake } from "react-icons/fa";

// Build an Unsplash URL from a photo id
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const explore = [
  {
    icon: FaLandmark,
    title: "Palakkad Fort",
    text: "A historic fort in the heart of the city, ideal for a relaxed half-day.",
    image: unsplash("photo-1477587458883-47145ed94245"), // fort / stone gateway
    link: "/contact",
  },
  {
    icon: FaWater,
    title: "Malampuzha Dam",
    text: "Gardens and a reservoir that make a favourite family outing.",
    image: unsplash("photo-1506744038136-46273834b3fb"), // lake and hills
    link: "/contact",
  },
  {
    icon: FaMountain,
    title: "Nelliyampathy Hills",
    text: "Cool viewpoints and plantations for a scenic escape from the plains.",
    image: unsplash("photo-1464822759023-fed622ff2c3b"), // misty hills
    link: "/contact",
  },
  {
    icon: FaTree,
    title: "Silent Valley",
    text: "Protected rainforest for nature lovers and wildlife enthusiasts.",
    image: unsplash("photo-1448375240586-882707db888b"), // forest
    link: "/contact",
  },
];

export const values = [
  { icon: FaHeart, title: "Genuine hospitality", text: "Warm, attentive service is how we measure every stay." },
  { icon: FaShieldAlt, title: "Clean and secure", text: "Daily housekeeping and a staffed front desk day and night." },
  { icon: FaGem, title: "Honest value", text: "Comfortable rooms at fair prices, with no surprises at check-out." },
  { icon: FaHandshake, title: "Event partners", text: "We treat your celebration as if it were our own." },
];

export const whyUs = [
  { title: "Central and easy to reach", text: "Just 1.6 km from the city center, with the KSRTC bus stand within walking distance.", image: photos.exterior },
  { title: "Rooms for every budget", text: "From ₹2,200 per night for a Standard Double to ₹4,200 for a spacious Suite.", image: photos.roomKing },
  { title: "Stay and celebrate in one place", text: "Book your guests into our rooms and host the event in our convention center.", image: photos.hall },
];