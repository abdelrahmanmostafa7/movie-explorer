import Results from "@/components/Results";
import { fetchMovies } from "@/lib/fetchMovies";

const API_KEY = process.env.API_KEY!;

type Props = {
  params: Promise<{
    genre: string;
  }>;
};

export default async function GenrePage({ params }: Props) {
  const { genre } = await params; // Resolve the promise to get the genre parameter 

  const results = await fetchMovies(genre, API_KEY);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
