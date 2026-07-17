import loveImg from "../assets/categories/love.webp";
import moneyImg from "../assets/categories/money.webp";
import customImg from "../assets/categories/customize.png";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Love Bouquet",
      image: loveImg,
      button: "View Collection",
      description: (
        <>
          Beautiful bouquets made with love.
          <br />
          Perfect for your special moments.
        </>
      ),
      custom: false,
    },
    {
      title: "Money Bouquet",
      image: moneyImg,
      button: "View Collection",
      description: (
        <>
          A luxurious gift for every celebration.
          <br />
          Surprise your loved ones in style.
        </>
      ),
      custom: false,
    },
    {
      title: "Custom Bouquet",
      image: customImg,
      button: "✨ Customize Now",
      description: (
        <>
          Designed exactly your way.
          <br />
          Contact us to create your dream bouquet.
        </>
      ),
      custom: true,
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-pink-50 to-white">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">

        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold shadow">
          🌸 Our Collection
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold text-pink-600">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-lg max-w-xl mx-auto">
          Find the perfect bouquet for every special occasion.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

        {categories.map((item, index) => (

          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-pink-300/40 hover:-translate-y-2 duration-500 border border-pink-100"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 md:h-80 object-cover group-hover:scale-110 duration-700"
              />

            </div>

            {/* Content */}

            <div className="p-5 md:p-7 text-center">

              <h3 className="text-xl md:text-3xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-500 text-sm md:text-base leading-6 md:leading-7">
                {item.description}
              </p>

              {item.custom ? (
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/8801764089926?text=Hi! I want to customize my bouquet.",
                      "_blank"
                    )
                  }
                  className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold shadow-lg hover:scale-105 duration-300"
                >
                  {item.button}
                </button>
              ) : (
                <button
                  onClick={() => navigate("/shop")}
                  className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-semibold shadow-lg hover:scale-105 duration-300"
                >
                  {item.button}
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;