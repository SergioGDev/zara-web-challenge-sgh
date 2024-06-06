import React from "react";
import styles from "./CardsContainer.module.scss";

import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import HeroCard from "../HeroCard/HeroCard";

const CardsContainer = () => {
  const { heroList } = useHeroFinderContext();
  return (
    <div className={styles.cardsContainer}>
      {heroList?.map((heroData) => (
        <HeroCard heroData={heroData} key={heroData.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
