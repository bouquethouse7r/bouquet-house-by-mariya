function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Rose",
    "Luxury",
    "Wedding",
    "Love",
    "Lily",
    "Tulip",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-6 py-3 rounded-full transition ${
            category === item
              ? "bg-pink-600 text-white"
              : "bg-pink-100 text-pink-600 hover:bg-pink-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;