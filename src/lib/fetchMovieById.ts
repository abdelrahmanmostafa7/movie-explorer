import apiClient from "./apiClient";
import { Movie } from "@/types/types";

export async function fetchMovieById(id: number | string): Promise<Movie> {
  const response = await apiClient.get(`/movie/${id}`, {
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  return response.data;
}
