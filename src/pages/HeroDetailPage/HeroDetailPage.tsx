import React from "react";
import styles from "./HeroDetailPage.module.scss";

import HeroDetailWidget from "@/widgets/HeroDetailWidget/HeroDetailWidget";

interface HeroDetailPageProps {
  params?: { id: string };
}

const HeroDetailPage = ({ params }: HeroDetailPageProps) => {
  return (
    <div className={styles.container}>
      <HeroDetailWidget id={params?.id || "0"} />
    </div>
  );
};

export default HeroDetailPage;
