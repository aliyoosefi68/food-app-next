import styles from "./Banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Hifood</h2>
        <p>Food Delivery and Takeout!</p>
        <span>
          HiFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu">See All</Link>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="Food image" />
      </div>
    </div>
  );
};

export default Banner;
