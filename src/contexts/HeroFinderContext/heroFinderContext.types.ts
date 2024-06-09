import { ComicDataResult, HeroDataResult } from "@/types/heroAxiosResp.types";

export type HeroFinderContextType = {
  finderText: string;
  favsHeros: HeroDataResult[];
  heroList: HeroDataResult[];
  showFavList: boolean;

  errorMsg: string;
  loadingData: boolean;

  heroDataDetail?: HeroDataResult;
  heroComicsDetail?: ComicDataResult[];
};

export type HeroFinderContextProps = HeroFinderContextType & {
  addHeroToFavList: (heroData: HeroDataResult) => void;
  removeHeroFromFavList: (id: number) => void;
  setShowFavList: (show: boolean) => void;
  setHeroDataDetail: (heroData: HeroDataResult) => void;
  setErrorGettingInfo: () => void;
  getDetailHerolData: (idHero: number) => Promise<void>;
  setFinderInputText: (inputText: string) => void;
};
