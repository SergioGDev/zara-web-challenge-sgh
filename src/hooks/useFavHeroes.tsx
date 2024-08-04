import { Hero } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get<Hero[]>(url).then((res) => res.data);

export const useFavHeroes = () => {
  const { data, error, mutate } = useSWR<Hero[]>("/api/heroes", fetcher);

  const addHero = async (hero: Hero) => {
    await axios.post("/api/heroes", hero);
    mutate();
  };

  return {
    heroes: data ?? [],
    isLoading: !error && !data,
    isError: error,
    addHero,
    mutate,
  };
};
