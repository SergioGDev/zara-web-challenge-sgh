import { useHeroFinderContext } from "@/contexts/HeroFinderContext/HeroFinderContextProvider";
import { getComicsOfHero, getHeroDataById } from "@/helpers/getHerosData";
import { ComicDataResult, HeroDataResult } from "@/types/heroAxiosResp.types";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const useHeroDetailPage = () => {
  const {
    heroDataDetail,
    heroComicsDetail,
    loadingData,
    favsHeros,
    addHeroToFavList,
    removeHeroFromFavList,
    getDetailHerolData,
    errorMsg,
  } = useHeroFinderContext();
  const pathname = usePathname();

  useEffect(() => {
    const id = pathname!.substring(1, pathname!.length);

    getDetailHerolData(+id);
  }, []);

  return {
    heroDataDetail,
    heroComicsDetail,
    favsHeros,
    addHeroToFavList,
    removeHeroFromFavList,
    errorMsg,
    loadingData,
  };
};
