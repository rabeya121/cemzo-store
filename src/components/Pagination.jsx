import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "../context/ProductContext";

export default function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useProducts();

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          className={`page-btn ${n === currentPage ? "active" : ""}`}
          onClick={() => setCurrentPage(n)}
        >
          {n}
        </button>
      ))}

      <button
        className="page-btn"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
