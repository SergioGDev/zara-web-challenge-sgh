'use client'
import React, { useEffect, useState } from "react";
import styles from "./CardsContainer.module.scss";

import HeroCard from "../HeroCard/HeroCard";
import { getHerosData } from "@/helpers/getHerosData";
import { HeroDataResult, HeroSql } from "@/types/heroAxiosResp.types";
import { sql } from "@vercel/postgres";

const CardsContainer = ({ search }: { search?: string }) => {
  const [heroList, setHeroList] = useState<HeroDataResult[]>([]);
  const [favHeroList, setFavHeroList] = useState<HeroSql[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoadingData, setErrorLoadingData] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const [respHeroes, respFavHeroes] = await Promise.all([
          getHerosData(search),
          sql<HeroSql>`SELECT * FROM heroes`
        ])
  
        setHeroList(respHeroes.data.data.results as HeroDataResult[]);
        setFavHeroList(respFavHeroes.rows)
      } catch(error) {
        setErrorLoadingData(true);
      }

      setLoading(false);
    }

    fetchData();
  }, [search]);

  if (loading) return <div>Loading heroes data...</div>;
  if (errorLoadingData) return <div>Error getting data...</div>;

  return (
    <div className={styles.container}>
      <div>{`${heroList.length} results`}</div>
      <div className={styles.cardsContainer}>
        {heroList.map((heroData) => (
          <HeroCard heroData={heroData as HeroDataResult} isFav={favHeroList.some((favHero) => +favHero.id === heroData.id)} key={heroData.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
