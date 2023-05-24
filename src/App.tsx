import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/img/powered.png";
import { levels, calcImc, Level } from "./helpers/imc";
import { GridItem } from "./components/gridItem/GridItem";
import leftArrowImage from "./assets/img/leftarrow.png";

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeighField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalcButton = () => {
    if (heightField && weightField) {
      setToShow(calcImc(heightField, weightField));
    } else {
      alert("Digite todos os campos");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeighField(0);
  };

  return (
    <div className={styles.main}>
      {/* ---HEADER--- */}
      <header>
        <div className={styles.headerContainer}>
          <img alt="logo" src={poweredImage} width={150} />
        </div>
      </header>

      {/* ---INFOS--- */}

      <div className={styles.container}>
        {/* LADO ESQUERDO */}
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            O IMC é reconhecido como padrão internacional para avaliar o grau de
            sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela
            altura ao quadrado (em metros). <br></br> <br></br>
            <strong>IMC = Peso ÷ (Altura × Altura)</strong>
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex. 1.5 (em metros)"
            value={heightField > 0 ? heightField : ""}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex. 78.5 (em kg)"
            value={weightField > 0 ? weightField : ""}
            onChange={(e) => setWeighField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalcButton} disabled={toShow ? true : false}>
            Calcular
          </button>
        </div>

        {/* LADO DIREITO */}
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
