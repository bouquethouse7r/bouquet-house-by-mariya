import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharge = total >= 2000 ? 0 : 80;

  const grandTotal = total + deliveryCharge;

  return (
    <section className="py-20 px-6 bg-pink-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-12">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl text-gray-500">
            🛒 Your cart is empty
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">

          <div className="space-y-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-2xl object-cover"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-pink-600 text-xl font-semibold mt-2">
                      ৳{item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 font-bold text-xl"
                      >
                        −
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-10 h-10 rounded-full bg-pink-600 text-white hover:bg-pink-700 font-bold text-xl"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

                <div className="text-right">

                  <h3 className="text-2xl font-bold text-pink-600">
                    ৳{item.price * item.quantity}
                  </h3>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-5 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
                  >
                    🗑 Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
              Order Summary
            </h2>

            <div className="flex justify-between text-xl mb-4">
              <span>Subtotal</span>
              <span>৳{total}</span>
            </div>

            <div className="flex justify-between text-xl mb-4">
              <span>Delivery Charge</span>

              {deliveryCharge === 0 ? (
                <span className="text-green-600 font-bold">
                  FREE 🎉
                </span>
              ) : (
                <span>৳{deliveryCharge}</span>
              )}
            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-3xl font-bold text-pink-600">
              <span>Grand Total</span>
              <span>৳{grandTotal}</span>
            </div>

            {deliveryCharge !== 0 && (
              <p className="text-sm text-gray-500 mt-3">
                💡 Spend ৳{2000 - total} more to get FREE delivery.
              </p>
            )}

            <Link
              to="/checkout"
              className="block text-center mt-8 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-full text-xl font-bold duration-300"
            >
              Proceed To Checkout →
            </Link>

          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;