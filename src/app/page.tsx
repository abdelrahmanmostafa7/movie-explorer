import { fetchMovies } from "@/lib/fetchMovies"; // 
import axios from "axios";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY!;
const BASE_URL = process.env.URL;

type Props = {
  params: {
    genre: string;
  };
};

export default async function Home({ params }: Props) {
  const genre = params.genre;

  let results = [];
  let homePageContent = null;

  try {
    results = await fetchMovies(genre, API_KEY); 
  } catch (error) {
    console.error("Error fetching movie data", error);
    throw new Error("Failed to fetch movie data");
  }

  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/homepagecontent/get`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (Array.isArray(data)) {
      homePageContent = data[0] || null;
    }
  } catch (error) {
    console.error("Error fetching homepage content", error);
  }

  return (
    <div>
      {homePageContent && (
        <div className="text-center mb-10 max-w-6xl mx-auto py-10">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {homePageContent.title}
          </h1>
          <div
            className="sm:text-lg p-4"
            dangerouslySetInnerHTML={{
              __html: homePageContent.description,
            }}
          />
        </div>
      )}
      <Results results={results} />
    </div>
  );
}
