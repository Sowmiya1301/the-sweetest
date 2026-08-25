import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { HiBars3, HiXMark } from "react-icons/hi2";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `text-sm font-medium hover:text-primary transition-colors ${
      isActive ? "text-primary" : "text-body"
    }`;

  return (
    <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="flex items-center justify-between gap-1 text-primary font-bold text-lg"
        >
          <span className="logo-font">Sugar Crush</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/cakes" className={linkStyle}>
            Cakes
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-surface shadow-md flex flex-col gap-4 p-4 text-body">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/cakes"
              className={linkStyle}
              onClick={() => setIsMenuOpen(false)}
            >
              Cakes
            </NavLink>
          </div>
        )}

        {/* Favorites and cart */}
        <div className="flex items-center gap-5">
          <NavLink to="/favorites">
            {({ isActive }) => (
              <FaHeart
                className={isActive ? "text-primary" : "text-body"}
                size={18}
              />
            )}
          </NavLink>

          <NavLink to="/cart">
            {({ isActive }) => (
              <FaShoppingBag
                className={isActive ? "text-primary" : "text-body"}
                size={18}
              />
            )}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
