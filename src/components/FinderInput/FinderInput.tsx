import React from "react";
import styles from "./FinderInput.module.scss";
import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";

const FinderInput = () => {
  const { heroList, loadingData, errorMsg } = useHeroFinderContext();

  return (
    <div className={styles.inputFinder}>
      <input type="text" placeholder="Search a character..." />
      {!loadingData && (
        <div className={styles.resultsInfo}>
          {`${heroList?.length} results`}{" "}
        </div>
      )}

      <div className={styles.loadingData}>
        {loadingData && "Loading data..."}
      </div>
      {errorMsg && <div className={styles.error}>{errorMsg}</div>}
    </div>
  );
};

export default FinderInput;
