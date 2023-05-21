//icons
import Location from "@/components/icones/Location";

//styles
import styles from "./Card.module.css";
import Dollar from "@/components/icones/Dollar";
import Link from "next/link";
const Card = ({ data }) => {
  const { id, name, price, details, discount } = data;
  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.detailes}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}</div> : null}
      </div>
      <Link href={`/menu/${id}`}>See details</Link>
    </div>
  );
};

export default Card;
