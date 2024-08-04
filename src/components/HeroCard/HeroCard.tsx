"use client";
import React from "react";
import styles from "./HeroCard.module.scss";
import { HeroCardProps } from "./heroCard.types";
import Link from "next/link";
import FavIconImage from "../FavIconImage/FavIconImage";

const HeroCard = ({ heroData }: HeroCardProps) => {
  const { id, thumbnail, name } = heroData;

  return (
    <Link
      className={styles.container}
      data-testid="hero-card-container"
      href={`/${id}`}
    >
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`,
        }}
      ></div>
      <div className={styles.nameContainer}>
        <div className={styles.name} data-testid="hero-card-name">
          {name}
        </div>
        <FavIconImage heroData={heroData} width={20} />
        <div className={styles.bottomRightTriangle}></div>
      </div>
    </Link>
  );
};

export default HeroCard;
