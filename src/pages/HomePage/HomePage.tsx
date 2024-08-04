import React, { Suspense } from "react";
import styles from "./HomePage.module.scss";

import FinderInput from "@/components/FinderInput/FinderInput";
import CardsContainer from "@/components/CardsContainer/CardsContainer";

const HomePage = ({
  searchParams,
}: {
  searchParams?: { search?: string };
}) => {
  const search = searchParams?.search || "";

  return (
    <div className={styles.container}>
      <FinderInput />
      <Suspense key={search} fallback={<div>Loading heroes...</div>}>
        <CardsContainer search={search} />
      </Suspense>
    </div>
  );
};

export default HomePage;
