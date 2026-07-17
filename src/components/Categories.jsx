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
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600">
          Shop By Category
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Find the perfect bouquet for every occasion.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
              group
              bg-white
              rounded-[30px]
              overflow-hidden
              shadow-xl
              hover:shadow-pink-300/40
              hover:-translate-y-4
              transition-all
              duration-500
              border border-pink-100
            "
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                "
              />
            </div>

            <div className="p-7 text-center">
              <h3 className="text-3xl font-bold text-gray-800">
                {item.title}
              </h3>

              {item.custom ? (
                <button
                  onClick={() =>
  window.open(
    "https://wa.me/8801764089926?text=Hi! I%20want%20to%20customize%20my%20bouquet.",
    "_blank"
  )
}
                  className="
                    mt-6
                    bg-gradient-to-r
                    from-pink-500
                    to-rose-500
                    hover:from-pink-600
                    hover:to-rose-600
                    text-white
                    px-8
                    py-3
                    rounded-full
                    font-semibold
                    shadow-lg
                    hover:shadow-pink-300
                    transition-all
                    duration-300
                  "
                >
                  {item.button}
                </button>
              ) : (
                <button
                  onClick={() => navigate("/shop")}
                  className="
                    mt-6
                    bg-pink-600
                    hover:bg-pink-700
                    text-white
                    px-8
                    py-3
                    rounded-full
                    font-semibold
                    shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  {item.button}
                </button>
              )}

              <p className="mt-6 text-gray-500 leading-7 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;