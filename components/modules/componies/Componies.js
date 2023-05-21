import styles from "./Componies.module.css";

import SpaceX from "../../icones/SpaceX";
import Tesla from "../../icones/Tesla";
import Apple from "../../icones/Apple";
import Binance from "../../icones/Binance";

function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
