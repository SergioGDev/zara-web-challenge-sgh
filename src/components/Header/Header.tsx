"use client";
import React from "react";
import styles from "./Header.module.scss";

import Image from "next/image";
import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import Link from "next/link";

const Header = () => {
  const { favsHeros, setShowFavList } = useHeroFinderContext();

  return (
    <div className={styles.headerContainer}>
      <Link
        className={styles.marvelLogo}
        href={"/"}
        onClick={() => setShowFavList(false)}
      >
        <Image
          src="/images/marvel-logo.png"
          alt="Marvel Logo"
          width={130}
          height={44}
          priority={true}
        />
      </Link>
      <Link
        href={"/"}
        className={styles.favsContainer}
        onClick={() => setShowFavList(true)}
      >
        <Image
          src="/images/heart-icon.svg"
          alt="Favs Icon"
          width={24}
          height={21}
        />
        <span>{favsHeros?.length}</span>
      </Link>
    </div>
  );
};

export default Header;
