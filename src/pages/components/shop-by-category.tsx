import React from 'react';
import Image from "next/image";
import Button from "../components/Button";
import fashion from '../../../public/assets/images/fashion.png';
import fragment from '../../../public/assets/images/fragment.png';
import makeup from '../../../public/assets/images/makeup.png';
import skin from '../../../public/assets/images/skin.png';
import tools from '../../../public/assets/images/tools.png';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

function ShopByCategory() {
    return (
        <>
            <section className="container mx-auto mb-5 px-4">
                <div className="flex justify-between items-center">
                    <h3 className="uppercase text-[#101820] text-[24px] sm:text-[28px] md:text-[35px] tracking-widest font-bold">Shop by category</h3>
                    <div className="flex items-center gap-x-3">
                        <IoArrowBackCircleOutline fontSize={34} />
                        <IoArrowForwardCircleOutline fontSize={34} />
                    <Button name={'Shop All'} />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                <div className="flex flex-col items-center gap-y-3">
                    <Image src={makeup} className="w-[300px]" alt={"makeup"} />
                    <h3 className="text-center font-bold text-2xl leading-7">Makeup</h3>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <Image src={fragment} className="w-[300px]" alt={"fragment"} />
                    <h3 className="text-center font-bold text-2xl leading-7">Fragrance</h3>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <Image src={skin} className="w-[300px]" alt={"skin"} />
                    <h3 className="text-center font-bold text-2xl leading-7">Skin & Personal Care</h3>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <Image src={fashion} className="w-[300px]" alt={"fashion"} />
                    <h3 className="text-center font-bold text-2xl leading-7">Fashion & Apparel</h3>
                </div>
                <div className="flex flex-col items-center gap-y-3">
                    <Image src={tools} className="w-[300px]" alt={"tools"} />
                    <h3 className="text-center font-bold text-2xl leading-7">Tools & Accessories</h3>
                </div>
            </div>
        </section >
        </>
    )
}

export default ShopByCategory;
