// MovieCard Component

// Asset Imports

// Script Imports

// Types
type MovieCardProps = {
  title: string;
  date: number;
  description: string;
  genre: string;
};

// Returns a MovieCard Component
export function MovieCard({ title, date, description, genre }: MovieCardProps) {
  // Define Hook
  return (
    // MOVIE CARD
    <div className="h-[400px] w-[400px] rounded-lg border-2 border-lumi-teal"></div>
  );
}
