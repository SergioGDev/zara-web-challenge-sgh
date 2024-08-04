"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavsCardsContainerWidget.module.scss";

import HeroCard from "@/components/HeroCard/HeroCard";
import { HeroDataResult } from "@/types/heroAxiosResp.types";
import { Hero } from "@prisma/client";
import axios from "axios";

const FavsCardsContainerWidget = () => {
  const [heroList, setHeroList] = useState<HeroDataResult[]>([]);

  useEffect(() => {
    const checkFavHeroList = async () => {
      const resp = await axios.get<Hero[]>("/api/heroes");
      setHeroList(
        resp.data.map(({ id, name, path, extension }) => ({
          id,
          name,
          thumbnail: { path, extension },
        })),
      );
    };
    
    checkFavHeroList();
  }, []);

  return (
    <div className={styles.container}>
      <div>{`${heroList.length} results`}</div>
      <div className={styles.cardsContainer}>
        {heroList.map((heroData) => (
          <HeroCard heroData={heroData as HeroDataResult} key={heroData.id} />
        ))}
      </div>
    </div>
  );
};

export default FavsCardsContainerWidget;
