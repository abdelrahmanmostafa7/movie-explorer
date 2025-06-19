// app/top/[genre]/page.tsx
import Results from "@/components/Results";
import { fetchMovies } from "@/lib/fetchMovies";

const API_KEY = process.env.API_KEY!;

type Props = {
  params: {
    genre: string;
  };
};

export default async function GenrePage({ params }: Props) {
  const results = await fetchMovies(params.genre, API_KEY);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
