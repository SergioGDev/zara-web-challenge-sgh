import { HeroDataResult } from "@/types/heroAxiosResp.types";

export type HeroFinderContextType = {
    finderText: string;
    favsHeros: HeroDataResult[];
    heroList: HeroDataResult[];

    errorMsg: string;
    loadingData: boolean;
};

export type HeroFinderContextProps = HeroFinderContextType & {
    // Insert here the functions to modify state;
};