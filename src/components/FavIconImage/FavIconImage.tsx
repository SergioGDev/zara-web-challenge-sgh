"use client";
import React, { useEffect, useState } from "react";
import styles from "./FavIconImage.module.scss";

import Image from "next/image";
import { FavIconImageProps } from "./favIconImage.types";
import { sql } from "@vercel/postgres";
import { useFavHeroes } from "@/hooks/useFavHeroes";

const FavIconImage = ({ heroData, isFav, width }: FavIconImageProps) => {
  const [isFavState, setIsFavState] = useState(isFav)
  const { mutate } = useFavHeroes();
  const setFav = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFav) {
      sql`DELETE FROM heroes WHERE id=${heroData.id}`
      setIsFavState(false);
    } else {
      sql`INSERT INTO heroes (id, name, path, extension) VALUES (${heroData.id}, ${heroData.name}, ${heroData.thumbnail.path}, ${heroData.thumbnail.extension})`
      setIsFavState(true);
    }

    mutate();
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
          isFavState ? `/images/heart-icon.svg` : `/images/empty-heart-icon.svg`
        }
        width={width}
        height={width}
        alt="Fav Icon"
      />
    </div>
  );
};

export default FavIconImage;
