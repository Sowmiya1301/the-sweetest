import React, { useContext } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { FavoritesContext } from "../../context/FavoritesContext";

function ProductCard({ product }) {
  const { id, name, price, image, bestSeller, available } = product;
  // borrow the shared data - favoriteIds, togglefunction
  const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
  const isFavourite = favoriteIds.includes(id);
  return (
    <div
      className={`relative rounded-lg p-4 shadow-md bg-surface ${!available ? "opacity-50 grayscale" : ""}`}
    >
      <button
        onClick={() => toggleFavorite(id)}
        className="absolute top-6 right-6 bg-surface rounded-full p-2 shadow hover:scale-110 transition"
        aria-label={
          isFavourite ? "Remove from favourites" : "Add to favourites"
        }
      >
        {isFavourite ? (
          <HiHeart className="text-primary text-2xl" />
        ) : (
          <HiOutlineHeart className="text-body text-2xl" />
        )}
      </button>

      {/* image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />
      {/* badge */}
      <div className="mt-2 flex gap-2">
        {bestSeller && (
          <span className="bg-accent-yellow text-body text-xs px-2 py-2 rounded">
            Best Seller
          </span>
        )}
        {!available && (
          <span className="bg-danger text-body text-xs px-2 py-2 rounded">
            Sold Out
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mt-3">{name}</h3>
      {/* Price */}
      <p className="text-primary font-bold">Rs. {price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
