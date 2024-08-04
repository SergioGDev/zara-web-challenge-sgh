import { HeroRoot } from "@/types/heroAxiosResp.types";
import axios from "axios";
import md5 from "md5";

const getHeroesListPath = "https://gateway.marvel.com/v1/public/characters";

const timestamp = process.env.NEXT_PUBLIC_TIMESTAMP;
const publicApiKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY;
const privateApiKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_API_KEY;

const hash = md5(`${timestamp}${privateApiKey}${publicApiKey}`);
const keysEndpoints = `?ts=${timestamp}&apikey=${publicApiKey}&hash=${hash}`;

export const getHerosData = async (name?: string) => {
  const url = `${getHeroesListPath}${keysEndpoints}&limit=50${name ? "&nameStartsWith=" + name : ""}`;
  return await axios.get<HeroRoot>(`${url}`);
};

export const getHeroDataById = async (id: number) => {
  const url = `${getHeroesListPath}/${id}${keysEndpoints}`;
  return await axios.get<HeroRoot>(`${url}`);
};

export const getComicsOfHero = async (id: number) => {
  const url = `${getHeroesListPath}/${id}/comics${keysEndpoints}&limit=20`;
  return await axios.get<HeroRoot>(`${url}&format=comic`);
};
