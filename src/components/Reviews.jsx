function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Nusrat Jahan",
      location: "Dhaka",
      initial: "N",
      review:
        "The bouquet was absolutely beautiful. The quality was beyond my expectations. Highly recommended!",
      rating: "★★★★★",
    },
    {
      id: 2,
      name: "Mim Akter",
      location: "Chattogram",
      initial: "M",
      review:
        "Very fast delivery and amazing design. My friend loved the bouquet so much.",
      rating: "★★★★★",
    },
    {
      id: 3,
      name: "Sadia Islam",
      location: "Rajshahi",
      initial: "S",
      review:
        "Excellent customer service. The bouquet looks exactly like the picture.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="py-24 bg-pink-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold">
            Customer Reviews
          </span>

          <h2 className="text-5xl font-bold mt-5 text-gray-800">
            What Our
            <span className="text-pink-600"> Customers Say</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            Our customers love our handmade artificial flower bouquets.
          </p>

        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-500 p-8 border border-pink-100"
            >

              {/* Avatar */}
              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-pink-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  {review.initial}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-gray-800">
                    {review.name}
                  </h3>

                  <p className="text-gray-500">
                    📍 {review.location}
                  </p>

                </div>

              </div>

              {/* Rating */}
              <div className="mt-6 text-yellow-500 text-xl">
                {review.rating}
              </div>

              {/* Review */}
              <p className="mt-5 text-gray-600 leading-8 italic">
                "{review.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;