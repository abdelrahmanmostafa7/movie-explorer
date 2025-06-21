
import React from "react";
import Image from "next/image";
import { fetchMovieById } from "@/lib/fetchMovieById";
import apiClient from "@/lib/apiClient";
import MovieCard from "@/components/Card";
import { Video, CastMember, Review, SimilarMovie, Movie } from "@/types/types";


type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function MovieDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const movieId = resolvedParams.id;

  const [movie, videosRes, creditsRes, reviewsRes, similarRes] =
    await Promise.all([
      fetchMovieById(movieId),
      apiClient.get<{ results: Video[] }>(`/movie/${movieId}/videos`, {
        params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
      }),
      apiClient.get<{ cast: CastMember[] }>(`/movie/${movieId}/credits`, {
        params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
      }),
      apiClient.get<{ results: Review[] }>(`/movie/${movieId}/reviews`, {
        params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
      }),
      apiClient.get<{ results: SimilarMovie[] }>(`/movie/${movieId}/similar`, {
        params: { api_key: process.env.NEXT_PUBLIC_API_KEY },
      }),
    ]);

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
            title="YouTube trailer"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-lg"
            // loading="lazy"
            loading="eager"
          ></iframe>
        </div>
      )}

      {/* Cast List */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cast.map((actor) => (
          <div key={actor.id} className="text-center">
            <Image
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                  : "/placeholder.jpg"
              }
              alt={actor.name}
              width={112}
              height={144}
              className="rounded-lg mx-auto object-cover"
              loading="lazy"
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
      <div className="grid md:grid-cols-3 gap-4">
        {similar
          .filter((m) => m.poster_path || m.backdrop_path)
          .map((movie) => (
            <MovieCard key={movie.id} result={movie as Movie} />
          ))}
      </div>
    </div>
  );
}
