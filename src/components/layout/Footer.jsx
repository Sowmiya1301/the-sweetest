import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const linkStyle = ({ isActive }) =>
    `text-sm transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted"
    }`;

  return (
    <footer className="bg-cream border-t border-border">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="logo-font text-primary font-bold text-xl">
              Sugar Crush
            </Link>

            <p className="mt-4 text-sm text-muted leading-6 max-w-xs">
              Sweet treats made with love, bringing a little happiness to every
              celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-heading mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <NavLink to="/" className={linkStyle}>
                Home
              </NavLink>

              <NavLink to="/cakes" className={linkStyle}>
                Cakes
              </NavLink>

              <NavLink
                to="/contact"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-heading mb-4">Contact Us</h3>

            <div className="flex flex-col gap-3 text-sm text-muted">
              <p>hello@sugarcrush.com</p>
              <p>+94 77 123 4567</p>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-heading mb-4">Follow Us</h3>

            <p className="text-sm text-muted leading-6 mb-4">
              Follow us for sweet updates, new cakes, and special treats.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-body flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-colors"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-body flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-colors"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-body flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-colors"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-xs text-muted text-center">
            © {new Date().getFullYear()} Sugar Crush. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
