import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-pink-600 font-bold"
      : "text-gray-700 hover:text-pink-600";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-pink-100 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl shadow-lg">
            🌸
          </div>

          <div>

            <h1 className="text-2xl font-black text-gray-800">
              Bouquet House
            </h1>

            <p className="text-sm text-pink-600 font-semibold">
              By Mariya
            </p>

          </div>

        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-8">

          <Link
            to="/"
            className={`${isActive("/")} duration-300`}
          >
            Home
          </Link>

          <Link
            to="/shop"
            className={`${isActive("/shop")} duration-300`}
          >
            Shop
          </Link>

          <Link
            to="/wishlist"
            className={`relative ${isActive("/wishlist")} duration-300`}
          >
            ❤️ Wishlist

            {wishlist.length > 0 && (

              <span className="absolute -top-3 -right-5 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {wishlist.length}

              </span>

            )}

          </Link>

          <Link
            to="/cart"
            className="relative bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg duration-300"
          >
            🛒 Cart

            {cart.length > 0 && (

              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold">

                {cart.length}

              </span>

            )}

          </Link>

          <a
            href="https://wa.me/8801764089926"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg duration-300"
          >
            💬 WhatsApp
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-4xl text-pink-600"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-white border-t border-pink-100 shadow-xl">

          <div className="flex flex-col gap-5 p-6">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={isActive("/")}
            >
              🏠 Home
            </Link>

            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className={isActive("/shop")}
            >
              🌸 Shop
            </Link>

            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className={isActive("/wishlist")}
            >
              ❤️ Wishlist ({wishlist.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className={isActive("/cart")}
            >
              🛒 Cart ({cart.length})
            </Link>

            <a
              href="https://wa.me/8801764089926"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white text-center py-3 rounded-full"
            >
              💬 WhatsApp Order
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;