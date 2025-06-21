import { fetchMovies } from "@/lib/fetchMovies";
import Results from "@/components/Results";
import SearchBar from "@/components/SearchBar";

const API_KEY = process.env.API_KEY!;

type Props = {
  params: Promise<{
    genre: string;
  }>;
};

export default async function Home({ params }: Props) {
  const { genre } = await params;

  try {
    const results = await fetchMovies(genre, API_KEY);

    return (
      <>
        <SearchBar />
        <h1 className="text-3xl font-bold text-center my-6">
          Hot New Releases: Must-See Movies & Shows for 2024–2025
        </h1>
        <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto px-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
          repellat! Iusto, architecto ex suscipit quisquam voluptates debitis
          vero nulla accusantium veniam accusamus temporibus officiis rem
          pariatur earum repellendus non eum. 🎬✨
        </p>

        <Results results={results} />
      </>
    );
  } catch (error) {
    console.error("Error fetching movie data", error);
    throw new Error("Failed to fetch movie data");
  }
}
