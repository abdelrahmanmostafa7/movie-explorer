import React from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { Movie, Video, CastMember, Review, SimilarMovie } from "@/types/types";

const API_KEY = process.env.API_KEY;
// عملتها هنا عشان وانا بجرب docker مطلع فيها مشكلة
type Props = {
  params: {
    id: string;
  };
};

export default async function MovieDetailPage({ params }: Props) {
  const movieId = params.id;

  const [movieRes, videosRes, creditsRes, reviewsRes, similarRes] =
    await Promise.all([
      axios.get<Movie>(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      ),
      axios.get<{ results: Video[] }>(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      ),
      axios.get<{ cast: CastMember[] }>(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      ),
      axios.get<{ results: Review[] }>(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
      ),
      axios.get<{ results: SimilarMovie[] }>(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`
      ),
    ]);

  const movie = movieRes.data;
  const trailer = videosRes.data.results.find(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  const cast = creditsRes.data.cast.slice(0, 10);
  const reviews = reviewsRes.data.results.slice(0, 5);
  const similar = similarRes.data.results;

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Movie Metadata */}
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 mb-4">{movie.overview}</p>

      {/* Embedded Trailer */}
      {trailer && (
        <div className="aspect-video w-full my-6">
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      )}

      {/* Cast List */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cast.map((actor) => (
          <div key={actor.id} className="text-center">
            <Image
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
              width={112} // w-28 = 112px
              height={144} // h-36 = 144px
              className="rounded-lg mx-auto object-cover"
            />
            <p className="font-medium mt-1">{actor.name}</p>
            <p className="text-sm text-gray-500">as {actor.character}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-400 p-4 rounded-md">
            <p className="font-semibold">{review.author}</p>
            <p className="text-sm text-gray-700 mt-2">
              {review.content.slice(0, 300)}...
            </p>
          </div>
        ))}
      </div>

      {/* Similar Movies */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Similar Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {similar.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-200">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                width={200}
                height={300}
                className="rounded-lg w-full h-auto"
              />
              <p className="mt-2 text-center text-sm">{movie.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
