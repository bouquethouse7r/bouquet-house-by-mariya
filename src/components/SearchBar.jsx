function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-xl mx-auto mb-10">
      <input
        type="text"
        placeholder="🔍 Search bouquet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-pink-300 rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  );
}

export default SearchBar;