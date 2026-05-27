import styles from "@/styles/listing-tile.module.css";

interface ListingTileProps {
  image: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
}

const ListingTile = ({ image, address, price, beds, baths }: ListingTileProps) => {
  return (
    <div className={styles.tile}>
      <img src={image} alt="Property" className={styles.image} />
      <div className={styles.details}>
        <p className={styles.price}>{price}</p>
        <p className={styles.address}>{address}</p>
        <p className={styles.features}>{beds} Beds • {baths} Baths</p>
      </div>
    </div>
  );
};

export default ListingTile;
