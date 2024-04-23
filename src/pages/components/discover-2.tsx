import React from 'react';
import coconutImg from "../../../public/assets/images/Cocobutter.png";
import hairfinityImg from "../../../public/assets/images/Hairfinity.png";
import Card from './card';

function Discover2() {
    const data = [
        {
          imagesrc: coconutImg,
          title: "Lorem ipsum dolor sit amet, consetetur",
          description: "Lorem ipsum dolor sit amet, consetetur",
          btnName: "shop now"
        },
        {
          imagesrc: hairfinityImg,
          title: "Lorem ipsum dolor sit amet, consetetur",
          description: "Lorem ipsum dolor sit amet, consetetur",
          btnName: "shop now"
        }
    ];

  return (
    <>
       <section className="container mx-auto my-24 px-4">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
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

export default Discover2;