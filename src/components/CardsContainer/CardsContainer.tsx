'use client'
import React, { useEffect, useState } from "react";
import styles from "./CardsContainer.module.scss";

import HeroCard from "../HeroCard/HeroCard";
import { getHerosData } from "@/helpers/getHerosData";
import { HeroDataResult } from "@/types/heroAxiosResp.types";

const CardsContainer = ({ search }: { search?: string }) => {
  const [heroList, setHeroList] = useState<HeroDataResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoadingData, setErrorLoadingData] = useState(false);

  useEffect(() => {
    setLoading(true);
    getHerosData(search)
      .then((resp) => {
        setHeroList(resp.data.data.results as HeroDataResult[]);
        setLoading(false);
      })
      .catch(() => setErrorLoadingData(true));
  }, [search]);

  if (loading) return <div>Loading heroes data...</div>;
  if (errorLoadingData) return <div>Error getting data</div>;

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

export default CardsContainer;
