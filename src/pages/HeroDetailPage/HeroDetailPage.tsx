'use client'
import React, { Suspense } from "react";
import styles from './HeroDetailPage.module.scss';

import HeroDetailWidget from "@/widgets/HeroDetailWidget/HeroDetailWidget";

interface HeroDetailPageProps {
  params?: { id: string };
}

const HeroDetailPage = ({ params }: HeroDetailPageProps) => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading hero data...</div>}>
        <HeroDetailWidget id={params?.id || "0"} />
      </Suspense>
    </div>
  );
};

export default HeroDetailPage;
