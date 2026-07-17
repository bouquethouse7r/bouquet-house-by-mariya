function CategoryFilter({ category, setCategory }) {
  const categories = [
    { name: "All", icon: "🌸" },
    { name: "Rose", icon: "🌹" },
    { name: "Luxury", icon: "💎" },
    { name: "Wedding", icon: "💍" },
    { name: "Love", icon: "❤️" },
    { name: "Lily", icon: "🌼" },
    { name: "Tulip", icon: "🌷" },
  ];

  return (
    <section className="mb-10">

      {/* Heading */}
      <div className="text-center mb-6">

        <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold text-sm shadow">
          🌸 Find Your Favorite
        </span>

        <h2 className="text-2xl md:text-4xl font-black text-gray-800 mt-3">
          Browse Categories
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Choose your favorite bouquet category
        </p>

      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-3 pb-3 scrollbar-hide">

        {categories.map((item) => (

          <button
            key={item.name}
            onClick={() => setCategory(item.name)}
            className={`flex-shrink-0 whitespace-nowrap flex items-center gap-2
            rounded-full font-semibold transition-all duration-300
            px-4 py-2 text-sm
            md:px-6 md:py-3 md:text-base
            ${
              category === item.name
                ? "bg-pink-600 text-white shadow-xl scale-105"
                : "bg-white text-pink-600 border border-pink-200 hover:bg-pink-600 hover:text-white hover:scale-105 shadow"
            }`}
          >
            <span className="text-lg">
              {item.icon}
            </span>

            {item.name}

          </button>

        ))}

      </div>

    </section>
  );
}

export default CategoryFilter;