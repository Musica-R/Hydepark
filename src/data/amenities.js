import {
  FaWifi, FaConciergeBell, FaClock, FaSnowflake, FaCar, FaBroom,
  FaVolumeMute, FaSmokingBan, FaMapMarkedAlt, FaDoorOpen, FaUsers, FaTv,
} from "react-icons/fa";
import { MdElevator, MdOutlineBathtub, MdOutlineWaterDrop, MdOutlineCoffeeMaker } from "react-icons/md";

export const amenities = [
  { icon: FaConciergeBell, title: "Room service", text: "Meals and refreshments brought to your door, so you can rest after a long day." },
  { icon: FaClock, title: "24-hour front desk", text: "Arrive at midnight or leave at dawn — someone is always at the desk to help." },
  { icon: FaWifi, title: "Free Wi-Fi", text: "Complimentary internet across rooms and common areas for work, calls and streaming." },
  { icon: FaSnowflake, title: "Air conditioning", text: "Every room is air-conditioned, with options to suit Palakkad's warm days." },
  { icon: FaUsers, title: "Meeting & banquet facilities", text: "Halls for weddings, receptions, conferences and celebrations of every size." },
  { icon: FaDoorOpen, title: "Private check-in / check-out", text: "A quiet, quick arrival and departure without queues at the desk." },
  { icon: FaBroom, title: "Daily housekeeping", text: "Fresh linen, tidy rooms and restocked toiletries every single day." },
  { icon: FaSmokingBan, title: "Non-smoking rooms", text: "Clean-air rooms for guests who prefer a smoke-free stay." },
  { icon: FaVolumeMute, title: "Soundproof rooms", text: "Thoughtful insulation keeps road noise out so you can sleep soundly." },
  { icon: FaMapMarkedAlt, title: "Tour desk", text: "Plan visits to Palakkad Fort, Malampuzha and the hills with local help." },
  { icon: FaCar, title: "Free private parking", text: "On-site parking for guests and event visitors at no extra charge." },
  { icon: MdElevator, title: "Elevator access", text: "Step-free access to every floor for families, seniors and heavy luggage." },
];

export const inRoom = [
  { icon: FaTv, title: "Flat-screen TV with cable channels" },
  { icon: MdOutlineCoffeeMaker, title: "Electric kettle" },
  { icon: MdOutlineWaterDrop, title: "Free bottled water" },
  { icon: MdOutlineBathtub, title: "Private bathroom with free toiletries" },
  { icon: FaDoorOpen, title: "Wardrobe with ample storage" },
  { icon: FaSnowflake, title: "Individually controlled air conditioning" },
];
