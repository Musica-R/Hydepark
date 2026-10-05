import { photos } from "../utils/images";

export const rooms = [
  {
    id: "standard-double",
    name: "Standard Double Room",
    price: 2200,
    image: photos.roomDouble,
    beds: "1 full bed",
    guests: 2,
    summary:
      "A calm, well-lit room for solo travellers and couples who want a clean, comfortable base in the city.",
    description:
      "Our Standard Double is designed for easy stays — a full bed with fresh linen, air conditioning, a flat-screen TV with cable channels and a private bathroom with free toiletries. Ideal for business trips and quick getaways around Palakkad.",
    features: ["Air conditioning", "Flat-screen TV", "Private bathroom", "Free Wi-Fi", "Free bottled water", "Electric kettle"],
  },
  {
    id: "standard-king",
    name: "Standard King Room",
    price: 3200,
    image: photos.roomKing,
    beds: "1 full bed",
    guests: 2,
    summary:
      "More space and a more refined finish — a comfortable upgrade for couples and longer stays.",
    description:
      "The Standard King gives you extra room to unwind. Enjoy a plush bed, a work-friendly corner, a wardrobe with ample storage, cable TV and a soundproofed room that keeps the city outside where it belongs.",
    features: ["Air conditioning", "Flat-screen TV", "Soundproof room", "Wardrobe", "Free toiletries", "Daily housekeeping"],
  },
  {
    id: "triple-room",
    name: "Triple Room",
    price: 2700,
    image: photos.roomTriple,
    beds: "1 twin bed + 2 full beds",
    guests: 3,
    summary:
      "Three proper beds in one air-conditioned room — made for friends, family and small groups.",
    description:
      "Travelling with family or friends? The Triple Room sleeps three comfortably without the price of two rooms. It comes with air conditioning, a flat-screen TV, a private bathroom and the same round-the-clock front desk support.",
    features: ["Air conditioning", "Flat-screen TV", "Sleeps three", "Private bathroom", "Free Wi-Fi", "Room service"],
  },
  {
    id: "suite",
    name: "Private Suite",
    price: 4200,
    image: photos.roomSuite,
    beds: "Bedroom: 2 full beds · Living room: 1 sofa bed",
    guests: 4,
    summary:
      "A separate bedroom and living room for families, wedding guests and anyone who wants room to spread out.",
    description:
      "Our Suite pairs a bedroom with two full beds and a living room with a sofa bed, so a family or group can stay together with privacy. Air conditioning, a flat-screen TV and a private bathroom come as standard — perfect for event weekends at our convention center.",
    features: ["Separate living room", "Air conditioning", "Private bathroom", "Flat-screen TV", "Sofa bed", "Free bottled water"],
  },
];
