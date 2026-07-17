import products from "../data/products";
import ProductCard from "./ProductCard";

function NewArrival() {

  const newProducts = products.slice(-4);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">

          <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold">
            🆕 New Collection
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-6">
            New Arrival
          </h2>

          <p className="text-gray-500 mt-4">
            Discover our latest handmade artificial flower bouquets.
          </p>

        </div>



        <div className="grid md:grid-cols-4 gap-8">

          {newProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>


      </div>

    </section>
  );
}

export default NewArrival;