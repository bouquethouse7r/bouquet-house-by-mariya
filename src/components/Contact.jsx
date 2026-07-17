function Contact() {

  return (

    <section className="py-20 bg-pink-50">

      <div className="max-w-7xl mx-auto px-6">


        <div className="text-center mb-12">

          <h2 className="text-5xl font-bold text-pink-600">
            Contact Us
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Have any questions? We are always ready to help you.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              💬
            </div>

            <h3 className="text-2xl font-bold mt-4">
              WhatsApp
            </h3>

            <a
              href="https://wa.me/8801764089926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold mt-3 block"
            >
              01764089926
            </a>

          </div>



          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              📞
            </div>

            <h3 className="text-2xl font-bold mt-4">
              Call Us
            </h3>

            <p className="text-gray-600 mt-3">
              01764089926
            </p>

          </div>



          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl">
              🚚
            </div>

            <h3 className="text-2xl font-bold mt-4">
              Delivery
            </h3>

            <p className="text-gray-600 mt-3">
              Fast delivery across Bangladesh
            </p>

          </div>


        </div>


      </div>


    </section>

  );

}


export default Contact;