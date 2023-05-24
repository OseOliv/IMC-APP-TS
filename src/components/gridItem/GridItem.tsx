import { Level } from "../../helpers/imc";
import styles from "./gridItem.module.css";
import upImages from "../../assets/img/up.png";
import downImages from "../../assets/img/down.png";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icon === "up" ? upImages : downImages}
          alt=""
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>

      {item.yourImc && (
        <div className={styles.yourImc}>Seu IMC e de {item.yourImc} kg/m2</div>
      )}

      <div className={styles.gridInfo}>
        <>
          IMC esta entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>.
        </>
      </div>
    </div>
  );
};
