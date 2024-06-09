import React from "react";
import styles from "./HeroCard.module.scss";

import Image from "next/image";
import { HeroCardProps } from "./heroCard.types";
import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import { useRouter } from "next/navigation";

const HeroCard = ({ heroData }: HeroCardProps) => {
  const { id, thumbnail, name } = heroData;
  const {
    favsHeros,
    addHeroToFavList,
    removeHeroFromFavList,
    setHeroDataDetail,
  } = useHeroFinderContext();
  const router = useRouter();

  const setFav = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    favsHeros?.find((hero) => hero.id === heroData.id)
      ? removeHeroFromFavList(id)
      : addHeroToFavList(heroData);
  };

  const goToHeroDetailPage = () => {
    setHeroDataDetail(heroData);
    router.push(`/${id}`);
  };

  return (
    <div className={styles.container} onClick={goToHeroDetailPage}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`,
        }}
      ></div>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.favContainer}>
          <Image
            className={styles.favIcon}
            src={
              favsHeros?.find((hero) => hero.id === heroData.id)
                ? `/images/heart-icon.svg`
                : `/images/empty-heart-icon.svg`
            }
            width={20}
            height={20}
            alt="Fav Icon"
            onClick={(event: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
              setFav(event)
            }
          />
        </div>
        <div className={styles.bottomRightTriangle}></div>
      </div>
    </div>
  );
};

export default HeroCard;
