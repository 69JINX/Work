import React from 'react'
import { Open_Sans, Poppins } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '700'
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: '300'
});

function FloatingRibbon() {
    return (
        <>
            <div className='relative w-[100vw] top-[-40px] lg:top-[-100px]'>
                <div className='absolute top-[-20%] lg:top-[-50%] left-[10%] lg:left-[0] w-[80vw] rounded-xl lg:rounded-e-full border bg-[#EEEEEE] overflow-hidden'>
                    <div className='relative lg:ps-20 top-0 left-0 z-10 m-1 sm:m-3'>
                        <div className={`text-center ${openSans.className} text-[11px] sm:text-sm`}>
                            CONQUER THE MARKET WITH NIFTYTRADER
                        </div>
                        <div className={`pt-3 px-3 lg:w-[70%] md:text-[13px] sm:text-[10px] text-[8px] ${poppins.className}`}>
                            Navigating the stock market can be complex and overwhelming. NiftyTrader simplifies your trading journey by providing essential tools and insights. Make informed decisions and maximize your potential with our powerful platform.
                            <div className='mt-5'>Unleash your trading edge with:</div>
                            <ul className='list-disc mx-1 mb-3'>
                                <li className='list-item'>
                                    <span className='font-semibold'>Advanced Stock Screener:</span>
                                    <span> Find your winning trade</span>
                                </li>
                                <li className='list-item'>
                                    <span className='font-semibold'>Option Screener</span>
                                    <span> Master the art of options trading.</span>
                                </li>
                                <li className='list-item'>
                                    <span className='font-semibold'>Live Market Screener</span>
                                    <span> Stay ahead of the curve</span>
                                </li>
                                <li className='list-item'>
                                    <span className='font-semibold'>Option Simulator</span>
                                    <span> Practice your strategies risk-free</span>
                                </li>
                                <li className='list-item'>
                                    <span className='font-semibold'>Option Chain</span>
                                    <span> Analyze options like a pro</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='z-0 absolute h-[150px] md:h-[220px] lg:h-[90%] rounded-full bg-white bottom-[-20%] lg:top-3 right-[-10%] lg:right-3 md:w-[220px] w-[150px]'>
                    </div>

                </div>

            </div>
            <div className={`pt-3 opacity-0 px-3 lg:w-[70%] md:text-[13px] sm:text-[10px] text-[8px] ${poppins.className}`}>
                Navigating the stock market can be complex and overwhelming. NiftyTrader simplifies your trading journey by providing essential tools and insights. Make informed decisions and maximize your potential with our powerful platform.
                <div className='mt-5'>Unleash your trading edge with:</div>
                <ul className='list-disc mx-1 mb-3'>
                    <li className='list-item'>
                        <span className='font-semibold'>Advanced Stock Screener:</span>
                        <span> Find your winning trade</span>
                    </li>
                    <li className='list-item'>
                        <span className='font-semibold'>Option Screener</span>
                        <span> Master the art of options trading.</span>
                    </li>
                    <li className='list-item'>
                        <span className='font-semibold'>Live Market Screener</span>
                        <span> Stay ahead of the curve</span>
                    </li>
                    <li className='list-item'>
                        <span className='font-semibold'>Option Simulator</span>
                        <span> Practice your strategies risk-free</span>
                    </li>
                    <li className='list-item'>
                        <span className='font-semibold'>Option Simulator</span>
                        <span> Practice your strategies risk-free</span>
                    </li>
                    <li className='list-item'>
                        <span className='font-semibold'>Option Simulator</span>
                        <span> Practice your strategies risk-free</span>
                    </li>



                    <div className='sm:hidden'>
                        {
                            Array(2).fill(null).map((ii, i) => (
                                <li className='list-item' key={i}>
                                    <span className='font-semibold'>Option Chain</span>
                                    <span> Analyze options like a pro</span>
                                </li>
                            ))
                        }
                    </div>

                </ul>
            </div>
        </>
    )
}

export default FloatingRibbon