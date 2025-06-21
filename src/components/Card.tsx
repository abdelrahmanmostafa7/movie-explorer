"use client";

import Link from "next/link";
import Image from "next/image";
import { Movie } from "../types/types";

import { useFavoriteStore } from "@/store/favoriteStore";
type Props = {
  result: Movie;
};

export default function MovieCard({ result }: Props) {
  // نفس الفكرة اللى طبقتها ف ال store هاجى هنا اشوف هى ف fav ولى لا
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const movieId = Number(result.id);
  const isFav = favorites.includes(movieId);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFav) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 overflow-hidden">
      <Link href={`/movie/${result.id}`}>
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${
              result.poster_path || result.backdrop_path
            }`}
            alt={result.title || result.name || "Movie image"}
            className="w-full h-72 object-cover group-hover:opacity-75 transition-opacity duration-300"
            width={300}
            height={400}
            unoptimized
            loading="eager"
          />
        </div>

        <div className="p-3 space-y-2 bg-black-900">
          <h2 className="font-semibold text-md truncate">
            {result.title || result.name}
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {result.overview}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-300">
            <span>⭐ {result.vote_average?.toFixed(1) ?? "Not Available"}</span>
            <button onClick={toggle} className="text-xl cursor-pointer">
              {isFav ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
