"use client";
import React from "react";
import styles from "./HeaderFavIcon.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useFavHeroes } from "@/hooks/useFavHeroes";


const HeaderFavIcon = () => {
  const { heroes } = useFavHeroes();

  return (
    <Link href={"/favs"} className={styles.favsContainer}>
      <Image
        src="/images/heart-icon.svg"
        alt="Favs Icon"
        width={24}
        height={21}
      />{" "}
      <span>{heroes?.length}</span>
    </Link>
  );
};

export default HeaderFavIcon;
