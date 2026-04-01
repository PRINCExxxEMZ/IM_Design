import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const API_KEY = "0888aa94c83d0b4b92d1f39c9248bfc4";
const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=0888aa94c83d0b4b92d1f39c9248bfc4`;

export default function MovieApp() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#141e30] to-[#243b55] text-white px-6 py-10">
    <div className="mt-[250px] mb-[100px]">
      <h1 className="text-4xl font-bold text-center mb-8 hover:cursor-default"><span className="animate-pulse hover:cursor-pointer active:animate-spin">🎬</span> MovieVerse</h1>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-900 w-[100%] h-[40px] rounded-md pl-4 text-white placeholder-gray-400 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
 </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((movie) => (
          <motion.div
            key={movie.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 truncate">{movie.title}</h2>
              <p className="text-sm text-gray-400 line-clamp-2">
                {movie.overview || "No description available."}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ⭐ {movie.vote_average} | {movie.release_date?.slice(0, 4)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
