// Homepage
"use client"

// Imports
import { MovieCard } from "@/components/MovieCard";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/Pagination";

// Types
type Movie = {
  favorited: boolean;
  watchLater: boolean;
  image: string;
  id: string;
  title: string;
  released: number;
  genre: string;
  synopsis: string;
};

export default function Page() {
  // Hooks
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);

  // Pull All Favorites
  useEffect(() => {
    const pullAllFavorites = async () => {
      try {
        const response = await fetch("/api/favorites?page=" + currentPage + "&minYear=2000&maxYear=2024&genres=Romance,Horror,Drama,Action,Mystery,Fantasy,Thriller,Western,Sci-Fi,Adventure");
        if (!response.ok) {
          throw new Error("Failed to fetch movies from favorites");
        }
        const data = await response.json();

        if (Array.isArray(data.favorites)) {
          setFavorites(data.favorites);
          setTotalPages(9);
        } else {
          console.error("Unexpected data structure", data);
        }
        console.log(data.favorites);
      } catch (error) {
        console.log(error);
      }
    };

    pullAllFavorites();
  }, [currentPage]);

  return (
    <div className="flex w-full flex-col">
      <h2 className="flex justify-center py-14 font-black font-poppins text-6xl">Favorites</h2>

      {/* MOVIE CARDS CONTAINER */}
      <div className="flex flex-wrap justify-evenly">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <MovieCard 
              key={favorite.id}
              id={favorite.id}
              title={favorite.title}
              date={favorite.released}
              description={favorite.synopsis || "No description yet!"}
              genre={favorite.genre}
              image={favorite.image}
            />
          ))
        ) : (
          <h1>Loading!</h1>
        )}
      </div>

      <div className="flex justify-center pb-9">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
