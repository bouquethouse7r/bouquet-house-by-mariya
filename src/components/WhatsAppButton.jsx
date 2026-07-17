function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801764089926"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
    >
      <span className="text-3xl">💬</span>

      <div className="hidden sm:block">
        <p className="font-bold">WhatsApp</p>
        <p className="text-xs">Chat With Us</p>
      </div>
    </a>
  );
}

export default WhatsAppButton;