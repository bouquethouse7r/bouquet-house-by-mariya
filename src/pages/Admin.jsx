function Admin() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-5xl font-bold text-pink-600 mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-pink-600 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-5xl mt-4">12</p>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Orders</h2>
          <p className="text-5xl mt-4">0</p>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Customers</h2>
          <p className="text-5xl mt-4">0</p>
        </div>

        <div className="bg-yellow-500 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold">Revenue</h2>
          <p className="text-5xl mt-4">৳0</p>
        </div>

      </div>

      <div className="mt-16">

        <button className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition">
          + Add New Bouquet
        </button>

      </div>

    </section>
  );
}

export default Admin;