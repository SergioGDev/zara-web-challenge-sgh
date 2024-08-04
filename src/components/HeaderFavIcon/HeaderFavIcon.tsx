"use client";
import React, { useEffect, useState } from "react";
import styles from "./HeaderFavIcon.module.scss";

import { Hero } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
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
