import toast from "react-hot-toast";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

import products from "../data/products";


function ProductDetails() {

  const { id } = useParams();


  const { addToCart } = useContext(CartContext);

  const { addToWishlist } = useContext(WishlistContext);



  const product = products.find(
    (item) => item.id === Number(id)
  );



  if (!product) {

    return (

      <div className="text-center py-24">

        <h1 className="text-4xl font-bold text-red-500">
          Product Not Found
        </h1>


        <Link
          to="/shop"
          className="inline-block mt-8 bg-pink-600 text-white px-8 py-4 rounded-full"
        >
          Back To Shop
        </Link>


      </div>

    );

  }



  // Related Products

  const relatedProducts = products
    .filter(
      (item) => item.id !== product.id
    )
    .slice(0,4);




  return (

    <section className="bg-pink-50 py-20">


      <div className="max-w-7xl mx-auto px-6">



        <div className="grid lg:grid-cols-2 gap-16 items-center">



          {/* Image */}


          <div className="relative">


            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-[35px] shadow-2xl"
            />



            <div className="absolute top-6 left-6 bg-pink-600 text-white px-5 py-2 rounded-full font-bold">

              NEW

            </div>




            <button

              onClick={() => {

                addToWishlist(product);

                toast.success("Added to wishlist ❤️");

              }}

              className="absolute top-6 right-6 bg-white w-14 h-14 rounded-full shadow-lg text-2xl hover:bg-pink-600 hover:text-white duration-300"

            >

              ❤️

            </button>



          </div>






          {/* Details */}



          <div>



            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">

              {product.category}

            </span>





            <h1 className="text-5xl font-bold mt-6 text-gray-800">

              {product.name}

            </h1>





            <div className="mt-5 text-yellow-500 text-2xl">

              ⭐⭐⭐⭐⭐

              <span className="text-gray-500 text-lg ml-3">

                (5.0 Reviews)

              </span>

            </div>





            <p className="mt-8 text-gray-600 leading-8 text-lg">

              {product.description}

            </p>







            <div className="flex items-center gap-4 mt-8">


              <span className="text-5xl font-bold text-pink-600">

                ৳{product.price}

              </span>



              <span className="text-gray-400 line-through text-2xl">

                ৳{product.price + 200}

              </span>


            </div>









            {/* Delivery Info */}



            <div className="bg-white rounded-3xl shadow-lg p-6 mt-10 space-y-4">


              <p>
                🚚 Dhaka Delivery Charge:
                <b> ৳60</b>
              </p>


              <p>
                🚚 Outside Dhaka:
                <b> ৳150</b>
              </p>


              <p>
                💳 Advance Payment:
                <b> Delivery Charge Only</b>
              </p>


              <p>
                🎁 Free Gift Wrapping Available
              </p>


              <p className="text-green-600 font-bold">

                ✔ In Stock

              </p>


            </div>









            {/* Buttons */}



            <div className="grid sm:grid-cols-2 gap-5 mt-10">





              <button

                onClick={() => {

                  addToCart(product);

                  toast.success("Added to cart 🛒");

                }}

                className="bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-full font-bold text-lg duration-300"

              >

                🛒 Add To Cart

              </button>







              <Link

  to="/checkout"

  state={{ buyNowProduct: product }}

  className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-full font-bold text-lg text-center duration-300"

>

  ⚡ Buy Now

</Link>




            </div>





            <Link

              to="/shop"

              className="inline-block mt-10 text-pink-600 font-bold hover:underline"

            >

              ← Back To Shop

            </Link>




          </div>



        </div>









        {/* You May Also Like */}



        <div className="mt-24">



          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">

            You May Also Like

          </h2>







          <div className="grid md:grid-cols-4 gap-8">



            {
              relatedProducts.map((item)=>(


                <Link

                  key={item.id}

                  to={`/product/${item.id}`}

                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"

                >



                  <img

                    src={item.image}

                    alt={item.name}

                    className="w-full h-64 object-cover"

                  />





                  <div className="p-5">


                    <h3 className="font-bold text-xl">

                      {item.name}

                    </h3>




                    <p className="text-pink-600 font-bold mt-3">

                      ৳{item.price}

                    </p>



                  </div>



                </Link>



              ))
            }





          </div>





        </div>





      </div>



    </section>

  );

}



export default ProductDetails;