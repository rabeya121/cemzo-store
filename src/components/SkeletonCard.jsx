export default function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="sk sk-img" />
      <div className="sk-body">
        <div className="sk sk-tag" />
        <div className="sk sk-title" />
        <div className="sk sk-title short" />
        <div className="sk sk-stars" />
        <div className="sk sk-footer">
          <div className="sk sk-price" />
          <div className="sk sk-btn" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="product-grid">
      {Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
