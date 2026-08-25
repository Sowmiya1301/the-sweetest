import React from "react";
import cakes from "../data/cakes.json";
import ProductCard from "../components/products/ProductCard";

function Cakes() {
  return (
    <section className="p-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center mb-8 text-primary sm:text-4xl lg:text-5xl font-bold leading-tight">
          Cakes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cakes.map((cake) => (
            <ProductCard key={cake.id} product={cake} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cakes;
