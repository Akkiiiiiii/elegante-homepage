import React from 'react'
import Button from './Button'
import Image from "next/image";
import iconFragrance from '../../../public/assets/images/icon-fragrance.png';


export default function findOutMore() {
    return (
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
    )
}
