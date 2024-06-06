"use client";
import React from "react";
import styles from "./HomePage.module.scss";

import HomeWidget from "@/widgets/HomeWidget/HomeWidget";
import { HeroFinderContextProvider } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <HeroFinderContextProvider>
        <HomeWidget />
      </HeroFinderContextProvider>
    </div>
  );
};

export default HomePage;
