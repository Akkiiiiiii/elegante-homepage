import React from 'react'

export default function Button({name}: any) {
    return (
        <>
            <button className='uppercase border-2 border-[#101820] px-[35px] py-[8px] rounded-[40px] font-semibold text-base'>{name}</button>
        </>
    )
}
