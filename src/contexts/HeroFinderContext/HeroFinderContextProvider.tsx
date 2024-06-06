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
import axios from "axios";
import md5 from "md5";
import { Data, HeroDataResult, HeroRoot } from "@/types/heroAxiosResp.types";

const getHeroesListPath = "http://gateway.marvel.com/v1/public/characters";

export const HeroFinderContextProvider = ({ children }: PropsWithChildren) => {
  const [heroFinderData, dispatch] = useReducer(
    HeroFinderContextReducer,
    initialHeroFinderContextState,
  );

  useEffect(() => {
    const timestamp = process.env.NEXT_PUBLIC_TIMESTAMP;
    const publicApiKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY;
    const privateApiKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY;

    const hash = md5(`${timestamp}${privateApiKey}${publicApiKey}`);
    const url = `${getHeroesListPath}?ts=${timestamp}&apikey=${publicApiKey}&hash=${hash}&limit=50`;

    dispatch({ type: 'setLoading' })
    axios
      .get<HeroRoot>(`${url}`)
      .then((resp) => {
        dispatch(
          resp.status === 200
            ? { type: "setHeroList", payload: resp.data.data.results }
            : { type: "setErrorGettingData" },
        );
      })
      .catch((err) => dispatch({ type: "setErrorGettingData" }));
  }, []);

  // const addItem = (item: Item) => dispatch({ type: "addItem", payload: item });
  // const removeItem = (id: number) => dispatch({ type: "removeItem", payload: id });

  const providerObject: HeroFinderContextProps = {
    ...heroFinderData,

    // Add here the methods of the provider
    // addItem,
    // removeItem,
  };

  return (
    <HeroFinderContext.Provider value={providerObject}>
      {children}
    </HeroFinderContext.Provider>
  );
};

export const useHeroFinderContext = () => useContext(HeroFinderContext);
