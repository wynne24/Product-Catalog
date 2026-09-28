
function CartPanel({ cart }) {
  
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          <h1>Your cart</h1>

          {cart.map((c) => (
            <div key={c.id}>
              <p>{`${c.name}: $${c.price}`}</p>
              <div className="quantity-btn">
                <button>-</button>
                {c.quantity}
                <button>+</button>
              </div>
              <p>${(c.price * c.quantity).toFixed(2)}</p>
            </div>
          ))}
          <p>{`Total: $${total.toFixed(2)}`}</p>
        </div>
      ) : <p>Your cart is empty, looking for something?</p>}
    </>
  );
}

export default CartPanel