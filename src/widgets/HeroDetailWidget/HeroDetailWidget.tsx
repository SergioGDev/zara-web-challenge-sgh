import React from "react";
import styles from "./HeroDetailWidget.module.scss";

import { prisma } from "@/lib/prisma";
import { HeroDetailWidgetProps } from "./heroDetailWidget.types";
import ComicInfoContainer from "@/components/ComicInfoContainer/ComicInfoContainer";
import { getComicsOfHero, getHeroDataById } from "@/helpers/getHerosData";
import { ComicDataResult, HeroDataResult } from "@/types/heroAxiosResp.types";
import FavIconImage from "@/components/FavIconImage/FavIconImage";
import Image from "next/image";

const HeroDetailWidget = async ({ id }: HeroDetailWidgetProps) => {
  const [heroDataDetailResp, heroComicsDetailResp, favHeroesList] =
    await Promise.all([
      getHeroDataById(+id),
      getComicsOfHero(+id),
      prisma.hero.findMany(),
    ]);

  const heroDataDetail = (
    heroDataDetailResp.data.data.results as HeroDataResult[]
  )[0];
  const heroComicsDetail = heroComicsDetailResp.data.data
    .results as ComicDataResult[];

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
              <FavIconImage heroData={heroDataDetail} width={30} />
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
