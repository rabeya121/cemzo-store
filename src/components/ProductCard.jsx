import { useProducts } from "../context/ProductContext";
import StarRating from "./StarRating";
import { truncate } from "../utils/helpers";

export default function ProductCard({ product }) {
  const { setSelectedProduct } = useProducts();

  return (
    <div className="product-card" onClick={() => setSelectedProduct(product)}>
      <div className="card-img-wrap">
        <img src={product.image} alt={product.title} className="card-img" />
      </div>
      <div className="card-body">
        <span className="card-category">{product.category}</span>
        <h3 className="card-title">{truncate(product.title, 50)}</h3>
        <StarRating rate={product.rating.rate} count={product.rating.count} />
        <div className="card-footer">
          <span className="card-price">${product.price.toFixed(2)}</span>
          <button className="btn-view">View Details</button>
        </div>
      </div>
    </div>
  );
}
