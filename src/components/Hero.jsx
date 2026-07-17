import { Link } from "react-router-dom";
import love from "../assets/products/love.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-72 h-72 md:w-[450px] md:h-[450px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute top-40 -right-24 md:-right-32 w-72 h-72 md:w-[500px] md:h-[500px] bg-rose-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 md:w-[350px] md:h-[350px] bg-fuchsia-300 opacity-20 blur-3xl rounded-full"></div>

      {/* Floating Decorations */}

      <div className="absolute top-16 left-8 text-2xl animate-bounce">
        🌸
      </div>

      <div className="absolute top-32 right-10 text-xl animate-pulse">
        💖
      </div>

      <div className="absolute bottom-24 left-10 text-xl animate-bounce">
        🌷
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-12 md:pt-12 md:pb-20">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-pink-200 text-pink-600 px-5 py-2 rounded-full font-semibold shadow-lg text-sm md:text-base mb-4">
              🌸 Welcome To Bouquet House By Mariya
            </span>

            <h1 className="mt-6 font-black leading-tight text-gray-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">

              Handmade

              <span className="block bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">

                Artificial Flowers

              </span>

              Bouquet Collection

            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl mx-auto lg:mx-0">

              Surprise your loved ones with elegant handmade artificial flower bouquets. Crafted with love for birthdays, anniversaries, weddings and every unforgettable moment.

            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                to="/shop"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 duration-300"
              >
                🛍 Shop Now
              </Link>

              <a
                href="https://wa.me/8801764089926"
                target="_blank"
                rel="noreferrer"
                className="bg-white border-2 border-green-500 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 duration-300"
              >
                💬 WhatsApp Order
              </a>

            </div>
                        {/* Stats */}

            <div className="grid grid-cols-3 gap-3 md:gap-5 mt-10">

              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-2xl md:text-4xl font-black text-pink-600">
                  100+
                </h2>

                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Happy Customers
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-2xl md:text-4xl font-black text-pink-600">
                  8+
                </h2>

                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Premium Designs
                </p>

              </div>

              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 md:p-6 text-center hover:-translate-y-2 duration-300">

                <h2 className="text-2xl md:text-4xl font-black text-pink-600">
                  24/7
                </h2>

                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative w-full max-w-md lg:max-w-xl">

              <div className="absolute inset-0 bg-pink-400 blur-[100px] opacity-30 rounded-full"></div>

              <img
                src={love}
                alt="Love Bouquet"
                className="relative w-full rounded-[30px] md:rounded-[40px] border-4 md:border-[10px] border-white shadow-[0_25px_80px_rgba(236,72,153,0.25)] hover:scale-105 duration-500"
              />

              {/* Premium Quality */}

              <div className="absolute top-4 md:-top-6 right-4 md:-right-6 bg-white rounded-2xl shadow-2xl px-4 py-3">

                <p className="font-bold text-yellow-500 text-sm md:text-lg">
                  ⭐ Premium
                </p>

                <p className="text-xs md:text-sm text-gray-500">
                  Handmade
                </p>

              </div>

              {/* Delivery */}

              <div className="absolute bottom-4 md:-bottom-6 left-4 md:-left-6 bg-white rounded-2xl shadow-2xl px-4 py-3">

                <p className="font-bold text-pink-600 text-sm md:text-lg">
                  🚚 Fast Delivery
                </p>

                <p className="text-xs md:text-sm text-gray-500">
                  All Bangladesh
                </p>

              </div>

              {/* Flower */}

              <div className="hidden md:flex absolute top-1/2 -right-8 bg-white rounded-full shadow-xl w-16 h-16 items-center justify-center text-3xl animate-bounce">

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