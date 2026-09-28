
function ProductCard({ product, onAddToCart}) {
  return (
    <div className="card">

      <img className="img" src={product.image} alt={product.name} />

      <div className="detail">
        <p className="name">{product.name}</p>
        <p className="price">${product.price}</p>
        <p className="category">{product.category}</p>
      </div>

      <button onClick={() => onAddToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard