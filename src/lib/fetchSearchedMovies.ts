import apiClient from "./apiClient";

export async function fetchSearchedMovies(
  query: string,
  apiKey: string,
  page: number = 1
) {
  try {
    const response = await apiClient.get("/search/movie", {
      params: {
        api_key: apiKey,
        query,
        page,
      },
    });
    return {
      results: response.data.results,
      totalPages: response.data.total_pages,
      currentPage: response.data.page,
      totalResults: response.data.total_results,
    };
  } catch (error) {
    console.error("Error fetching searched movies:", error);
    return {
      results: [],
      totalPages: 0,
      currentPage: 1,
      totalResults: 0,
    };
  }
}
