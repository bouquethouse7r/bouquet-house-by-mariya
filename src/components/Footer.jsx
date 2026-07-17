import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="bg-gray-900 text-white py-12 mt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">


        {/* Brand */}

        <div>

          <h2 className="text-3xl font-bold text-pink-400">
            Bouquet House By Mariya
          </h2>

          <p className="mt-4 text-gray-400 leading-7">
            Handmade premium artificial flower bouquets
            made with love for your special moments.
          </p>

        </div>



        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Quick Links
          </h3>


          <div className="space-y-3">

            <Link 
              to="/"
              className="block text-gray-400 hover:text-pink-400"
            >
              Home
            </Link>


            <Link 
              to="/shop"
              className="block text-gray-400 hover:text-pink-400"
            >
              Shop
            </Link>


            <Link 
              to="/cart"
              className="block text-gray-400 hover:text-pink-400"
            >
              Cart
            </Link>


            <Link 
              to="/wishlist"
              className="block text-gray-400 hover:text-pink-400"
            >
              Wishlist
            </Link>


          </div>

        </div>



        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Contact
          </h3>


          <p className="text-gray-400">
            📍 Bangladesh
          </p>


          <p className="text-gray-400 mt-3">
            📞 01312136520
          </p>


          <p className="text-gray-400 mt-3">
            💬 WhatsApp Available
          </p>


        </div>



        {/* Social */}

        <div>

          <h3 className="text-xl font-bold mb-5">
            Follow Us
          </h3>


          <p className="text-gray-400 hover:text-pink-400 cursor-pointer">
            Facebook
          </p>


          <p className="text-gray-400 hover:text-pink-400 cursor-pointer mt-3">
            Instagram
          </p>


          <p className="text-gray-400 hover:text-pink-400 cursor-pointer mt-3">
            TikTok
          </p>


        </div>


      </div>



      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

        © 2026 Bouquet House By Mariya. All Rights Reserved.

      </div>


    </footer>

  );

}

export default Footer;