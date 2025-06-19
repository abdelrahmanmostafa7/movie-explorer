import apiClient from "./apiClient";

export async function fetchMovies(genre: string, apiKey: string) {
  const endpoint =
    genre === "top_rated" ? "/movie/top_rated" : "/trending/all/week";
  const response = await apiClient.get(endpoint, {
    params: {
      api_key: apiKey,
    },
  });

  return response.data.results;
}
