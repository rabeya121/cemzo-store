import { useProducts } from "../context/ProductContext";

export default function CategoryFilter() {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();

  const labels = {
    all: "All",
    "men's clothing": "Men",
    "women's clothing": "Women",
    electronics: "Electronics",
    jewelery: "Jewelry",
  };

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cat-tab ${selectedCategory === cat ? "active" : ""}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {labels[cat] || cat}
        </button>
      ))}
    </div>
  );
}
