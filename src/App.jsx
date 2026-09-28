import { useState, useEffect } from "react"
import { Routes, Route } from "react-router"
import ProductGrid from "./components/ProductGrid"
import Header from "./components/Header"
import CartPanel from "./components/CartPanel"

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function handleAddToCart(product) {
    setCart((c) => {
      const match = c.find((item) => (
        item.id === product.id
      ));

      if (match) {
        return c.map((item) => {
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + 1};
          }
          return item;
        });
      }
      return [...c, {...product, quantity: 1}];
    });
  }

  return (
    <>
      <Header itemQuantity={cart} />

      <Routes>
        <Route 
          path="/" 
          element={
            <ProductGrid 
              onAddToCart={handleAddToCart} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPanel 
              cart={cart}
            />
          } 
        />
      </Routes>
  
    </>
  );
}

export default App
