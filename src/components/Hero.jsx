import { Link } from "react-router-dom";
import love from "../assets/products/love.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">

      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-pink-300 opacity-25 blur-3xl rounded-full"></div>

      <div className="absolute top-40 -right-32 w-[500px] h-[500px] bg-rose-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-fuchsia-300 opacity-20 blur-3xl rounded-full"></div>

      {/* Small Floating Circles */}
      <div className="absolute top-20 left-1/4 w-8 h-8 bg-pink-300 rounded-full opacity-40 animate-pulse"></div>

      <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-rose-400 rounded-full opacity-50 animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg mb-8">
              🌸 Welcome To Bouquet House By Mariya
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-800">

              Handmade

              <span className="block bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">

                Artificial Flowers

              </span>

              Bouquet Collection

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-9 max-w-xl">

              Discover elegant handmade artificial flower bouquets crafted
              with love. Perfect for birthdays, anniversaries, weddings,
              surprises and every unforgettable moment.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/shop"
                className="px-10 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold shadow-[0_10px_35px_rgba(236,72,153,0.4)] hover:scale-105 duration-300"
              >
                🛍 Shop Now
              </Link>

              <a
                href="https://wa.me/8801764089926"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 rounded-full bg-white border-2 border-green-500 text-green-600 hover:bg-green-600 hover:text-white font-bold shadow-lg hover:scale-105 duration-300"
              >
                💬 WhatsApp Order
              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-16">

              <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-4xl font-black text-pink-600">
                  100+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Customers
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-4xl font-black text-pink-600">
                  8+
                </h2>

                <p className="text-gray-500 mt-2">
                  Premium Designs
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-xl p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-4xl font-black text-pink-600">
                  24/7
                </h2>

                <p className="text-gray-500 mt-2">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-pink-400 blur-[120px] opacity-30 rounded-full"></div>

              <img
                src={love}
                alt="Love Bouquet"
                className="relative w-full max-w-xl rounded-[40px] border-[10px] border-white shadow-[0_25px_80px_rgba(236,72,153,0.25)] hover:scale-105 duration-500"
              />

              {/* Floating Card */}

              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-5">

                <p className="font-bold text-pink-600 text-lg">
                  🚚 Fast Delivery
                </p>

                <p className="text-gray-500">
                  Dhaka & All Bangladesh
                </p>

              </div>

              <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl px-6 py-5">

                <p className="font-bold text-yellow-500 text-lg">
                  ⭐ Premium Quality
                </p>

                <p className="text-gray-500">
                  Handmade With Love
                </p>

              </div>

              <div className="absolute top-1/2 -right-10 bg-white rounded-full shadow-xl w-20 h-20 flex items-center justify-center text-4xl animate-bounce">

                🌸

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;