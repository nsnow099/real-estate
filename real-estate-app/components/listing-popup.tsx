import React, { useState } from "react";
import styles from "@/styles/listing-popup.module.css"; // Import CSS module

interface ListingPopupProps {
  house: {
    address: string;
    location?: string;
    beds: number;
    baths: number;
    garage?: number;
    price: string;
    image?: string; //primary image
    images?: string[]; 
    size: string; 
    kitchen: {
      features: string;
      dimensions: string;
    };
    livingRoom: {
      features: string;
      dimensions: string;
    };
    basement: {
      type: string;
      features: string;
    };
  };
  onClose: () => void;
}

const ListingPopup: React.FC<ListingPopupProps> = ({ house, onClose }) => {
  const imgs = (house.images && house.images.length ? house.images : house.image ? [house.image] : []);
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (imgs.length ? (i - 1 + imgs.length) % imgs.length : 0));
  const next = () => setIndex((i) => (imgs.length ? (i + 1) % imgs.length : 0));

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        WORK IN PROGRESS
        <div className={styles.carousel}>
          <button className={styles.navButton} onClick={prev} aria-label="Previous image">◀</button>
          <div className={styles.carouselMain}>
            {imgs.length ? (
              <img src={imgs[index]} alt={`${house.address} image ${index + 1}`} className={styles.image} />
            ) : (
              <img src={house.image || "/images/house-background.jpeg"} alt={house.address} className={styles.image} />
            )}
          </div>
          <button className={styles.navButton} onClick={next} aria-label="Next image">▶</button>
        </div>

        <div className={styles.thumbnails}>
          {(imgs.length ? imgs : [house.image || "/images/house-background.jpeg"]).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className={styles.content}>
          <h2 className={styles.price}>{house.price}</h2>
          <p className={styles.address}>{house.address}</p>

          <div className={styles.features}>
            <span>🏡 {house.beds} Beds</span>
            <span>🛁 {house.baths} Baths</span>
            {house.garage !== undefined && <span>🚗 {house.garage} Garage</span>}
          </div>

          <div className={styles.featureSection}>
            <h3>🏠 House Details</h3>
            <p>📏 Size: {house.size} sq. ft.</p>
          </div>

          <div className={styles.featureSection}>
            <h3>🍽️ Kitchen</h3>
            <p>🔹 Features: {house.kitchen.features}</p>
            <p>📐 Dimensions: {house.kitchen.dimensions}</p>
          </div>

          <div className={styles.featureSection}>
            <h3>🛋️ Living Room</h3>
            <p>🔹 Features: {house.livingRoom.features}</p>
            <p>📐 Dimensions: {house.livingRoom.dimensions}</p>
          </div>

          <div className={styles.featureSection}>
            <h3>🏡 Basement</h3>
            <p>🔹 Type: {house.basement.type}</p>
            <p>🔹 Features: {house.basement.features}</p>
          </div>

          <button className={styles.contactButton}>Contact Agent</button>
        </div>
      </div>
    </div>
  );
};

export default ListingPopup;
