import React from "react";
import { PiButterflyDuotone } from "react-icons/pi";

function Hero() {
  return (
    <section className="relative min-h-[600px] w-full  overflow-hidden bg-cream py-12">
      <div className="mx-auto grid grid-cols-1 -translate-y-6 max-w-5xl items-center md:grid-cols-2">
        {/* Left Content */}
        <div className="text-center items-center md:text-left">
          <h1 className="text-heading text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Your Favorite
            <span
              className="block text-primary  text-8xl"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              Cakes which is
            </span>
            <span className="block text-heading">Freshly Baked</span>
          </h1>

          <p className="mt-6 text-muted text-xl">
            Freshly baked with the finest ingredients and crafted with love to
            make every moment sweeter.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row ">
            <button className="rounded-full bg-primary hover:bg-primary-dark text-white px-6 py-3 font-medium ">
              Browse Our Menu
            </button>
          </div>
        </div>

        {/* hero center img */}
        <div className="flex justify-center -translate-y-6 md:translate-x-8 lg:translate-x-16">
          <img
            src={`${import.meta.env.BASE_URL}cake_hero.png`}
            className="w-full max-w-sm object-contain scale-105 drop-shadow-2xl transition-all duration-500 -rotate-5"
          />

          <span className="absolute top-0 left-8 text-2xl text-primary sm:text-3xl animate-bounce">
            <PiButterflyDuotone />
          </span>
          <span className="absolute top-12 right-4 text-2xl text-primary sm:text-2xl animate-bounce">
            <PiButterflyDuotone />
          </span>

          <span className="absolute bottom-10 left-0 text-2xl text-primary animate-bounce">
            <PiButterflyDuotone />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
