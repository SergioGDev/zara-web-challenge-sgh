import React from "react";
import styles from "./FavPage.module.scss";
import FavsCardsContainerWidget from "@/widgets/FavsCardsContainerWidget/FavsCardsContainerWidget";

const FavPage = () => {
  return (
    <div className={styles.container}>
      <FavsCardsContainerWidget />
    </div>
  );
};

export default FavPage;
