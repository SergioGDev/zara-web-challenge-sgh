"use client";
import React from "react";
import styles from "./HomePage.module.scss";

import FinderInput from "@/components/FinderInput/FinderInput";
import CardsContainer from "@/components/CardsContainer/CardsContainer";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <FinderInput />
      <CardsContainer />
    </div>
  );
};

export default HomePage;
