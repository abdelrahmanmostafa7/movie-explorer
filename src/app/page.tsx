import { fetchMovies } from "@/lib/fetchMovies";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY!;

type Props = {
  params: {
    genre: string;
  };
};

export default async function Home({ params }: Props) {
  try {
    const results = await fetchMovies(params.genre, API_KEY);
    return <Results results={results} />;
  } catch (error) {
    console.error("Error fetching movie data", error);
    throw new Error("Failed to fetch movie data");
  }
}
