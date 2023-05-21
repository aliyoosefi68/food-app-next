import Attributes from "../modules/atrribute/Atrributes";
import Banner from "../modules/banner/Banner";
import Companies from "../modules/componies/Componies";
import Definition from "../modules/defenitions/Defenition";
import Guide from "../modules/guides/Guide";
import Instruction from "../modules/instruction/Instruction";
import Restrictions from "../modules/restriction/Restriction";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
};

export default HomePage;
