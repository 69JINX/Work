import React from 'react'
import { Open_Sans, Poppins } from 'next/font/google'

const openSans_head = Open_Sans({
    subsets: ['latin'],
    weight: '700'
});

const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '400'
});

const poppins_btn = Poppins({
    subsets: ['latin'],
    weight: '600'
});

function Hero() {

    return (

        <div className={`bg-[url('/Hero-Image.svg')] bg-no-repeat bg-center text-white bg-cover`}>
            <div className='p-5 py-20 md:p-40 m-auto text-center bg-gradient-to-r from-[#111111]  to-[#00000000]'>
                <div className={`${openSans_head.className} text-xl md:text-3xl`}>
                    EMPOWER YOUR TRADING JOURNEY WITH NIFTYTRADER
                </div>
                <div className={`mt-4 md:mt-6 ${poppins_sub.className} text-sm md:text-lg`}>
                    Find Winning Stock Faster with NiftyTrader's Advanced Stock Screening Tool
                </div>
                <div className={`px-4 py-2 bg-white inline-block mt-4 md:mt-6 rounded text-sm md:text-lg text-black tracking-wider ${poppins_btn.className} font-bold`}>
                    Subscribe Now
                </div>
            </div>
        </div>

    )
}

export default Hero