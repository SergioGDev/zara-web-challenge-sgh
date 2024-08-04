import React, { Suspense } from "react";
import styles from "./Header.module.scss";

import Image from "next/image";
import Link from "next/link";
import HeaderFavIcon from "../HeaderFavIcon/HeaderFavIcon";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link className={styles.marvelLogo} href={"/"}>
        <Image
          src="/images/marvel-logo.png"
          alt="Marvel Logo"
          width={130}
          height={44}
          priority={true}
        />
      </Link>
      <Suspense
        fallback={
          <Link href={"/favs"} className={styles.favsContainer}>
            <Image
              src="/images/heart-icon.svg"
              alt="Favs Icon"
              width={24}
              height={21}
            />{" "}
            <span>0</span>
          </Link>
        }
      >
        <HeaderFavIcon />
      </Suspense>
    </div>
  );
};

export default Header;
