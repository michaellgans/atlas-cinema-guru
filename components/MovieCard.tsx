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
  date: string;
  description: string;
  genre: string;
};

// Returns a MovieCard Component
export function MovieCard({ title, date, description, genre }: MovieCardProps) {
  // Define Hook
  return (
    // MOVIE CARD
    <div className="relative flex h-[400px] w-[400px] flex-col rounded-lg border-2 border-lumi-teal">
      <div className="absolute -z-10">
        <Image
          src={placeholder}
          alt={`The cover of the movie ${title}`}
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
      <div className="flex h-[148px] w-full flex-col justify-evenly rounded-b-lg bg-lumi-navy2 p-4">
        <p className="text-lg">
          {title} ({date})
        </p>
        <p className="pb-2">{description}</p>
        <div className="flex justify-start">
          <GenreButton genre={genre} className="w-auto bg-lumi-dark-teal" />
        </div>
      </div>
    </div>
  );
}
