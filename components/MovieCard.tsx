// MovieCard Component

// Asset Imports
import { ClockIcon } from "./ClockIcon";
import { GenreButton } from "./GenreButton";
import { StarIcon } from "./StarIcon";
import Image from "next/image";
import { useState } from "react";

// Script Imports

// Types
type MovieCardProps = {
  id: string;
  title: string;
  date: number;
  description: string;
  genre: string;
  image: string;
};

// Returns a MovieCard Component
export function MovieCard({
  id,
  title,
  date,
  description,
  genre,
  image,
}: MovieCardProps) {
  // Define Hook
  const [isFavorited, setIsFavorited] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  // Adds movie to favorites
  const handleFavorite = async () => {
    if (!id) {
      console.error("Movie ID is undefined");
      return;
    }

    try {
      console.log("The Star has been clicked");
      const method = isFavorited ? "DELETE" : "POST";
      console.log(method);
      const response = await fetch(`/api/favorites/${id}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsFavorited((prev) => !prev);
      } else {
        const errorMessage = await response.text();
        console.error("Could not add to favorites:", errorMessage);
      }
    } catch (error) {
      console.error("Favorite Error", error);
    }
  };

  // Adds movie to Watch Laters
  const handleWatchLaters = async () => {
    if (!id) {
      console.error("Movie ID is undefined");
      return;
    }

    try {
      console.log("The ClockIcon has been clicked");
      const method = isWatchLater ? "DELETE" : "POST";
      console.log(method);
      const response = await fetch(`/api/watch-later/${id}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("Response Status:", response.status);
        const errorMessage = await response.text();
        console.error("Could not add to watch later:", errorMessage);
      }

      if (response.ok) {
        setIsWatchLater((prev) => !prev);
      } else {
        const errorMessage = await response.text();
        console.error("Could not add to watch later:", errorMessage);
      }
    } catch (error) {
      console.error("Watch Later Error", error);
    }
  };

  return (
    // MOVIE CARD
    <div className="group relative mb-14 flex h-[400px] w-[400px] flex-col overflow-hidden rounded-lg border-2 border-lumi-teal">
      <div className="absolute -inset-1 -z-10">
        <Image
          src={image}
          alt={`The cover of the movie ${title}`}
          width={400}
          height={400}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-end p-4">
        <div className="pr-3">
          <StarIcon
            onClick={handleFavorite}
            className={`cursor-pointer ${isFavorited ? "text-lumi-teal" : "text-white"}`}
          />
        </div>
        <ClockIcon
          onClick={handleWatchLaters}
          className={`cursor-pointer ${isWatchLater ? "text-lumi-teal" : "text-white"}`}
        />
      </div>
      <div className="flex-grow"></div>
      <div className="flex h-[148px] w-full translate-y-full transform flex-col justify-evenly rounded-b-lg bg-lumi-navy2 p-4 transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-lg">
          {title} ({date})
        </p>
        <p className="pb-2">{description}</p>
        <div className="flex justify-start">
          <GenreButton
            genre={genre}
            className="pointer-events-none w-auto bg-lumi-dark-teal"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
