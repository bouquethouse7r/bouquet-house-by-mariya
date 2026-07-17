import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-pink-600">
          ❤️ Your Wishlist is Empty
        </h1>

        <p className="mt-4 text-gray-500">
          Save your favorite bouquets here.
        </p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-12">
        My Wishlist
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {wishlist.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-6">

              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-3">
                {product.description}
              </p>

              <h3 className="text-3xl text-pink-600 font-bold mt-5">
                ৳{product.price}
              </h3>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-6 bg-pink-600 text-white py-3 rounded-full"
              >
                Add To Cart
              </button>

              <button
                onClick={() => removeFromWishlist(product.id)}
                className="w-full mt-3 bg-red-500 text-white py-3 rounded-full"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Wishlist;