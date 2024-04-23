import React from 'react';
import card1 from '../../../public/assets/images/card-1.png';
import Image from 'next/image';
import Button from './Button';
import RatingStar from './rating-star';

const Card = ({ title, imageUrl, description, btnName, isPrice, categoryName, productName, productPrice, rating, originalPrice, isDiscountedPrice }: any) => {
  const textColorClass = isDiscountedPrice ? 'text-[#e03c31]' : 'text-[#101820]';
  return (
    <>
      <div className='col-span-1 mx-auto '>
        <div className="">
          <Image
            src={imageUrl}
            width={500}
            height={380}
            className=""
            alt={"No image"} />
          {isPrice ? (
            <div className="card-body">
              <span className="uppercase text-sm text-[#1018204d] leading-33 my-0 font-bold pt-[10px]">{categoryName}</span>
              <p className='text-base text-[#101820] font-normal capitalize'>{productName}</p>
              <h3 className={`${textColorClass} font-semibold`}>{productPrice} <del className='text-base text-[#707070] pl-2'>{originalPrice}</del></h3>
              <RatingStar rating={rating}/>
            </div>
          ) : (
            <div className="card-body">
              <h5 className="text-2xl leading-33 my-0 font-bold pt-[10px]">{title}</h5>
              <p className='mb-4'>{description}</p>
              <Button name={btnName} />
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Card;