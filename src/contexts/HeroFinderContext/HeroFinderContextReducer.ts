import { HeroDataResult } from "@/types/heroAxiosResp.types";
import { HeroFinderContextType } from "./heroFinderContext.types";

type HeroFinderAction =
  | { type: "setHeroList"; payload: HeroDataResult[] }
  | { type: "addHeroToFavList"; payload: HeroDataResult }
  | { type: "removeHeroFromFavList"; payload: number }
  | { type: "setLoading" }
  | { type: "setErrorGettingData" };

export const HeroFinderContextReducer = (
  state: HeroFinderContextType,
  action: HeroFinderAction,
): HeroFinderContextType => {
  switch (action.type) {
    case "setHeroList":
      return {
        ...state,
        heroList: action.payload,
        loadingData: false,
        errorMsg: "",
      };

    case "addHeroToFavList":
      return { ...state, favsHeros: [...state.favsHeros, action.payload] };

    case "removeHeroFromFavList":
      return {
        ...state,
        favsHeros: state.favsHeros.filter((item) => item.id !== action.payload),
      };

    case "setLoading":
      return { ...state, errorMsg: "", loadingData: true };

    case "setErrorGettingData":
      return {
        ...state,
        errorMsg: "An error has occurred...",
        loadingData: true,
      };

    default:
      return state;
  }
};
