import { ComicDataResult, HeroDataResult } from "@/types/heroAxiosResp.types";
import { HeroFinderContextType } from "./heroFinderContext.types";

type HeroFinderAction =
  | { type: "setFinderText"; payload: string }
  | { type: "setHeroList"; payload: HeroDataResult[] }
  | { type: "addHeroToFavList"; payload: HeroDataResult }
  | { type: "setShowFavList"; payload: boolean }
  | { type: "removeHeroFromFavList"; payload: number }
  | { type: "setLoading" }
  | { type: "setErrorGettingData" }
  | { type: "setHeroDataDetail"; payload: HeroDataResult }
  | {
      type: "setHeroAndComicsDataDetail";
      payload: { heroData: HeroDataResult; comicData: ComicDataResult[] };
    };

export const HeroFinderContextReducer = (
  state: HeroFinderContextType,
  action: HeroFinderAction,
): HeroFinderContextType => {
  switch (action.type) {
    case "setFinderText":
      return { ...state, finderText: action.payload };

    case "setHeroList":
      return {
        ...state,
        heroList: action.payload,
        showFavList: false,
        loadingData: false,
        errorMsg: "",
      };

    case "addHeroToFavList":
      return { ...state, favsHeros: [...state.favsHeros, action.payload] };

    case "setShowFavList":
      return {
        ...state,
        showFavList: action.payload,
        finderText: "",
        heroDataDetail: undefined,
        loadingData: false,
        errorMsg: "",
      };

    case "removeHeroFromFavList":
      return {
        ...state,
        favsHeros: state.favsHeros.filter((item) => item.id !== action.payload),
        heroDataDetail: undefined,
      };

    case "setLoading":
      return {
        ...state,
        errorMsg: "",
        showFavList: false,
        loadingData: true,
        heroDataDetail: undefined,
      };

    case "setErrorGettingData":
      return {
        ...state,
        errorMsg: "An error has occurred...",
        showFavList: false,
        loadingData: true,
        heroDataDetail: undefined,
      };

    case "setHeroDataDetail":
      return {
        ...state,
        loadingData: false,
        errorMsg: "",
        showFavList: false,
        heroDataDetail: action.payload,
      };

    case "setHeroAndComicsDataDetail":
      return {
        ...state,
        loadingData: false,
        errorMsg: "",
        showFavList: false,
        heroDataDetail: action.payload.heroData,
        heroComicsDetail: action.payload.comicData,
      };

    default:
      return state;
  }
};
