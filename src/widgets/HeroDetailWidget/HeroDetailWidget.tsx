"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeroDetailWidget.module.scss";

import { HeroDetailWidgetProps } from "./heroDetailWidget.types";
import ComicInfoContainer from "@/components/ComicInfoContainer/ComicInfoContainer";
import { getComicsOfHero, getHeroDataById } from "@/helpers/getHerosData";
import { ComicDataResult, HeroDataResult, HeroSql } from "@/types/heroAxiosResp.types";
import FavIconImage from "@/components/FavIconImage/FavIconImage";
import Image from "next/image";
import { sql } from "@vercel/postgres";

const HeroDetailWidget = ({ id }: HeroDetailWidgetProps) => {
  const [heroDataDetail, setHeroDataDetail] = useState<HeroDataResult>();
  const [heroComicsDetail, setHeroComicsDetail] = useState<ComicDataResult[]>();
  const [favHeroList, setFavHeroList] = useState<HeroSql[]>([]);
  const [loading, setLoading] = useState(true)
  const [errorGettingData, setErrorGettingData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [heroDataDetailResp, heroComicsDetailResp, respFavHeroes] = await Promise.all([
          getHeroDataById(+id),
          getComicsOfHero(+id),
          sql<HeroSql>`SELECT * FROM heroes`
        ]);
  
        setHeroDataDetail(
          (heroDataDetailResp.data.data.results as HeroDataResult[])[0],
        );
  
        setHeroComicsDetail(
          heroComicsDetailResp.data.data.results as ComicDataResult[],
        );

        setFavHeroList(respFavHeroes.rows)
      } catch(error) {
        setErrorGettingData(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading)
    return <div>Loading hero data...</div>;
  if (errorGettingData) return <div>Error getting data...</div>

  return (
    <div className={styles.container}>
      <div className={styles.headerHeroData}>
        <div className={styles.contentContainer}>
          <div className={styles.heroImage}>
            <Image
              src={`${heroDataDetail!.thumbnail.path}.${heroDataDetail!.thumbnail.extension}`}
              height={320}
              width={320}
              alt={`${heroDataDetail!.name} Photo`}
              priority={true}
            />
          </div>
          <div className={styles.heroInfo}>
            <div className={styles.heroInfoHeader}>
              <div className={styles.heroName}>{heroDataDetail!.name}</div>
              <FavIconImage isFav={favHeroList.some((favHero) => +favHero.id === heroDataDetail!.id)} heroData={heroDataDetail!} width={30} />
            </div>
            <div className={styles.heroInfoBody}>
              {heroDataDetail!.description}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.comicsData}>
        <div className={styles.contentContainer}>
          <div className={styles.comicsTitle}>
            {heroComicsDetail && heroComicsDetail.length > 0
              ? "Comics"
              : "No comics for this hero..."}
          </div>

          {heroComicsDetail && heroComicsDetail!.length > 0 && (
            <div className={styles.comicsContainer}>
              {heroComicsDetail!.map((comic) => (
                <ComicInfoContainer key={comic.id} comicInfo={comic} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroDetailWidget;
