import { useProducts } from "../context/ProductContext";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Pagination from "../components/Pagination";
import { SkeletonGrid } from "../components/SkeletonCard";
import { AlertCircle, PackageOpen } from "lucide-react";

export default function Home() {
  const { paginated, filtered, loading, error } = useProducts();

  return (
    <main className="main">
      <div className="hero">
        <h1 className="hero-title">Discover Products</h1>
        <p className="hero-sub">Browse our curated collection of top-rated items</p>
      </div>

      <div className="controls">
        <SearchBar />
        <CategoryFilter />
      </div>

      {loading && <SkeletonGrid />}

      {error && (
        <div className="error-state">
          <AlertCircle size={40} />
          <p>{error}</p>
          <button className="btn-retry" onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && paginated.length === 0 && (
        <div className="empty-state">
          <PackageOpen size={48} />
          <p>No products found. Try a different search or category.</p>
        </div>
      )}

      {!loading && !error && paginated.length > 0 && (
        <>
          <p className="result-count">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>
          <div className="product-grid">
            {paginated.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <Pagination />
        </>
      )}

      <ProductModal />
    </main>
  );
}
