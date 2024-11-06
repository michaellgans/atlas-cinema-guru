// Homepage
"use client"

// Imports
import { GenreButton } from "@/components/GenreButton";
import { MovieCard } from "@/components/MovieCard";
import { useEffect, useState } from "react";
import { fetchTitles } from "@/lib/data";

// Types
type Movie = {
  favorited: boolean;
  watchLater: boolean;
  image: string;
  id: string;
  title: string;
  released: number;
  genre: string;
  // Need to find misspelling
  synposis: string;
};

export default async function Page() {
  // Hooks
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const userEmail = "michaellgans@hotamail.com";

  // Pull All Movies
  const pullAllMovies = async () => {
    try {
      const genres = selectedGenres.length ? selectedGenres : ["Romance", "Horror", "Thriller"];
      const fetchedMovies = await fetchTitles(
        currentPage,
        minYear,
        maxYear,
        searchInput,
        genres,
        userEmail
      );
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pullAllMovies();
  }, [searchInput, minYear, maxYear, selectedGenres, currentPage]);

  return (
    <div className="flex h-screen w-full flex-col">
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
                onChange={(event) => setMinYear(Number(event.target.value))}
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
                onChange={(event) => setMaxYear(Number(event.target.value))}
              />
            </div>
          </div>
        </div>
        {/* GENRES */}
        <div className="flex flex-col">
          <h5>Genres</h5>
          <div className="flex flex-col p-1">
            <div className="m-1">
              <GenreButton genre="Romance" onClick={() => setSelectedGenres([...selectedGenres, "Romance"])} />
              <GenreButton genre="Horror" onClick={() => setSelectedGenres([...selectedGenres, "Horror"])}/>
              <GenreButton genre="Drama" onClick={() => setSelectedGenres([...selectedGenres, "Drama"])}/>
              <GenreButton genre="Action"  onClick={() => setSelectedGenres([...selectedGenres, "Action"])}/>
              <GenreButton genre="Mystery"  onClick={() => setSelectedGenres([...selectedGenres, "Mystery"])}/>
            </div>
            <div className="m-1">
              <GenreButton genre="Fantasy"  onClick={() => setSelectedGenres([...selectedGenres, "Fantasy"])}/>
              <GenreButton genre="Thriller"  onClick={() => setSelectedGenres([...selectedGenres, "Thriller"])}/>
              <GenreButton genre="Western"  onClick={() => setSelectedGenres([...selectedGenres, "Western"])}/>
              <GenreButton genre="Sci-Fi"  onClick={() => setSelectedGenres([...selectedGenres, "Sci-Fi"])}/>
              <GenreButton genre="Adventure"  onClick={() => setSelectedGenres([...selectedGenres, "Adventure"])}/>
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
              title={movie.title}
              date={movie.released}
              description={movie.description || "No description yet!"}
              genre={movie.genre}
              image={movie.image}
            />
          ))
        ) : (
          <h1>No Movies Found :(</h1>
        )}

        {/* DUMMY CARDS */}
        {/* <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" /> */}
      </div>
    </div>
  );
}
