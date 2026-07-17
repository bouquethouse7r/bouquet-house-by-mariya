import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-500 border border-pink-100">

      {/* Image */}
      <div className="relative overflow-hidden">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 sm:h-60 md:h-80 object-cover group-hover:scale-110 duration-500"
          />
        </Link>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

        {/* New Badge */}
        <div className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow">
          NEW
        </div>

        {/* Wishlist */}
        <button
          onClick={() => {
            addToWishlist(product);
            toast.success("Added to wishlist ❤️");
          }}
          className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-lg md:text-xl hover:bg-pink-600 hover:text-white hover:scale-110 duration-300"
        >
          ❤️
        </button>

        {/* Discount */}
        <div className="absolute bottom-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow">
          Save ৳200
        </div>

      </div>

      {/* Content */}
      <div className="p-4 md:p-6">

        {/* Category */}
        <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
          {product.category}
        </span>

        {/* Product Name */}
        <h2 className="text-lg md:text-2xl font-bold mt-3 text-gray-800 line-clamp-2">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base mt-2 leading-6 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-3 text-yellow-400 text-sm md:text-lg">
          ⭐⭐⭐⭐⭐
          <span className="text-gray-500 text-xs md:text-sm ml-2">
            (5.0)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-4">

          <span className="text-xl md:text-3xl font-extrabold text-pink-600">
            ৳{product.price}
          </span>

          <span className="text-gray-400 line-through text-sm md:text-lg">
            ৳{product.price + 200}
          </span>

        </div>

        {/* Buttons */}
        <div className="mt-5 space-y-3">

          <button
            onClick={() => {
              addToCart(product);
              toast.success("Added to cart 🛒");
            }}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-lg hover:shadow-xl duration-300"
          >
            🛒 Add To Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="block text-center border-2 border-pink-600 text-pink-600 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-pink-600 hover:text-white duration-300"
          >
            👀 View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;