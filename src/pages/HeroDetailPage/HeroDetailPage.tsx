"use client";
import React, { useEffect } from "react";
import styles from "./HeroDetailPage.module.scss";
import Image from "next/image";
import ErrorMsg from "@/components/ErrorMsg/ErrorMsg";
import ComicInfoContainer from "@/components/ComicInfoContainer/ComicInfoContainer";
import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import { usePathname } from "next/navigation";

const HeroDetailPage = () => {
  const {
    heroDataDetail,
    heroComicsDetail,
    loadingData,
    favsHeros,
    addHeroToFavList,
    removeHeroFromFavList,
    getDetailHerolData,
    errorMsg,
  } = useHeroFinderContext();
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname!.substring(1, pathname!.length);

    getDetailHerolData(+id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (errorMsg) {
    return <ErrorMsg errorMsg={errorMsg} />;
  }

  if (loadingData) {
    return (
      <div className={styles.container}>
        <div className={styles.headerHeroData}>
          <div className={styles.contentContainer}>Getting info...</div>
        </div>
      </div>
    );
  }

  if (heroDataDetail) {
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
                <div className={styles.favContainer}>
                  <Image
                    className={styles.favIcon}
                    src={
                      favsHeros?.find((hero) => hero.id === heroDataDetail?.id)
                        ? `/images/heart-icon.svg`
                        : `/images/empty-heart-icon.svg`
                    }
                    width={30}
                    height={30}
                    alt="Fav Icon"
                    onClick={() => {
                      favsHeros?.find((hero) => hero.id === heroDataDetail!.id)
                        ? removeHeroFromFavList(heroDataDetail!.id)
                        : addHeroToFavList(heroDataDetail!);
                    }}
                  />
                </div>
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
  }
  return <ErrorMsg errorMsg={errorMsg} />;
};

export default HeroDetailPage;
