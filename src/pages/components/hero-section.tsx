import React from 'react'
import Image from 'next/image';
import ShopArrivals from '../../../public/assets/images/shop-arrivals.png'

export default function HeroSection() {
    return (
        <section>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-96 md:h-[21rem] relative">
                    <div className="absolute inset-0 bg-white opacity-100"></div>
                    <div className="flex flex-col items-center justify-center w-full h-full text-center">
                        <p style={{ color: '#101820' }} className='text-custom-100 tracking-tight leading-none my-0 font-extrabold'>
                            Shop New Arrivals
                        </p>
                        <button className="inline-block mt-4 w-42 h-14 border-2 border-white rounded-none miter-join focus:outline-none bg-[#E03C31]">
                            <span className="text-white text-sm leading-[22px] tracking-[1.6px] uppercase">SHOP NOW</span>
                        </button>
                    </div>
                </div>
                <div className="hidden md:block w-full h-[924px]">
                    <Image
                        src={ShopArrivals}
                        width={1229}
                        height={924}
                        alt="image description"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div> */}




            {/* <div className="container-fluid mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col flex items-center justify-center">
                    <div>
                        <p style={{ color: '#101820' }} className='text-custom-100 w-[25.5rem] h-[21rem] text-left tracking-tight leading-none my-0 font-extrabold'>
                            Shop New Arrivals
                        </p>
                        <button className="relative inline-block text-center w-42 h-14 border-2 border-white rounded-none miter-join focus:outline-none bg-[#E03C31]">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-transparent border-white border-2 rounded-none">
                                <span className="text-white text-sm leading-[22px] tracking-[1.6px] uppercase">SHOP NOW</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <Image
                        src={ShopArrivals}
                        width={1229}
                        height={924}
                        alt='test'
                        className="rounded-none"
                    />
                </div>
            </div>
        </div> */}
        </section>
    )
}
