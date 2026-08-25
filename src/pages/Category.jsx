import React from "react";
import cakes from "../data/cakes.json";
import { useParams } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";

function Category() {
  // get the URL
  const { categoryPath } = useParams();
  //filter the cakes that belong to that category
  const filteredCakes = cakes.filter((cake) => cake.category === categoryPath);

  const heading = categoryPath
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-heading text-center mb-5">
        {heading}
      </h1>

      {filteredCakes.length === 0 ? (
        <p className="text-center text-muted">
          No cakes found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCakes.map((cake) => (
            <ProductCard key={cake.id} product={cake} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
