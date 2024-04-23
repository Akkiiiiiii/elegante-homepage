import React from 'react';
import Image from "next/image";
import bannerImg from "../../../public/assets/images/banner_img.png";

function ArrivalShop() {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-start gap-y-5 px-4">
            <h1 className="text-[24px] sm:text-[24px] md:text-[34px] lg:text-[44px] leading-[50px] text-[#101820] font-bold">Shop <br /> New <br /> Arrivals</h1>
            <a href="#" className="bg-[#E03C31] text-white font-bold leading-5 rounded-[40px] px-[35px] py-[15px] uppercase text-lg">Shop Now</a>
          </div>
          <div className=''>
            <Image src={bannerImg} className="w-100" alt={"banner image"} />
          </div>
        </div>
      </section >
    </>
  )
}

export default ArrivalShop;
