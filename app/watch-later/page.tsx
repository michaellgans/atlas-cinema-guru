// Watch-Later
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
  const [toWatchLater, setToWatchLater] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(9);

  // Pull All Watch-Laters
  useEffect(() => {
    const pullAllWatchLaters = async () => {
      try {
        const response = await fetch("/api/watch-later?page=" + currentPage + "&minYear=2000&maxYear=2024&genres=Romance,Horror,Drama,Action,Mystery,Fantasy,Thriller,Western,Sci-Fi,Adventure");
        if (!response.ok) {
          throw new Error("Failed to fetch movies from watch-later");
        }
        const data = await response.json();

        if (Array.isArray(data.watchLater)) {
          setToWatchLater(data.watchLater);
          setTotalPages(9);
        } else {
          console.error("Unexpected data structure", data);
        }
        console.log(data.watchLater);
      } catch (error) {
        console.log(error);
      }
    };

    pullAllWatchLaters();
  }, [currentPage]);

  return (
    <div className="flex w-full flex-col">
      <h2 className="flex justify-center py-14 font-black font-poppins text-6xl">Watch Later</h2>

      {/* MOVIE CARDS CONTAINER */}
      <div className="flex flex-wrap justify-evenly">
        {toWatchLater.length > 0 ? (
          toWatchLater.map((toWatch) => (
            <MovieCard 
              key={toWatch.id}
              id={toWatch.id}
              title={toWatch.title}
              date={toWatch.released}
              description={toWatch.synopsis || "No description yet!"}
              genre={toWatch.genre}
              image={toWatch.image}
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
