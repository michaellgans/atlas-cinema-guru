// Homepage
"use client"

// Imports
import { GenreButton } from "@/components/GenreButton";
import { MovieCard } from "@/components/MovieCard";
import { Pagination } from "@/components/Pagination";
import { useEffect, useState } from "react";

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
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const userEmail = "michaellgans@hotamail.com";

  const pullFilteredMovies = async () => {
    try {
      const params = new URLSearchParams();

      const genres = selectedGenres.length
        ? selectedGenres.join(",")
        : "Romance,Horror,Drama,Action,Mystery,Fantasy,Thriller,Western,Sci-Fi,Adventure";

      params.append("page", currentPage.toString());
      params.append("genres", genres);

      if (searchInput) {
        params.append("query", searchInput);
      }

      if (minYear) {
        params.append("minYear", parseInt(minYear).toString());
      }
      if (maxYear) {
        params.append("maxYear", parseInt(maxYear).toString());
      }

      const response = await fetch(`/api/titles?${params.toString()}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovies(data.title || []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    pullFilteredMovies();
  }, [searchInput, minYear, maxYear, selectedGenres, currentPage]);

  // // Pull all movies
  // useEffect(() => {
  //   const pullAllMovies = async () => {
  //     try {
  //       const response = await fetch("/api/titles?page=1&minYear=2000&maxYear=2024&genres=Romance,Horror,Drama,Action,Mystery,Fantasy,Thriller,Western,Sci-Fi,Adventure");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch movies");
  //       }
  //       const data = await response.json();
  //       setMovies(data.title);
  //       console.log(movies.length);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   pullAllMovies();
  // }, []);

  return (
    <div className="flex w-full flex-col">
      {/* FILTERS */}
      <div className="flex justify-between w-full py-12 px-11">
        {/* SEARCH/MIN/MAX */}
        <div className="flex flex-col">
          <h5>Search</h5>
          {/* SEARCH TITLE OF MOVIE HERE */}
          <input 
            type="text" 
            className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2" 
            placeholder="Search Movies..."
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
           />
          {/* MIN/MAX */}
          <div className="flex justify-between p-1">
            <div>
              <p>
                Min Year
              </p>
              <input 
                type="text" 
                className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2"
                placeholder="ex. 1990"
                value={minYear}
                onChange={(event) => setMinYear(event.target.value)}
              />
            </div>
            <div>
              <p>
                Max Year
              </p>
              <input
                type="text" 
                className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2" 
                placeholder="ex. 2024"
                value={maxYear}
                onChange={(event) => setMaxYear(event.target.value)}
              />
            </div>
          </div>
        </div>
        {/* GENRES */}
        <div className="flex flex-col">
          <h5>Genres</h5>
          <div className="flex flex-col p-1">
            <div className="m-1">
              <GenreButton className={`${selectedGenres.includes("Romance") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Romance" onClick={() => setSelectedGenres([...selectedGenres, "Romance"])} />
              <GenreButton className={`${selectedGenres.includes("Horror") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Horror" onClick={() => setSelectedGenres([...selectedGenres, "Horror"])}/>
              <GenreButton className={`${selectedGenres.includes("Drama") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Drama" onClick={() => setSelectedGenres([...selectedGenres, "Drama"])}/>
              <GenreButton className={`${selectedGenres.includes("Action") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Action"  onClick={() => setSelectedGenres([...selectedGenres, "Action"])}/>
              <GenreButton className={`${selectedGenres.includes("Mystery") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Mystery"  onClick={() => setSelectedGenres([...selectedGenres, "Mystery"])}/>
            </div>
            <div className="m-1">
              <GenreButton className={`${selectedGenres.includes("Fantasy") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Fantasy"  onClick={() => setSelectedGenres([...selectedGenres, "Fantasy"])}/>
              <GenreButton className={`${selectedGenres.includes("Thriller") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Thriller"  onClick={() => setSelectedGenres([...selectedGenres, "Thriller"])}/>
              <GenreButton className={`${selectedGenres.includes("Western") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Western"  onClick={() => setSelectedGenres([...selectedGenres, "Western"])}/>
              <GenreButton className={`${selectedGenres.includes("Sci-Fi") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Sci-Fi"  onClick={() => setSelectedGenres([...selectedGenres, "Sci-Fi"])}/>
              <GenreButton className={`${selectedGenres.includes("Adventure") ? "bg-lumi-dark-teal text-white" : "bg-lumi-navy"}`} genre="Adventure"  onClick={() => setSelectedGenres([...selectedGenres, "Adventure"])}/>
            </div>
          </div>
        </div>
      </div>
      {/* MOVIE CARDS CONTAINER */}
      <div className="flex flex-wrap justify-evenly">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              date={movie.released}
              description={movie.synopsis || "No description yet!"}
              genre={movie.genre}
              image={movie.image}
            />
          ))
        ) : (
          <h1>Loading!</h1>
        )}
      </div>
      <div className="flex justify-center pb-9">
        <Pagination />
      </div>
    </div>
  );
}
