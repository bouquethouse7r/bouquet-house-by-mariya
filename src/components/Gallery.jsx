import products from "../data/products";

function Gallery() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold">
            Our Gallery
          </span>

          <h2 className="text-5xl font-bold mt-5 text-gray-800">
            Beautiful
            <span className="text-pink-600"> Bouquet Collection</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            Every bouquet is handmade with love and designed to make your special moments unforgettable.
          </p>

        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {products.map((product) => (

            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover group-hover:scale-110 duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 duration-500 flex flex-col justify-center items-center">

                <h3 className="text-white text-xl font-bold text-center px-3">
                  {product.name}
                </h3>

                <p className="text-pink-200 mt-2">
                  ৳{product.price}
                </p>

                <button className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold duration-300">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;