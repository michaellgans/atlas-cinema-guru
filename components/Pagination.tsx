// Pagination Component

// Asset Imports

// Returns a Pagination Component
export function Pagination() {
  // Define Hook
  return (
    <div className="flex items-center">
      <button className="text-poppins mr-3 w-32 rounded-l-full bg-lumi-teal p-4 text-lumi-navy">
        Previous
      </button>
      <button className="text-poppins w-32 rounded-r-full bg-lumi-teal p-4 text-lumi-navy">
        Next
      </button>
    </div>
  );
}
