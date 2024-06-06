import React from "react";
import styles from "./HomeWidget.module.scss";

import FinderInput from "@/components/FinderInput/FinderInput";
import CardsContainer from "@/components/CardsContainer/CardsContainer";

const HomeWidget = () => {
  return (
    <div className={styles.marginsContainer}>
      <FinderInput />
      <CardsContainer />
    </div>
  );
};

export default HomeWidget;
