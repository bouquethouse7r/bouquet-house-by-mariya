import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      product.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-pink-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-rose-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold shadow text-sm md:text-base">
            🌸 Featured Collection
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-800 mt-5 leading-tight">
            Discover Our
            <span className="text-pink-600">
              {" "}Beautiful Bouquets
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-7">
            Handmade artificial flower bouquets crafted with love.
            Perfect for birthdays, anniversaries, weddings and every
            special occasion.
          </p>

        </div>

        {/* Search */}
        <div className="mt-10">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        {/* Category */}
        <div className="mt-6">
          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10 mb-8 gap-4">

          <p className="text-gray-600 font-medium text-sm md:text-base">
            🌸 Showing
            <span className="text-pink-600 font-bold">
              {" "}{filteredProducts.length}
            </span>
            {" "}Bouquets
          </p>

          <Link
            to="/shop"
            className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full shadow-lg text-sm md:text-base duration-300"
          >
            View All Products →
          </Link>

        </div>

        {/* Products */}

        {filteredProducts.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center">

            <div className="text-6xl md:text-7xl mb-6">
              🌸
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              No Bouquet Found
            </h3>

            <p className="mt-4 text-gray-500">
              Try another keyword or choose a different category.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        )}

      </div>
    </section>
  );
}

export default Products;