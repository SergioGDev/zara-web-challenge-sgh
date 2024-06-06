import React from "react";
import styles from "./MainLayout.module.scss";

import { MainLayoutProps } from "./mainLayout.types";
import Header from "@/components/Header/Header";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
