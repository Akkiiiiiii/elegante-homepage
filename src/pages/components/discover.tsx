import React from 'react'
import Card from './card';
import nailPaintImg from '../../../public/assets/images/discover_nail_paint.png';
import makeupKitImg from '../../../public/assets/images/discover_makeup_kit.png';
import hariCareSet from '../../../public/assets/images/hair_care_set.png';
import nailVarnishes from '../../../public/assets/images/nail_varnishes.png';

function Discover() {
    const data = [
        {
            imagesrc: makeupKitImg,
            categoryName: "hair care",
            productName: "maui shampoo",
            productPrice: "$ 29.99",
            isDiscountedPrice: false,
            rating: 4.5
        },
        {
            imagesrc: hariCareSet,
            categoryName: "skin & personal care",
            productName: "hair care set",
            productPrice: "$ 34.99",
            isDiscountedPrice: false,
            rating: 3
        },
        {
            imagesrc: nailVarnishes,
            categoryName: "skin & personal care",
            productName: "ysl nail varnishes",
            productPrice: "$ 89.99",
            isDiscountedPrice: false,
            rating: 4
        },
        {
            imagesrc: nailPaintImg,
            categoryName: "makeup",
            productName: "nude makeup set",
            productPrice: "$ 23.99",
            originalPrice: "$ 30.00",
            isDiscountedPrice: true,
            rating: 5
        }
    ];
    const isShowPrice: boolean = true;

    return (
        <>
            <section style={{ background: "linear-gradient(to top, #fff 50%, #ececed 50%)" }}>
                <div>
                    <div className="container mx-auto px-4">
                        <h3 className="uppercase text-[#101820] text-[24px] sm:text-[28px] md:text-[35px] tracking-[3.5px] font-bold text-center pt-10 pb-5">Discover</h3>

                        <ul className='flex gap-x-10 justify-center mb-10'>
                            <li className='uppercase tracking-[1.8px] text-[18px] font-bold'><a href="#">Special Offers</a></li>
                            <li className='uppercase tracking-[1.8px] text-[18px]'><a href="#">Trending</a></li>
                            <li className='uppercase tracking-[1.8px] text-[18px]'><a href="#">New in</a></li>
                        </ul>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {
                                data.map((item, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={item.imagesrc}
                                        categoryName={item.categoryName}
                                        productName={item.productName}
                                        productPrice={item.productPrice}
                                        rating={item.rating}
                                        originalPrice={item.originalPrice}
                                        isDiscountedPrice={item.isDiscountedPrice}
                                        isPrice={isShowPrice}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover;
