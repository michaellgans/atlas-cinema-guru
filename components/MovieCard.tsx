// MovieCard Component

// Asset Imports
import { ClockIcon } from "./ClockIcon";
import { GenreButton } from "./GenreButton";
import { StarIcon } from "./StarIcon";
import placeholder from "../assets/placeholder.svg";
import Image from "next/image";

// Script Imports

// Types
type MovieCardProps = {
  title: string;
  date: number;
  description: string;
  genre: string;
  image: string;
};

// Returns a MovieCard Component
export function MovieCard({
  title,
  date,
  description,
  genre,
  image,
}: MovieCardProps) {
  // Define Hook
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
          <StarIcon />
        </div>
        <ClockIcon />
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
