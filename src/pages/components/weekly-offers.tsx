import React from 'react';
import coconutOil from '../../../public/assets/images/coconut_oil.png';
import perfume from '../../../public/assets/images/perfume.png';
import skinProduct from '../../../public/assets/images/skin_product.png';
import hairSpray from '../../../public/assets/images/hair_spray.png';
import Card from './card';

function WeeklyOffers() {
    const data = [
        {
            imagesrc: hairSpray,
            categoryName: "hair care",
            productName: "maui shampoo",
            productPrice: "$ 29.99",
            isDiscountedPrice: false,
            rating: 4.5
        },
        {
            imagesrc: skinProduct,
            categoryName: "skin & personal care",
            productName: "hair care set",
            productPrice: "$ 34.99",
            isDiscountedPrice: false,
            rating: 3
        },
        {
            imagesrc: coconutOil,
            categoryName: "skin & personal care",
            productName: "ysl nail varnishes",
            productPrice: "$ 89.99",
            isDiscountedPrice: false,
            rating: 4
        },
        {
            imagesrc: perfume,
            categoryName: "makeup",
            productName: "nude makeup set",
            productPrice: "$ 23.99",
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
                        <h3 className="uppercase text-[#101820] text-[24px] sm:text-[28px] md:text-[35px] tracking-[3.5px] font-bold text-center pt-10 pb-5">Offers of the week</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
                            {
                                data.map((item, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={item.imagesrc}
                                        categoryName={item.categoryName}
                                        productName={item.productName}
                                        productPrice={item.productPrice}
                                        rating={item.rating}
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

export default WeeklyOffers
