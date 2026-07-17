function TopBar() {
  return (
    <div className="bg-pink-600 text-white">

      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm md:text-base font-medium">

          <p>
            🎁 Free Gift Wrapping Available
          </p>

          <p>
            🚚 Dhaka Delivery ৳60 | 🇧🇩 Outside Dhaka ৳150
          </p>

          <a
            href="https://wa.me/8801764089926"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 duration-300"
          >
            💬 WhatsApp: 01764089926
          </a>

        </div>

      </div>

    </div>
  );
}

export default TopBar;