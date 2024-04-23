import Image from "next/image";
import { Inter } from "next/font/google";
import HelloBar from "./components/hello-bar";
import Navbar from "./components/navbar";
import Categories from "./components/categories";
import HeroSection from "./components/hero-section";
import TrendingNow from "./components/trending-now";
import iconFragrance from './../../public/assets/images/icon-fragrance.png';
import Button from "./components/Button";
import Card from "./components/card";
import coconutImg from "../../public/assets/images/Cocobutter.png";
import hairfinityImg from "../../public/assets/images/Hairfinity.png";
import { useState } from "react";
import ArrivalShop from "./components/arrival-shop";
import ShopByCategory from "./components/shop-by-category";
import Discover2 from "./components/discover-2";
import Collection2 from "./components/collection-2";
import ShopByCategory2 from "./components/shop-by-category-2";
import Discover from "./components/discover";
import WeeklyOffers from "./components/weekly-offers";
import Footer from "./components/footer";

export default function Home() {

  return (
    <main className={``}>
      <HelloBar />
      <Navbar />
      <Categories />
      <div className="w-full bg-[#e03c31] mt-5 py-2">
        <div className="flex justify-center items-center flex-wrap text-white gap-6">
          <p className="m-0">GET 10% OFF YOUR FIRST ORDER</p>
          <p className="m-0">GET 10% OFF YOUR FIRST ORDER</p>
          <p className="m-0">GET 10% OFF YOUR FIRST ORDER</p>
          <p className="m-0">GET 10% OFF YOUR FIRST ORDER</p>
        </div>
      </div>
      <HeroSection />

      <ArrivalShop />

      <TrendingNow />

      {/* Discover */}
      <Discover />
      <Discover2 />
      {/*  */}

      <ShopByCategory />

      {/*  */}

      <ShopByCategory2 />

      <WeeklyOffers />

      {/*  */}
      <section className="container mx-auto mb-5 mt-5 px-4">
        <div className="flex flex-col lg:flex-row  gap-6 lg:gap-32 items-start lg:items-center">
          <div className="w-full lg:w-2/5 flex flex-col items-start gap-y-[19px] lg:gap-y-[29px] relative">
            {/* before:absolute before:top-0 before:left-0 before:rounded-full before:h-6 before:w-6 before:bg-blue-500 */}
            <h3 className="text-[34px] lg:text-[45px] leading-[51px] font-bold">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="text-lg leading-6 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos mollitia eius nostrum accusantium tempore rem illo perferendis cumque, sint, quibusdam cupiditate soluta maxime, repellat sit totam voluptatem! Aliquid, aspernatur nostrum.</p>
            <Button name={'find out more'} />
          </div>
          <div className="w-full lg:w-3/5 relative">
            <div className="bg-[#101820] rounded-[20px] h-[400px] lg:h-[450px] opacity-5 ml-20 lg:ml-12"></div>
            <Image src={iconFragrance} className="w-[500px] absolute top-1/2 -left-0 lg:left-[-50px] transform -translate-y-1/2" alt={"Fragrance"} />
          </div>
        </div>
      </section>
      {/*  */}

      {/* Collections */}
      <Collection2 />
      {/*  */}

      <Footer />
    </main >
  );
}