
import HelloBar from "./components/hello-bar";
import Navbar from "./components/navbar";
import Categories from "./components/categories";
import HeroSection from "./components/hero-section";
import TrendingNow from "./components/trending-now";
import ArrivalShop from "./components/arrival-shop";
import ShopByCategory from "./components/shop-by-category";
import Discover2 from "./components/discover-2";
import Collection2 from "./components/collection-2";
import ShopByCategory2 from "./components/shop-by-category-2";
import Discover from "./components/discover";
import WeeklyOffers from "./components/weekly-offers";
import Footer from "./components/footer";
import OfferMarquee from "./components/offerMarquee";
import FindOutMore from "./components/findOutMore";

export default function Home() {

  return (
    <main className={``}>
      <HelloBar />
    
      <Navbar />
    
      <Categories />
    
      <OfferMarquee />
    
      <HeroSection />

      <ArrivalShop />

      <TrendingNow />

      <Discover />
      
      <Discover2 />

      <ShopByCategory />

      <ShopByCategory2 />

      <WeeklyOffers />

      <FindOutMore />

      <Collection2 />

      <Footer />
    </main >
  );
}