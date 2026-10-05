import { photos } from "../utils/images";
import { FaRing, FaBriefcase, FaBirthdayCake, FaMicrophoneAlt, FaGlassCheers, FaHandsHelping } from "react-icons/fa";

export const eventTypes = [
  { icon: FaRing, title: "Weddings & receptions", image: photos.wedding, text: "Elegant banquet space with dedicated rooms and suites for the families staying over." },
  { icon: FaBriefcase, title: "Corporate meetings", image: photos.conference, text: "Conferences, training days and board meetings with reliable Wi-Fi and parking." },
  { icon: FaBirthdayCake, title: "Birthdays & anniversaries", image: photos.hall, text: "Private celebrations with flexible layouts, décor support and catering coordination." },
  { icon: FaMicrophoneAlt, title: "Seminars & launches", image: photos.dining2, text: "Stage-ready halls for product launches, seminars and community gatherings." },
];

export const eventFeatures = [
  { icon: FaGlassCheers, title: "Flexible banquet halls", text: "Layouts adapt from intimate dinners to large receptions." },
  { icon: FaHandsHelping, title: "Dedicated event support", text: "A coordinator works with you from first call to final guest." },
  { icon: FaBriefcase, title: "Meeting-ready setup", text: "Seating, presentation and connectivity arranged to your brief." },
];

export const planSteps = [
  { title: "Share your plan", text: "Tell us the date, guest count and type of event." },
  { title: "Visit the venue", text: "Walk through the halls and rooms with our team." },
  { title: "Get a custom quote", text: "Receive a clear proposal covering hall, rooms and services." },
  { title: "Confirm and prepare", text: "We lock your date and coordinate every detail." },
  { title: "Enjoy the day", text: "Our staff manage the event while you host your guests." },
];
