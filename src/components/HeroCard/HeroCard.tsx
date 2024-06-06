import React from "react";
import styles from "./HeroCard.module.scss";

import { HeroCardProps } from "./heroCard.types";
import Image from "next/image";

const HeroCard = ({ heroData }: HeroCardProps) => {
  const { thumbnail, name } = heroData;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto', maxHeight: 'calc(100% + 20px)' }}
          alt={`${name} Hero Image`}
        />
      </div>
      <div className={styles.nameContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.favContainer}>
          <Image
            src={"/images/heart-icon.svg"}
            width={20}
            height={20}
            alt="Fav Icon"
          />
        </div>
        <div className={styles.bottomRightTriangle}></div>
      </div>
    </div>
  );
};

export default HeroCard;
