function WhyChooseUs() {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Quick and safe delivery all over Bangladesh for your special moments.",
    },
    {
      icon: "💐",
      title: "Premium Quality",
      description:
        "Beautiful handmade artificial flower bouquets with premium finishing.",
    },
    {
      icon: "❤️",
      title: "Made With Love",
      description:
        "Every bouquet is carefully handcrafted with love and creativity.",
    },
    {
      icon: "💬",
      title: "24/7 WhatsApp Support",
      description:
        "We're always ready to answer your questions and take your orders.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50">

      {/* Background Decoration */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block bg-pink-100 text-pink-600 px-6 py-2 rounded-full font-semibold tracking-wide">
            WHY PEOPLE LOVE US
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-6">
            Why Choose
            <span className="text-pink-600"> Bouquet House?</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-8">
            We create beautiful handmade artificial flower bouquets that make
            every celebration unforgettable with premium quality and love.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="
              group
              bg-white
              rounded-3xl
              p-8
              border
              border-pink-100
              shadow-lg
              hover:-translate-y-4
              hover:shadow-pink-300/40
              transition-all
              duration-500
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-pink-100
                flex
                items-center
                justify-center
                text-4xl
                mx-auto
                group-hover:bg-gradient-to-r
                group-hover:from-pink-500
                group-hover:to-rose-500
                group-hover:text-white
                group-hover:scale-110
                group-hover:rotate-12
                transition-all
                duration-500
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-center mt-6 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 text-center mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Trust Counter */}
        <div className="mt-20 bg-white rounded-[35px] border border-pink-100 shadow-xl p-10">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-extrabold text-pink-600">
                500+
              </h3>

              <p className="text-gray-500 mt-2">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-pink-600">
                1000+
              </h3>

              <p className="text-gray-500 mt-2">
                Bouquets Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-pink-600">
                5★
              </h3>

              <p className="text-gray-500 mt-2">
                Customer Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-pink-600">
                24/7
              </h3>

              <p className="text-gray-500 mt-2">
                WhatsApp Support
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;