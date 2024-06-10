"use client";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { HeroFinderContextReducer } from "./HeroFinderContextReducer";
import { HeroFinderContext } from "./HeroFinderContext";
import { initialHeroFinderContextState } from "./heroFinderContext.consts";
import { HeroFinderContextProps } from "./heroFinderContext.types";
import { ComicDataResult, HeroDataResult } from "@/types/heroAxiosResp.types";
import {
  getComicsOfHero,
  getHeroDataById,
  getHerosData,
} from "@/helpers/getHerosData";

export const HeroFinderContextProvider = ({ children }: PropsWithChildren) => {
  const [heroFinderData, dispatch] = useReducer(
    HeroFinderContextReducer,
    initialHeroFinderContextState,
  );

  useEffect(() => {
    getHerosDataFromMarvelApi();
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => {
      getHerosDataFromMarvelApi(heroFinderData.finderText);
    }, 1000);

    return () => clearTimeout(getData);
  }, [heroFinderData.finderText]);

  const getHerosDataFromMarvelApi = (name?: string) => {
    dispatch({ type: "setLoading" });
    getHerosData(name)
      .then((resp) => {
        dispatch(
          resp.status === 200
            ? {
                type: "setHeroList",
                payload: resp.data.data.results as HeroDataResult[],
              }
            : { type: "setErrorGettingData" },
        );
      })
      .catch((err) => dispatch({ type: "setErrorGettingData" }));
  };

  const addHeroToFavList = (heroData: HeroDataResult) =>
    dispatch({ type: "addHeroToFavList", payload: heroData });

  const removeHeroFromFavList = (id: number) =>
    dispatch({ type: "removeHeroFromFavList", payload: id });

  const setShowFavList = (show: boolean) =>
    dispatch({ type: "setShowFavList", payload: show });

  const setHeroDataDetail = (heroData: HeroDataResult) => {
    dispatch({ type: "setHeroDataDetail", payload: heroData });
  };

  const getDetailHerolData = async (idHero: number) => {
    dispatch({ type: "setLoading" });

    // We'll get the hero data and the comics of that hero
    const respHeroData = await getHeroDataById(idHero);
    const respCommics = await getComicsOfHero(idHero);

    if (
      respHeroData.status === 200 &&
      respCommics.status === 200 &&
      respHeroData.data.data.results.length === 1
    ) {
      dispatch({
        type: "setHeroAndComicsDataDetail",
        payload: {
          heroData: (respHeroData.data.data.results as HeroDataResult[])[0],
          comicData: respCommics.data.data.results as ComicDataResult[],
        },
      });
    } else {
      dispatch({ type: "setErrorGettingData" });
    }
  };

  const setErrorGettingInfo = () => dispatch({ type: "setErrorGettingData" });

  const setFinderInputText = (inputText: string) =>
    dispatch({ type: "setFinderText", payload: inputText });

  const providerObject: HeroFinderContextProps = {
    ...heroFinderData,

    // Add here the methods of the provider
    addHeroToFavList,
    removeHeroFromFavList,
    setShowFavList,
    setHeroDataDetail,
    setErrorGettingInfo,
    getDetailHerolData,
    setFinderInputText,
  };

  return (
    <HeroFinderContext.Provider value={providerObject} data-testid='hero-finder-context-provider'>
      {children}
    </HeroFinderContext.Provider>
  );
};

export const useHeroFinderContext = () => useContext(HeroFinderContext);
