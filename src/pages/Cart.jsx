import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cakes from "../data/cakes.json";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const cartDetails = cartItems
    .map((item) => {
      const cake = cakes.find((cake) => cake.id === item.id);

      return cake ? { ...cake, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const subtotal = cartDetails.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  return (
    <div className="min-h-[60vh] max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold text-heading mb-4 text-center">
        Your Cart
      </h1>

      {cartDetails.length === 0 ? (
        <p className="text-muted text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartDetails.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div>
                <h2 className="font-semibold text-heading">{item.name}</h2>

                <p className="text-muted">
                  Rs. {Number(item.price).toFixed(2)} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-primary hover:opacity-80 transition-colors"
                aria-label={`Remove ${item.name} from cart`}
              >
                <FaTrash size={16} />
              </button>
            </div>
          ))}

          <div className="flex justify-between pt-4 text-lg font-semibold">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
