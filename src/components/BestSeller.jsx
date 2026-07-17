import products from "../data/products";
import ProductCard from "./ProductCard";

function BestSeller() {

  const bestProducts = products.slice(0, 4);


  return (

    <section className="py-20 bg-pink-50">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">

          <span className="bg-yellow-100 text-yellow-600 px-5 py-2 rounded-full font-semibold">
            ⭐ Customer Favorite
          </span>


          <h2 className="text-5xl font-bold text-gray-800 mt-6">
            Best Seller
          </h2>


          <p className="text-gray-500 mt-4 text-lg">
            Our most loved artificial flower bouquets.
          </p>


        </div>



        <div className="grid md:grid-cols-4 gap-8">

          {
            bestProducts.map((product)=>(
              
              <ProductCard
                key={product.id}
                product={product}
              />

            ))
          }

        </div>


      </div>


    </section>

  );
}


export default BestSeller;