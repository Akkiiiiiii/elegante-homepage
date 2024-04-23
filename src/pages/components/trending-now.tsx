import React from 'react'
import card1 from '../../../public/assets/images/card-1.png'
import card2 from '../../../public/assets/images/card-2.png'
import card3 from '../../../public/assets/images/card-3.png'
import Image from 'next/image';

export default function TrendingNow() {
    return (
        <>
            <section className='container mx-auto px-4'>
                <div className='my-5'>
                    <h1 className='text-center text-custom-35 leading-3.5 mt-0 uppercase'>TRENDING NOW</h1>
                </div>
                <div className='container mx-auto mb-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className='col-span-1 mx-auto '>
                            <div className="">
                                <Image
                                    src={card1}
                                    width={500}
                                    height={380}
                                    className=""
                                    alt={"test"} />
                                <div className="card-body">
                                    <h5 className="text-2xl leading-33 my-0 text-center font-bold">Trend setting makeup</h5>
                                    <p className="text-center">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 mx-auto'>
                            <div className="">
                                <Image
                                    src={card2}
                                    width={500}
                                    height={380}
                                    className=""
                                    alt={"test"} />
                                <div className="card-body">
                                    <h5 className="text-2xl leading-33 my-0 text-center font-bold">New makeup brushes</h5>
                                    <p className="text-center">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 mx-auto '>
                            <div className="">
                                <Image
                                    src={card3}
                                    width={500}
                                    height={380}
                                    className=""
                                    alt={"test"} />
                                <div className="card-body">
                                    <h5 className="text-2xl leading-33 my-0 text-center font-bold">This seasons hottest nail polish</h5>
                                    <p className="text-center">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
