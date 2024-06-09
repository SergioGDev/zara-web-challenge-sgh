import React from "react";
import styles from "./ComicInfoContainer.module.scss";

import { ComicInfoContainerProps } from "./comicInfoContainer.types";
import Image from "next/image";
import { getComicTitleAndYear } from "./comicInfoContainer.helpers";

const ComicInfoContainer = ({ comicInfo }: ComicInfoContainerProps) => {
  const { thumbnail, title } = comicInfo;
  const srcPath = `${thumbnail.path}.${thumbnail.extension}`;

  const comicData = getComicTitleAndYear(title);
  const year = comicData ? comicData.year : 0;
  const comicTitle = comicData ? comicData.comicTitle : '';

  return (
    <div className={styles.container}>
      <Image
        width={180}
        height={268}
        alt={`Comic ${title} photo`}
        src={srcPath}
      />

      <div className={styles.comicName}>{comicTitle}</div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};

export default ComicInfoContainer;
