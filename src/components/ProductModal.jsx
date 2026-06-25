import { useEffect } from "react";
import { X } from "lucide-react";
import { useProducts } from "../context/ProductContext";
import StarRating from "./StarRating";

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct } = useProducts();

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSelectedProduct(null); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const p = selectedProduct;

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
          <X size={20} />
        </button>
        <div className="modal-inner">
          <div className="modal-img-wrap">
            <img src={p.image} alt={p.title} className="modal-img" />
          </div>
          <div className="modal-content">
            <span className="card-category">{p.category}</span>
            <h2 className="modal-title">{p.title}</h2>
            <StarRating rate={p.rating.rate} count={p.rating.count} />
            <p className="modal-desc">{p.description}</p>
            <div className="modal-footer">
              <span className="modal-price">${p.price.toFixed(2)}</span>
              <button className="btn-add">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
