"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/lib/apiClient";
import Link from "next/link";
import { Movie } from "@/types/types";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  
  const router = useRouter();
  const [showSuggestions, setShowSuggestions] = useState(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimer) clearTimeout(debounceTimer);
    const timer = setTimeout(() => {
      fetchSuggestions(value);
    }, 500);
    setDebounceTimer(timer);
  };

  const fetchSuggestions = async (searchText: string) => {
    if (!searchText.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await apiClient.get("/search/movie", {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
          query: searchText,
        },
      });
      setSuggestions(response.data.results.slice(0, 5));
    } catch (error) {
      console.error("Error fetching suggestions", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query.trim()}&page=1`);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 150);
          }}
          placeholder="Search movies..."
          className="w-full px-4 py-2 rounded border "
        />
      </form>

      {suggestions.length > 0 && showSuggestions && (
        <ul className="absolute w-full bg-black rounded mt-1 shadow-md z-50">
          {suggestions.map((movie) => (
            <li key={movie.id}>
              <Link
                href={`/movie/${movie.id}`}
                className="block px-4 py-2 hover:bg-red-500 transition "
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
