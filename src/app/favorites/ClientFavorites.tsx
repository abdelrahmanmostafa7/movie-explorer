"use client";

import { useFavoriteStore } from "@/store/favoriteStore";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Movie } from "@/types/types";
import { fetchMovieById } from "@/lib/fetchMovieById";

export default function ClientFavorites() {
  const { favorites } = useFavoriteStore();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const results = await Promise.all(
          favorites.map((id) => fetchMovieById(id))
        );
        setMovies(results);
      } catch (err) {
        console.error("Failed to load favorites:", err);
      } finally {
        setLoading(false);
      }
    }

    if (favorites.length > 0) {
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [favorites]);

  if (loading) return <p>Loading favorites...</p>;

  if (!movies.length)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        You have no favorite movies yet.
      </p>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Card key={movie.id} result={movie} />
      ))}
    </div>
  );
}
