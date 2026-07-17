import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStickyNote,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa";

import { MdLocalShipping } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function Checkout() {
  const { cart } = useContext(CartContext);
  const location = useLocation();

  const buyNowProduct = location.state?.buyNowProduct;

  const checkoutItems = buyNowProduct
    ? [
        {
          ...buyNowProduct,
          quantity: 1,
        },
      ]
    : cart;

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
    area: "Dhaka Inside",
  });

  const productTotal = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryCharge =
    customer.area === "Dhaka Inside" ? 60 : 150;

  const grandTotal = productTotal + deliveryCharge;

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const sendOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all required information.");
      return;
    }

    if (checkoutItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderItems = checkoutItems
      .map(
        (item, index) => `
${index + 1}. 🌸 ${item.name}
Quantity : ${item.quantity}
Price : ৳${item.price * item.quantity}
`
      )
      .join("\n");
const orderId = "BH" + Date.now().toString().slice(-6);

const orderDate = new Date().toLocaleString("en-BD");


const message = `
🌸 *Bouquet House By Mariya* 🌸

🛍️ *NEW ORDER RECEIVED*

━━━━━━━━━━━━━━

🆔 Order ID:
${orderId}

📅 Date:
${orderDate}

━━━━━━━━━━━━━━

👤 *Customer Information*

Name:
${customer.name}

📞 Phone:
${customer.phone}

📍 Address:
${customer.address}

🚚 Delivery Area:
${customer.area}

━━━━━━━━━━━━━━

🌷 *Order Details*

${orderItems}

━━━━━━━━━━━━━━

💰 *Payment Summary*

🛒 Product Total:
৳${productTotal}

🚚 Delivery Charge:
৳${deliveryCharge}

⚠️ Advance Payment Required:
৳${deliveryCharge}

💵 Remaining Amount:
৳${productTotal}

💳 Grand Total:
৳${grandTotal}
━━━━━━━━━━━━━━

📝 Note:
${customer.note || "no note"}

━━━━━━━━━━━━━━

❤️ Thank You For Ordering

🌸 Bouquet House By Mariya 🌸
`;


window.open(
  `https://wa.me/8801764089926?text=${encodeURIComponent(message)}`,
  "_blank"
);

    window.open(
      `https://wa.me/8801764089926?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-100 py-20">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-pink-300 blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-rose-300 blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-pink-600 font-semibold">
            Secure Checkout
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mt-4">
            Complete Your
            <span className="text-pink-600"> Order</span>
          </h1>

          <p className="mt-5 text-gray-500 text-lg">
            Handmade Artificial Flower Bouquet
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-green-600 font-semibold">
            <FaShieldAlt />
            <span>100% Secure WhatsApp Order</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* Customer Information */}

<div className="bg-white rounded-[35px] shadow-2xl border border-pink-100 p-8">

  <h2 className="text-3xl font-bold text-gray-800 mb-8">
    Customer Information
  </h2>

  {/* Name */}

  <div className="mb-6">

    <label className="font-semibold text-gray-700">
      Full Name
    </label>

    <div className="relative mt-2">

      <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500" />

      <input
        type="text"
        name="name"
        value={customer.name}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="w-full h-14 rounded-2xl border border-pink-200 pl-14 pr-5 outline-none focus:ring-2 focus:ring-pink-500"
      />

    </div>

  </div>
  <div className="mt-5 bg-yellow-50 border border-yellow-200 p-4 rounded-2xl text-sm text-gray-700">
  ⚠️ Delivery charge must be paid in advance to confirm your order.
</div>

  {/* Phone */}

  <div className="mb-6">

    <label className="font-semibold text-gray-700">
      Phone Number
    </label>

    <div className="relative mt-2">

      <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500" />

      <input
        type="tel"
        name="phone"
        value={customer.phone}
        onChange={handleChange}
        placeholder="01XXXXXXXXX"
        className="w-full h-14 rounded-2xl border border-pink-200 pl-14 pr-5 outline-none focus:ring-2 focus:ring-pink-500"
      />

    </div>

  </div>

  {/* Address */}

  <div className="mb-6">

    <label className="font-semibold text-gray-700">
      Delivery Address
    </label>

    <div className="relative mt-2">

      <FaMapMarkerAlt className="absolute left-5 top-6 text-pink-500" />

      <textarea
        rows={4}
        name="address"
        value={customer.address}
        onChange={handleChange}
        placeholder="Enter full delivery address"
        className="w-full rounded-2xl border border-pink-200 pl-14 pr-5 py-4 outline-none focus:ring-2 focus:ring-pink-500"
      />

    </div>

  </div>

  {/* Area */}

  <div className="mb-6">

    <label className="font-semibold text-gray-700">
      Delivery Area
    </label>

    <div className="relative mt-2">

      <MdLocalShipping className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500" />

      <select
        name="area"
        value={customer.area}
        onChange={handleChange}
        className="w-full h-14 rounded-2xl border border-pink-200 pl-14 pr-5 outline-none focus:ring-2 focus:ring-pink-500"
      >

        <option value="Dhaka Inside">
          Dhaka Inside — ৳60
        </option>

        <option value="Outside Dhaka">
          Outside Dhaka — ৳150
        </option>

      </select>

    </div>

  </div>

  {/* Note */}

  <div>

    <label className="font-semibold text-gray-700">
      Special Note
    </label>

    <div className="relative mt-2">

      <FaStickyNote className="absolute left-5 top-6 text-pink-500" />

      <textarea
        rows={4}
        name="note"
        value={customer.note}
        onChange={handleChange}
        placeholder="Write any special instructions..."
        className="w-full rounded-2xl border border-pink-200 pl-14 pr-5 py-4 outline-none focus:ring-2 focus:ring-pink-500"
      />

    </div>

  </div>

</div>
{/* Order Summary */}

<div className="sticky top-28">

  <div className="bg-white rounded-[35px] shadow-2xl border border-pink-100 overflow-hidden">

    {/* Header */}

    <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white p-7">

      <h2 className="text-3xl font-bold">
        Order Summary
      </h2>

      <p className="opacity-90 mt-2">
        Review your order before placing it.
      </p>

    </div>

    <div className="p-7">

      {
        checkoutItems.length === 0 ? (

          <div className="text-center py-10">

            <h3 className="text-2xl font-bold text-pink-600">
              Cart is Empty
            </h3>

            <p className="text-gray-500 mt-2">
              Please add some bouquets first.
            </p>

          </div>

        ) : (

          checkoutItems.map((item) => (

            <div
              key={item.id}
              className="flex items-center gap-4 border-b border-pink-100 py-5"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div className="flex-1">

                <h3 className="font-bold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Quantity : {item.quantity}
                </p>

              </div>

              <p className="font-bold text-pink-600 text-lg">
                ৳{item.price * item.quantity}
              </p>

            </div>

          ))

        )
      }      {/* Price Summary */}

      <div className="mt-8 space-y-5">

        <div className="flex justify-between text-lg">

          <span className="text-gray-600">
            Product Total
          </span>

          <span className="font-bold">
            ৳{productTotal}
          </span>

        </div>

        <div className="flex justify-between text-lg">

          <span className="text-gray-600">
            Delivery Charge
          </span>

          <span className="font-bold">
            ৳{deliveryCharge}
          </span>

        </div>

        <hr className="border-pink-200" />

        <div className="flex justify-between text-3xl font-extrabold text-pink-600">

          <span>
            Grand Total
          </span>

          <span>
            ৳{grandTotal}
          </span>

        </div>

      </div>

      {/* Free Gift */}

      <div className="mt-8 bg-pink-50 border border-pink-200 rounded-2xl p-5 flex items-center gap-4">

        <FaGift className="text-4xl text-pink-600" />

        <div>

          <h3 className="font-bold text-gray-800">
            FREE Gift Wrapping
          </h3>

          <p className="text-sm text-gray-500">
            Every bouquet comes beautifully wrapped.
          </p>

        </div>

      </div>

      {/* Secure Order */}

      <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center gap-4">

        <FaShieldAlt className="text-4xl text-green-600" />

        <div>

          <h3 className="font-bold text-gray-800">
            Secure WhatsApp Order
          </h3>

          <p className="text-sm text-gray-500">
            Your information is kept private and secure.
          </p>

        </div>

      </div>

     <div className="mb-6 bg-pink-50 border border-pink-200 rounded-2xl p-5">

  <h3 className="font-bold text-pink-600 text-lg mb-3">
    📲 WhatsApp অর্ডার করার নিয়ম
  </h3>

  <p className="text-gray-600 leading-7 text-sm">

    ✅ নিচের "WhatsApp এ অর্ডার করুন" বাটনে ক্লিক করে অর্ডার পাঠান।
    <br />

    ✅ আমরা আপনার অর্ডার দেখে bKash / Nagad পেমেন্ট নম্বর পাঠিয়ে দেবো।
    <br />

    ✅ অর্ডার নিশ্চিত করার জন্য Delivery Charge অগ্রিম প্রদান করতে হবে।
    <br />

    💳 Advance Payment পাওয়ার পর আপনার অর্ডার Confirm করে Bouquet তৈরি করা হবে।
    
  </p>

</div>
      {/* WhatsApp Button */}

      <button
        onClick={sendOrder}
        className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-5 text-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02]"
      >

        <BsWhatsapp className="text-3xl" />

        Place Order on WhatsApp

      </button>

    </div>

  </div>

</div> 
   </div>

  </div>

</section>

  );
}

export default Checkout;