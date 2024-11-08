// Pagination Component

// Types
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

// Returns a Pagination Component
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  // Pagination Functions
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="text-poppins mr-3 w-32 rounded-l-full bg-lumi-teal p-4 text-lumi-navy hover:bg-lumi-dark-teal"
      >
        Previous
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === 9}
        className="text-poppins w-32 rounded-r-full bg-lumi-teal p-4 text-lumi-navy hover:bg-lumi-dark-teal"
      >
        Next
      </button>
    </div>
  );
}
