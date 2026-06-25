import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar() {
  const { setSearchQuery } = useProducts();
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 400);

  useEffect(() => {
    setSearchQuery(debounced);
  }, [debounced]);

  return (
    <div className="search-wrap">
      <Search size={16} className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <button className="search-clear" onClick={() => setInput("")}>
          <X size={14} />
        </button>
      )}
    </div>
  );
}
