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
      <HeaderFavIcon />
    </div>
  );
};

export default Header;
