// Server Functions
"use server"

// Import
import { fetchTitles } from "@/lib/data";

// Pull All Movies
export const pullAllMovies = async (currentPage: number, minYear: number, maxYear: number, searchInput: string, selectedGenres: string[], userEmail: string) => {
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
        return fetchedMovies;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to pull movies");
    }
};