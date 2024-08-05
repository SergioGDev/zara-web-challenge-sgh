import React, { Suspense } from "react";
import styles from "./HomePage.module.scss";

import FinderInput from "@/components/FinderInput/FinderInput";
import dynamic from "next/dynamic";

const CardsContainer = dynamic(
  () => import("@/components/CardsContainer/CardsContainer"),
  {
    suspense: true,
  },
);

const HomePage = ({ searchParams }: { searchParams?: { search?: string } }) => {
  const search = searchParams?.search || "";

  return (
    <div className={styles.container}>
      <FinderInput />
      <CardsContainer search={search} />
    </div>
  );
};

export default HomePage;
