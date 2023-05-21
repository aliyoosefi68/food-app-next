import Choice from "../../icones/Choice";
import Clock from "../../icones/Clock";
import Fast from "../../icones/Fast";
import Food from "../../icones/Food";
import styles from "./Atrributes.module.css";

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
