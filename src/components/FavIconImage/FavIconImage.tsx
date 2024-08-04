"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavIconImage.module.scss";

import { FavIconImageProps } from "./favIconImage.types";
import Image from "next/image";
import axios from "axios";
import { Hero } from "@prisma/client";
import { useFavHeroes } from "@/hooks/useFavHeroes";

const FavIconImage = ({ heroData, width }: FavIconImageProps) => {
  const [isFavHero, setIsFavHero] = useState(false);
  const { heroes, addHero } = useFavHeroes();

  useEffect(() => {
    setIsFavHero(heroes.some((hero) => hero.id === heroData.id));
  }, [heroData.id, heroes, heroes.length]);

  const setFav = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    addHero({
      id: heroData.id,
      name: heroData.name,
      path: heroData.thumbnail.path,
      extension: heroData.thumbnail.extension,
    });
    setIsFavHero((prev) => !prev);
  };

  return (
    <div
      className={styles.favContainer}
      onClick={(event: React.MouseEvent<HTMLImageElement, MouseEvent>) =>
        setFav(event)
      }
    >
      <Image
        src={
          isFavHero ? `/images/heart-icon.svg` : `/images/empty-heart-icon.svg`
        }
        width={width}
        height={width}
        alt="Fav Icon"
      />
    </div>
  );
};

export default FavIconImage;
