import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import cakes from "../data/cakes.json";
import { CartContext } from "../context/CartContext";

function CakeDetails() {
  const { id } = useParams();

  const cake = cakes.find((c) => c.id === id);

  const weights = ["0.5 Kg", "1 Kg", "1.5 Kg", "2 Kg", "4 Kg"];

  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const { addToCart } = useContext(CartContext);

  if (!cake) {
    return <p>Cake not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Cake image */}
      <img
        src={`${import.meta.env.BASE_URL}${cake.image}`}
        alt={cake.name}
        className="w-full rounded-2xl object-cover"
      />

      {/* Cake details */}
      <div>
        <h1 className="text-heading text-3xl font-bold">{cake.name}</h1>

        <p className="text-primary text-2xl font-bold mt-2">
          Rs. {cake.price.toFixed(2)}
        </p>

        <p className="text-muted mt-4 leading-7">{cake.description}</p>

        {/* Weight */}
        <div className="mt-6 flex gap-3 flex-wrap">
          {weights.map((weight) => (
            <button
              type="button"
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={
                selectedWeight === weight
                  ? "bg-primary text-white px-4 py-2 rounded-lg"
                  : "bg-surface text-body px-4 py-2 rounded-lg"
              }
            >
              {weight}
            </button>
          ))}
        </div>

        <button
          onClick={() => addToCart(cake.id)}
          className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default CakeDetails;
