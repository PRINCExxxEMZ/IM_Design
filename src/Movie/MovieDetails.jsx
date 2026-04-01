import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_KEY = "0888aa94c83d0b4b92d1f39c9248bfc4";

export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = search
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search)}`
          : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
        
        const res = await fetch(endpoint);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };

    // Add debouncing to avoid too many API calls
    const timeoutId = setTimeout(fetchMovies, 300);
    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white px-6 py-10">
      <div className="mt-[250px] mb-[100px]">
        <h1 className="text-4xl font-bold text-center mb-8 hover:cursor-default">
          <span className="hover:cursor-pointer animate-pulse hover:animate-ping">🎬</span> MovieVerse
        </h1>

        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search movies..."
            className="bg-gray-900 w-full h-12 rounded-md pl-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750/374151/ffffff?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 truncate">
                {movie.title}
              </h2>
              <p className="text-sm text-gray-400 line-clamp-2">
                {movie.overview || "No description available."}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ⭐ {movie.vote_average?.toFixed(1) || "N/A"} | {movie.release_date?.slice(0, 4) || "N/A"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {movies.length === 0 && search && (
        <div className="text-center text-gray-400 mt-10">
          <p>No movies found for "{search}"</p>
        </div>
      )}

      {/* MODAL */}
      <AnimatePresence>
        {selectedMovie && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMovie(null)}
          >
            <motion.div
              className="bg-white text-black rounded-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-xl font-bold bg-black py-2 border-4 border-white px-4 items-center text-center rounded-full text-white hover:border-blue-500 transition-colors"
                onClick={() => setSelectedMovie(null)}
              >
                ×
              </button>
              <img
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                    : "https://via.placeholder.com/500x750/374151/ffffff?text=No+Image"
                }
                alt={selectedMovie.title}
                className="rounded mb-4 w-full h-72 object-cover"
              />

              <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
              <p className="text-sm text-gray-500 my-2">
                ⭐ {selectedMovie.vote_average?.toFixed(1) || "N/A"} | {selectedMovie.release_date?.slice(0, 4) || "N/A"} | {selectedMovie.adult ? "18+" : "All Ages"}
              </p>

              <p className="text-sm text-gray-700 mb-2">
                {selectedMovie.overview || "No overview available."}
              </p>

              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Number of Votes:</span> {selectedMovie.vote_count || "No Record."}
              </p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Release Date:</span> {selectedMovie.release_date || "Unknown"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}