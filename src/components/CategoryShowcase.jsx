import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import categories from "../data/categories";

function CategoryShowcase() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-body">
              Explore Our Categories
            </h2>

            <p className="text-sm text-body/70 mt-2">
              Find the perfect treat for every occasion.
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              aria-label="Scroll left scrollbar-hide"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              aria-label="Scroll right"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Horizontal category list */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {categories.map((cat) => (
            <div
              key={cat.path}
              className="flex-shrink-0 w-64 bg-surface rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}${cat.image}`}
                alt={cat.label}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-body">{cat.label}</h3>

                <Link
                  to={`/category/${cat.path}`}
                  className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
