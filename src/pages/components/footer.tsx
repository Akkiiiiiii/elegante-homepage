import Image from 'next/image'
import React from 'react';
import colouredELogo_01 from '../../../public/assets/images/logo/ColouredELogo-01.svg';
import twitter from './../../../public/assets/images/icon/twitter.png';
import facebook from './../../../public/assets/images/icon/facebook.png';
import groupImg from './../../../public/assets/images/icon/group_img.png';

function Footer() {
    return (
        <>
            <footer>
                <div className='container mx-auto px-4'>
                    <hr className='mb-7' />
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                        <div className='flex flex-col gap-y-3'>
                            <Image
                                src={colouredELogo_01}
                                width={187.88}
                                height={84.12}
                                alt='logo'
                            />
                            <div className='flex gap-x-2'>
                                <i><Image src={twitter} alt='twitter' /></i>
                                <i><Image src={facebook} alt='facebook' /></i>
                            </div>
                            <div className='flex'>
                                <i><Image src={groupImg} alt='groupImg' /></i>
                            </div>
                            <p className='text-sm font-normal text-[#000]'>© Eleganté 2022</p>
                            <p className='text-sm font-normal text-[#000]'>Site Designed & Developed by CDA</p>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h3 className='text-base font-bold text-[#101820]'>Shop</h3>
                            <ul className='flex flex-col gap-y-1'>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Hair</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Hair Care</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Skin & personal Care</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Makeup</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Fragrance</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Tools & accessories</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Fashion & apparel</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h3 className='text-base font-bold text-[#101820]'>Useful Links</h3>
                            <ul className='flex flex-col gap-y-1'>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Salon</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Spa</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Conference & events</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Training</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Studio</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Restaurant</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Arcade</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h3 className='text-base font-bold text-[#101820]'>Customer Service</h3>
                            <ul className='flex flex-col gap-y-1'>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>My Account</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Contact Us</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>FAQ's</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>About Us</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Returns</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>Legal Policies</a></li>
                                <li><a href="#" className='text-sm font-normal text-[#101820]'>News</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <h3 className='text-base font-bold text-[#101820]'>Subscribe to our newsletters</h3>
                            <form className='flex flex-col items-end gap-y-2'>
                                <input className="w-full rounded-[28px] border border-solid outline-none border-[#12181f] px-[16px] py-[5px]" type="text" placeholder='Name' />
                                <input className="w-full rounded-[28px] border border-solid outline-none border-[#12181f] px-[16px] py-[5px]" type="email" placeholder='Email' />
                                <div className='flex gap-x-2'>
                                    <input type="checkbox" name="" id="condition" />
                                    <label htmlFor="condition" className='text-sm font-normal text-[#101820]'>I agree to all marketing communications</label>
                                </div>

                                <button className='uppercase bg-[#101820] text-white px-[35px] py-[8px] rounded-[40px] font-semibold text-sm'>submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='bg-[#101820] h-2 mt-10'></div>
            </footer>
        </>
    )
}

export default Footer

