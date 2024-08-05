import { HeroSql } from "@/types/heroAxiosResp.types";
import { sql } from "@vercel/postgres";
import useSWR from "swr";

// Fetcher function to get data from the database
const fetcher = async () => {
  try {
    const res = await sql<HeroSql>`SELECT * FROM heroes`;
    return res.rows;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    throw error;
  }
};

const deleteFecher = async () => {
  try {
    const res = await sql<HeroSql>`SELECT * FROM heroes`;
    return res.rows;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    throw error;
  }
};

const addFecher = async () => {
  try {
    const res = await sql<HeroSql>`SELECT * FROM heroes`;
    return res.rows;
  } catch (error) {
    console.error("Error fetching heroes:", error);
    throw error;
  }
};


// Custom hook to use favorite heroes data
export const useFavHeroes = () => {
  const { data, error, mutate } = useSWR('favHeroes', fetcher);

  return {
    heroes: data ?? [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
