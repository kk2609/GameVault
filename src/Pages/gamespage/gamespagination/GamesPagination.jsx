import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GamesPagination = ({ currentPage, totalPages, onPageChange }) => {
  // Don't show pagination if only one page
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  // ✅ Guard: ignore clicks on already-active page
  const handlePageClick = (page) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous button */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-xl transition-all duration-300 font-[var(--font-secondary-font)] ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed text-[var(--text-secondary)]"
            : "text-[var(--text-secondary)] hover:bg-brand-primary/10 hover:text-brand-primary"
        }`}
        aria-label="Previous page"
      >
        <FaChevronLeft />
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((num) => (
        <button
          key={num}
          onClick={() => handlePageClick(num)}
          className={`w-10 h-10 rounded-xl text-sm font-medium transition-all duration-300 font-[var(--font-primary-font)] ${
            currentPage === num
              ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30 cursor-default"
              : "text-[var(--text-secondary)] hover:bg-brand-primary/10 hover:text-brand-primary"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Next button */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-xl transition-all duration-300 font-[var(--font-secondary-font)] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed text-[var(--text-secondary)]"
            : "text-[var(--text-secondary)] hover:bg-brand-primary/10 hover:text-brand-primary"
        }`}
        aria-label="Next page"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default GamesPagination;