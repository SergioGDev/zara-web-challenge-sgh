import React from "react";
import styles from "./FinderInput.module.scss";
import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";

const FinderInput = () => {
  const { heroList, loadingData, errorMsg, finderText, setFinderInputText } =
    useHeroFinderContext();

  const handleOnChangeInput = (
    event: React.ChangeEvent<HTMLInputElement> | undefined,
  ) => {
    setFinderInputText(event!.target.value);
  };

  return (
    <div className={styles.inputFinder} data-testid="input-container">
      <input
        type="text"
        placeholder="Search a character..."
        value={finderText}
        onChange={handleOnChangeInput}
        data-testid="finder-input"
      />
      {!loadingData && heroList && (
        <div className={styles.resultsInfo}>
          {`${heroList?.length} results`}{" "}
        </div>
      )}

      {loadingData && <div className={styles.loadingData}>Loading data...</div>}
      {errorMsg && <div className={styles.error}>{errorMsg}</div>}
    </div>
  );
};

export default FinderInput;
