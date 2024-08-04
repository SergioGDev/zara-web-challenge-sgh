import React from "react";
import styles from "./CardsContainer.module.scss";

import HeroCard from "../HeroCard/HeroCard";
import { getHerosData } from "@/helpers/getHerosData";
import { HeroDataResult } from "@/types/heroAxiosResp.types";

const CardsContainer = async ({ search }: { search?: string }) => {
  let heroList;
  try {
    heroList = await getHerosData(search);
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return (
      <div className={styles.container}>
        <div>Error: Could not load hero data</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>{`${heroList.data.data.results.length} results`}</div>
      <div className={styles.cardsContainer}>
        {heroList.data.data.results.map((heroData) => (
          <HeroCard heroData={heroData as HeroDataResult} key={heroData.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
