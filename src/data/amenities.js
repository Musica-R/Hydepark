import {
  FaWifi, FaConciergeBell, FaClock, FaSnowflake, FaCar, FaBroom,
  FaVolumeMute, FaSmokingBan, FaMapMarkedAlt, FaDoorOpen, FaUsers, FaTv,
} from "react-icons/fa";
import { MdElevator, MdOutlineBathtub, MdOutlineWaterDrop, MdOutlineCoffeeMaker } from "react-icons/md";
import { photos } from "../utils/images";

// first 8 use local files from public/assets (11.jpg to 18.jpg)
export const amenities = [
  {
    icon: FaConciergeBell, title: "Room service", image: "/assets/11.jpg", tag: "Dining",
    text: "Meals and refreshments brought to your door, so you can rest after a long day.",
    long: "Skip the queue and the search for a restaurant. Order tea, snacks or a full meal from your room phone and our team brings it to your door, hot and on time. It is ideal after a late arrival, during a business trip or when the family just wants to stay in.",
    points: ["Order from your room phone", "Tea, snacks and full meals", "Delivered straight to your door"],
  },
  {
    icon: FaClock, title: "24-hour front desk", image: "/assets/12.jpg", tag: "Always open",
    text: "Arrive at midnight or leave at dawn — someone is always at the desk to help.",
    long: "Trains and buses do not keep office hours, and neither do we. Our front desk is staffed day and night to handle late check-ins, early departures, taxi requests, extra towels or any question about the city. You are never left waiting for someone to turn up.",
    points: ["Late check-in and early check-out", "Help with taxis and directions", "A real person at any hour"],
  },
  {
    icon: FaWifi, title: "Free Wi-Fi", image: "/assets/19.jpg", tag: "Connected",
    text: "Complimentary internet across rooms and common areas for work, calls and streaming.",
    long: "Stay connected without asking for a password voucher or paying extra. Wi-Fi is included for every guest, in rooms and in shared areas, so you can join video calls, send work files, stream a film in the evening or simply keep in touch with home.",
    points: ["Included for every guest", "Rooms and common areas", "Suitable for calls and streaming"],
  },
  {
    icon: FaSnowflake, title: "Air conditioning", image: "/assets/14.jpg", tag: "Comfort",
    text: "Every room is air-conditioned, with options to suit Palakkad's warm days.",
    long: "Palakkad can be hot and humid, so a cool room matters. Every room has air conditioning that you control yourself. Come in from the afternoon heat, set the temperature you like and sleep through the night without waking up warm.",
    points: ["Every room air-conditioned", "Individually controlled", "Cool, quiet and comfortable"],
  },
  {
    icon: FaUsers, title: "Meeting & banquet facilities", image: "/assets/15.jpg", tag: "Events",
    text: "Halls for weddings, receptions, conferences and celebrations of every size.",
    long: "Our convention center sits under the same roof as your rooms. Host a wedding, a reception, a conference or a family celebration, and your guests can stay on site. One venue, one team and no travelling between hall and hotel.",
    points: ["Weddings and receptions", "Conferences and meetings", "Guest rooms on the same site"],
  },
  {
    icon: FaDoorOpen, title: "Private check-in / check-out", image: "/assets/16.jpg", tag: "Arrival",
    text: "A quiet, quick arrival and departure without queues at the desk.",
    long: "Arriving with luggage and children is tiring enough. Private check-in keeps the process short and calm, with your details handled at the desk without a crowd around you. Check-out is just as quick, so you can leave for your onward journey on time.",
    points: ["Short, calm arrival", "No crowded desk", "Quick, simple departure"],
  },
  {
    icon: FaBroom, title: "Daily housekeeping", image: "/assets/17.jpg", tag: "Cleanliness",
    text: "Fresh linen, tidy rooms and restocked toiletries every single day.",
    long: "Come back every evening to a room that feels freshly prepared. Beds are made, floors and bathrooms are cleaned, towels are replaced and toiletries are topped up. Clean rooms are the basis of a good stay, so we do it daily, not on request.",
    points: ["Fresh linen and towels", "Bathroom cleaned daily", "Toiletries restocked"],
  },
  {
    icon: MdElevator, title: "Elevator access", image: "/assets/18.jpg", tag: "Accessible",
    text: "Step-free access to every floor for families, seniors and heavy luggage.",
    long: "No stairs with heavy bags and no struggle for elderly relatives. The elevator reaches every floor, making the hotel easy for seniors, parents with small children and anyone travelling with a lot of luggage.",
    points: ["Reaches every floor", "Easy for seniors and children", "Simple with heavy luggage"],
  },
  {
    icon: FaMapMarkedAlt, title: "Tour desk", image: "/assets/20.jpg", tag: "Explore",
    text: "Plan visits to Palakkad Fort, Malampuzha and the hills with local help.",
    long: "Palakkad rewards a day out. Our tour desk helps you plan trips to Palakkad Fort, Malampuzha and the surrounding hills, arrange a car and pick sensible timings, so you spend your day seeing the region instead of working out the logistics.",
    points: ["Palakkad Fort and Malampuzha", "Hill and nature day trips", "Help with cars and timings"],
  },
  {
    icon: FaCar, title: "Free private parking", image: "/assets/21.jpg", tag: "Parking",
    text: "On-site parking for guests and event visitors at no extra charge.",
    long: "Bring your own car without worrying about where to leave it. Parking is on site, private and free for guests and for visitors attending events. That makes weddings and conferences far easier, and it is one less cost on a road trip.",
    points: ["On-site and private", "No extra charge", "Also for event visitors"],
  }
];

export const inRoom = [
  { icon: FaTv, title: "Flat-screen TV with cable channels" },
  { icon: MdOutlineCoffeeMaker, title: "Electric kettle" },
  { icon: MdOutlineWaterDrop, title: "Free bottled water" },
  { icon: MdOutlineBathtub, title: "Private bathroom with free toiletries" },
  { icon: FaDoorOpen, title: "Wardrobe with ample storage" },
  { icon: FaSnowflake, title: "Individually controlled air conditioning" },
];