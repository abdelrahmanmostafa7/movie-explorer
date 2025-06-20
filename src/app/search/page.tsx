import { fetchSearchedMovies } from "@/lib/fetchSearchedMovies";
import Results from "@/components/Results";
import Link from "next/link";

type Props = {
  searchParams: {
    query?: string;
    page?: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.query || "";
  const page = parseInt(searchParams.page || "1");
  const apiKey = process.env.API_KEY!;

  
  const { results, totalPages } = await fetchSearchedMovies(
    query,
    apiKey,
    page
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Search results for: <span className="text-blue-600">{query}</span>
      </h1>

      {results.length > 0 ? (
        <>
          <Results results={results} />

          <div className="flex justify-center items-center gap-4 mt-8">
            {page > 1 && (
              <Link
                href={`/search?query=${query}&page=${page - 1}`}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Previous
              </Link>
            )}

            {page < totalPages && (
              <Link
                href={`/search?query=${query}&page=${page + 1}`}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              >
                Next
              </Link>
            )}
          </div>
        </>
      ) : (
        <div className="text-center text-lg text-gray-600 mt-10">
          No results found.
        </div>
      )}
    </div>
  );
}
