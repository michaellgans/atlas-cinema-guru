// GenreButton Component

// Asset Imports

// Script Imports

// Types
type GenreButtonProps = {
  genre: string;
};

// Returns a GenreButton Component
export function GenreButton({ genre }: GenreButtonProps) {
  // Define Hook
  return (
    <button className="h-9 rounded-full border-2 border-lumi-teal px-3">
      {genre}
    </button>
  );
}