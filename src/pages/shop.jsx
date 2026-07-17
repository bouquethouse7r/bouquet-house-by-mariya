import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Rose", "Bouquet", "Love", "Special"];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-10">
        Our Bouquets
      </h1>

      {/* Search Box */}
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="🔍 Search Bouquet..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-2 border-pink-300 rounded-full px-6 py-4 outline-none focus:border-pink-600"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-6 py-2 rounded-full font-semibold duration-300 ${
              category === item
                ? "bg-pink-600 text-white"
                : "bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Product Count */}
      <p className="text-center text-gray-500 mb-8">
        {filteredProducts.length} Products Found
      </p>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-pink-600">
            No Product Found 😔
          </h2>
          <p className="text-gray-500 mt-3">
            Try another search or category.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default Shop;