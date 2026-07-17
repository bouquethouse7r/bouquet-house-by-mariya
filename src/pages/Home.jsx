import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";
import Customize from "../components/Customize";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="bg-gradient-to-b from-rose-50 via-white to-pink-50">

      <Hero />

      <Categories />

      <Products />
      <Customize />

      <BestSeller />

      <NewArrival />

      <WhyChooseUs />

      <Reviews />

      <Gallery />

      <Contact />

    </main>
  );
}

export default Home;