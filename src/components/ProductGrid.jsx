import { products } from "../data/products"
import ProductCard from "./ProductCard"

function ProductGrid({ onAddToCart }) {

  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductGrid