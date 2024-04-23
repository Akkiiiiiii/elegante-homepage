import React from 'react'
import colouredELogo_01 from '../../../public/assets/images/logo/ColouredELogo-01.svg';
import Image from 'next/image';
import { TbSearch } from 'react-icons/tb';

export default function Navbar() {
    return (
        <header className='container mx-auto'>
            <nav className="bg-white">
                {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> */}
                <div className="flex items-center justify-around py-8">
                    <div>
                        <Image
                            src={colouredELogo_01}
                            width={187.88}
                            height={84.12}
                            alt='test'
                        />
                    </div>
                    <div className="lg:block hidden">
                        <div className='relative'>
                            <input className="bg-[#1018200D] w-[716px] h-[62px] opacity-100 rounded-39 border-none outline-none px-4" type="text" />
                            <TbSearch className='absolute right-5 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center pe-4">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="black" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            <p className="tracking-wider ps-2 font-semibold">MY ACCOUNT</p>
                        </div>
                        <div className="flex items-center ps-4">
                            <div className='relative'>
                                <svg className="w-6 h-6 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                </svg>
                                <span className='absolute -bottom-2 -right-2 bg-[#ffaa4d] rounded-full w-4 h-4 flex items-center justify-center p-2 text-white text-xs font-semibold'>1</span>
                            </div>

                            <p className="tracking-wider ps-2 font-semibold">BASKET</p>
                        </div>
                    </div><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="black" className="lg:hidden block" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>

                </div>
                {/* </div> */}

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
                    </div>
                </div>
            </nav>
            <hr className='pb-8' />
        </header>
    )
}
