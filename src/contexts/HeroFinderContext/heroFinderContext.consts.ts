import { HeroFinderContextType } from "./heroFinderContext.types";

export const initialHeroFinderContextState: HeroFinderContextType = {
    finderText: '',
    favsHeros: [],
    heroList: [],
    showFavList: false,
    heroDataDetail: undefined,

    errorMsg: '',
    loadingData: false, 
};