import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import cakes from "../data/cakes.json";
import ProductCard from "../components/products/ProductCard";

function Favorites() {
  const { favoriteIds } = useContext(FavoritesContext);

  const favoriteCakes = cakes.filter((cake) => favoriteIds.includes(cake.id));
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold text-heading text-center mb-5">
        Favorites
      </h1>

      {favoriteCakes.length === 0 ? (
        <p className="text-center text-muted">No favorite yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteCakes.map((cake) => (
            <ProductCard key={cake.id} product={cake} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
