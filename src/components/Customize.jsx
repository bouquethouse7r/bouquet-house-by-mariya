import { BsWhatsapp } from "react-icons/bs";
import { FaPalette, FaGift, FaRibbon } from "react-icons/fa";

function Customize() {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-rose-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-[40px] shadow-2xl border border-pink-100 p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}

            <div>

              <span className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold">
                💐 Custom Bouquet Service
              </span>

              <h2 className="text-5xl font-extrabold text-gray-800 mt-6 leading-tight">
                Design Your
                <span className="text-pink-600"> Dream Bouquet</span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-8">
                Can't find your perfect bouquet?
                <br /><br />
                No worries! At <b>Bouquet House By Mariya</b>,
                every bouquet can be customized exactly the way you want.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">

                <div className="bg-pink-50 rounded-2xl p-5">
                  <FaPalette className="text-3xl text-pink-600 mb-3" />
                  <h4 className="font-bold">Choose Colors</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Select your favorite color combination.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-5">
                  <FaGift className="text-3xl text-pink-600 mb-3" />
                  <h4 className="font-bold">Gift Wrapping</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Premium wrapping paper & decoration.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-5">
                  🌸
                  <h4 className="font-bold mt-3">Flower Style</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Select your favorite artificial flowers.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-5">
                  <FaRibbon className="text-3xl text-pink-600 mb-3" />
                  <h4 className="font-bold">Ribbon Design</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    Beautiful ribbon according to your choice.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-gradient-to-br from-pink-600 to-rose-500 rounded-[35px] text-white p-10">

              <h3 className="text-4xl font-bold">
                Create Your Own Bouquet
              </h3>

              <p className="mt-6 leading-8 text-pink-100">

                Tell us your:

              </p>

              <ul className="space-y-4 mt-8 text-lg">

                <li>🌸 Favorite Flower Style</li>

                <li>🎨 Favorite Color Theme</li>

                <li>🎀 Wrapping Paper</li>

                <li>🎁 Ribbon Design</li>

                <li>💰 Your Budget</li>

                <li>💖 Any Special Idea</li>

              </ul>

              <a
                href="https://wa.me/8801764089926"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:scale-105 duration-300 shadow-xl"
              >
                <BsWhatsapp className="text-2xl" />
                Customize on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Customize;