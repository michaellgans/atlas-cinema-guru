// GenreButton Component

import { on } from "stream";

// Asset Imports

// Script Imports

// Types
type GenreButtonProps = {
  genre: string;
  className?: string;
  onClick: () => void;
};

// Returns a GenreButton Component
export function GenreButton({ genre, className, onClick }: GenreButtonProps) {
  // Define Hook
  return (
    <button
      className={`h-9 rounded-full border-2 border-lumi-teal px-3 hover:bg-lumi-teal hover:text-lumi-navy active:bg-lumi-dark-teal ${className || ""}`}
      onClick={onClick}
    >
      {genre}
    </button>
  );
}
