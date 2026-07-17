import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-pink-50 via-white to-rose-50 flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-rose-300 rounded-full blur-3xl opacity-20"></div>

      {/* Floating Flowers */}
      <div className="absolute top-20 left-16 text-4xl animate-bounce">
  🌸
</div>

<div className="absolute top-40 right-24 text-3xl animate-bounce [animation-delay:0.3s]">
  🌷
</div>

<div className="absolute bottom-28 left-32 text-3xl animate-bounce [animation-delay:0.6s]">
  🌺
</div>

<div className="absolute bottom-20 right-20 text-4xl animate-bounce [animation-delay:0.9s]">
  💐
</div>

      {/* Main */}
      <div className="relative text-center">

        <img
          src={logo}
          alt="Bouquet House"
          className="w-36 h-36 mx-auto animate-pulse"
        />

        <h1 className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Bouquet House
        </h1>

        <p className="mt-2 text-xl tracking-[6px] uppercase text-gray-500">
          By Mariya
        </p>

        {/* Loading Bar */}
        <div className="w-72 h-3 bg-pink-100 rounded-full overflow-hidden mx-auto mt-10 shadow-inner">

          <div
            className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>

        <p className="mt-5 text-gray-500 tracking-[3px] animate-pulse">
          Preparing Your Floral Experience...
        </p>

        <p className="mt-3 text-pink-600 font-bold text-lg">
          {progress}%
        </p>

      </div>

    </div>
  );
}

export default LoadingScreen;