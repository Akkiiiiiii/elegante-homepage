import React from 'react'
import Card from './card';
import salonImg from '../../../public/assets/images/salon_img.png';
import spaImg from '../../../public/assets/images/spa_img.png';
import restaurantImg from '../../../public/assets/images/restaurant_img.png';

function Collection2() {

    const data = [
        {
          imagesrc: spaImg,
          title: "Visit Our Spa",
          description: "Lorem ipsum dolor sit amet, consetetur",
          btnName: "shop now"
        },
        {
          imagesrc: restaurantImg,
          title: "Visit Our Restaurant",
          description: "Lorem ipsum dolor sit amet, consetetur",
          btnName: "shop now"
        },
        {
            imagesrc: salonImg,
            title: "Visit Our Salon",
            description: "Lorem ipsum dolor sit amet, consetetur",
            btnName: "shop now"
        }
    ];

  return (
    <>
        <section className="container mx-auto my-24 px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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

export default Collection2;