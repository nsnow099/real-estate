import ListingTile from "./ListingTile";
import styles from "@/styles/ListingsGallery.module.css";
import { useState } from "react";
import HousePopup from "./popups"; // ✅ Correct import

// Updated Listings with Extra Details
const listings = [
  {
    image: "/images/house1.jpg",
    images: [
      "/images/house1.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "123 Sesame Street, Grimsby, ON",
    price: "$500,000",
    beds: 4,
    baths: 3,
    size: "2,100",
    kitchen: { features: "Modern appliances, Granite countertops", dimensions: "12x10 ft" },
    livingRoom: { features: "Open-concept, Large windows", dimensions: "20x15 ft" },
    basement: { type: "Finished", features: "Entertainment area, Guest room" },
  },
  {
    image: "/images/house2.jpg",
    images: [
      "/images/house2.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "456 Oakwood Drive, Toronto, ON",
    price: "$650,000",
    beds: 3,
    baths: 2,
    size: "1,800",
    kitchen: { features: "Island counter, Stainless steel appliances", dimensions: "14x12 ft" },
    livingRoom: { features: "Fireplace, Hardwood flooring", dimensions: "22x16 ft" },
    basement: { type: "Partially Finished", features: "Storage space, Laundry area" },
  },
  {
    image: "/images/house3.jpg",
    images: [
      "/images/house3.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "789 Pine Avenue, Mississauga, ON",
    price: "$750,000",
    beds: 5,
    baths: 4,
    size: "2,500",
    kitchen: { features: "Walk-in pantry, Smart fridge", dimensions: "16x12 ft" },
    livingRoom: { features: "Vaulted ceiling, Recessed lighting", dimensions: "24x18 ft" },
    basement: { type: "Fully Finished", features: "Home theater, Gym area" },
  },
  {
    image: "/images/house1.jpg",
    images: [
      "/images/house1.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "101 Maple Lane, Ottawa, ON",
    price: "$530,000",
    beds: 3,
    baths: 2,
    size: "1,750",
    kitchen: { features: "Quartz countertops, Gas stove", dimensions: "12x10 ft" },
    livingRoom: { features: "Cozy fireplace, Bay windows", dimensions: "18x14 ft" },
    basement: { type: "Unfinished", features: "Potential for customization" },
  },
  {
    image: "/images/house2.jpg",
    images: [
      "/images/house2.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "222 Birch Street, Vaughan, ON",
    price: "$720,000",
    beds: 4,
    baths: 3,
    size: "2,300",
    kitchen: { features: "Breakfast nook, Modern lighting", dimensions: "15x11 ft" },
    livingRoom: { features: "Built-in bookshelves, Sliding doors to patio", dimensions: "21x17 ft" },
    basement: { type: "Partially Finished", features: "Guest bedroom, Storage space" },
  },
  {
    image: "/images/house3.jpg",
    images: [
      "/images/house3.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "333 Cedar Road, Hamilton, ON",
    price: "$480,000",
    beds: 3,
    baths: 2,
    size: "1,600",
    kitchen: { features: "Rustic cabinets, Farmhouse sink", dimensions: "13x10 ft" },
    livingRoom: { features: "Exposed brick wall, Vintage look", dimensions: "19x14 ft" },
    basement: { type: "Finished", features: "Bar area, Home office" },
  },
  {
    image: "/images/house1.jpg",
    images: [
      "/images/house1.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "444 Elm Avenue, Brampton, ON",
    price: "$600,000",
    beds: 4,
    baths: 3,
    size: "2,000",
    kitchen: { features: "Spacious, High-end appliances", dimensions: "14x12 ft" },
    livingRoom: { features: "Elegant decor, Large chandelier", dimensions: "23x16 ft" },
    basement: { type: "Unfinished", features: "Ample storage space" },
  },
  {
    image: "/images/house2.jpg",
    images: [
      "/images/house2.jpg",
      "/images/kitchen.jpg",
      "/images/living-room.webp",
      "/images/bedroom.jpg",
      "/images/bathroom.webp",
    ],
    address: "555 Spruce Crescent, London, ON",
    price: "$690,000",
    beds: 5,
    baths: 4,
    size: "2,600",
    kitchen: { features: "Double ovens, Breakfast bar", dimensions: "16x14 ft" },
    livingRoom: { features: "Spacious layout, Entertainment system", dimensions: "25x20 ft" },
    basement: { type: "Fully Finished", features: "Home gym, Sauna" },
  },
];

const ListingsGallery = () => {
  const [selectedHouse, setSelectedHouse] = useState<typeof listings[0] | null>(null); // ✅ Type includes extra fields

  return (
    <div className={styles.gallery}>
      {listings.map((listing, index) => (
        <div key={index} onClick={() => setSelectedHouse(listing)}>
          <ListingTile {...listing} />
        </div>
      ))}

      {/* Show popup when a house is selected */}
      {selectedHouse && (
        <HousePopup house={selectedHouse} onClose={() => setSelectedHouse(null)} />
      )}
    </div>
  );
};

export default ListingsGallery;
