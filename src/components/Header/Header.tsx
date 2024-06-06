import React from "react";
import styles from "./Header.module.scss";

import Image from "next/image";

const Header = () => {

  return (
    <div className={styles["header-container"]}>
      <div className={styles["marvel-logo"]}>
        <Image
          src="/images/marvel-logo.png"
          alt="Marvel Logo"
          width={130}
          height={44}
        />
      </div>
      <div className={styles["favs-container"]}>
        <Image
          src="/images/heart-icon.svg"
          alt="Favs Icon"
          width={24}
          height={21}
        />
        <span>3</span>
      </div>
    </div>
  );
};

export default Header;
