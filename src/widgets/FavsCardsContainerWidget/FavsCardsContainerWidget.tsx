"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavsCardsContainerWidget.module.scss";

import HeroCard from "@/components/HeroCard/HeroCard";
import { HeroDataResult, HeroSql } from "@/types/heroAxiosResp.types";
import { sql } from "@vercel/postgres";

const FavsCardsContainerWidget = () => {
  const [heroList, setHeroList] = useState<HeroDataResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkFavHeroList = async () => {
      setLoading(true);
      const {rows} = await sql<HeroSql>`SELECT * FROM heroes`
      
      setHeroList(
        rows.map(({ id, name, path, extension }) => ({
          id: +id,
          name,
          thumbnail: { path, extension },
        })),
      );
      
      setLoading(false);
    };
    
    checkFavHeroList();
  }, []);

  return (
    <div className={styles.container}>
      <div>{`${heroList.length} results`}</div>
      <div className={styles.cardsContainer}>
        {heroList.map((heroData) => (
          <HeroCard heroData={heroData as HeroDataResult} isFav={heroList.some((favHero) => favHero.id === heroData.id)} key={heroData.id} />
        ))}
      </div>
    </div>
  );
};

export default FavsCardsContainerWidget;
