import React from 'react';
import nailPaintImg from '../../../public/assets/images/nail_paint.png';
import makeupKitImg from '../../../public/assets/images/makeup_kit.png';
import lipstickImg from '../../../public/assets/images/lipstick.png';
import Card from './card';

function ShopByCategory2() {
    const data = [
        {
            imagesrc: nailPaintImg,
            title: "Lorem ipsum dolor sit amet, consetetur",
            description: "Lorem ipsum dolor sit amet, consetetur",
            btnName: "shop now"
        },
        {
            imagesrc: makeupKitImg,
            title: "Lorem ipsum dolor sit amet, consetetur",
            description: "Lorem ipsum dolor sit amet, consetetur",
            btnName: "shop now"
        },
        {
            imagesrc: lipstickImg,
            title: "Lorem ipsum dolor sit amet, consetetur",
            description: "Lorem ipsum dolor sit amet, consetetur",
            btnName: "shop now"
        }
    ];

  return (
    <>
        <section className="container mx-auto my-24 px-4">
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            {
                data.map((item, index) => (
                <Card
                    key={index}
                    imageUrl={item.imagesrc}
                    title={item.title}
                    description={item.description}
                    btnName={item.btnName}
                />
                ))
            }
            </div>
        </section>
    </>
  )
}

export default ShopByCategory2;