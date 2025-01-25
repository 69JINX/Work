import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Open_Sans, Poppins } from 'next/font/google'

const poppins_bold = Poppins({
    subsets: ['latin'],
    weight: '600'
});
const poppins_light = Poppins({
    subsets: ['latin'],
    weight: '300'
});

function Vector(props) {
    return (
        <div className={`flex md:justify-between justify-center my-10 ${props.align ? '' : 'flex-row-reverse'}`}>
            <div className='md:w-[40vw]'>
                <div className={`${poppins_bold.className} text-[#236AD4] md:text-[13px] text-[10px]`}>
                    {props.heading}
                </div>
                <div className={`${poppins_bold.className} text-sm md:text-lg mt-1`}>
                    {props.sub_heading}
                </div>
                <div>
                    <img src={props.vector} className='w-[300px] md:hidden block m-auto' />
                </div>
                <div className={`${poppins_light.className} text-[8px] md:text-[12px] mt-4`}>
                    {props.para}
                </div>
                <div className='flex items-center justify-center md:justify-start mt-5'>
                    <div className='relative py-2 px-4 text-white md:text-sm text-[10px] group tracking-wider rounded-md me-4 bg-[#236AD4] cursor-pointer'>Try it Out
                        <div className='w-[20px] h-[20px] absolute top-[-10%] right-[-10%] duration-500 group-hover:top-[60%] backdrop-blur-[1px] bg-[#ffffff68] rounded-full'></div>
                    </div>
                    <div className='flex md:text-sm text-[10px] items-center py-2 px-4 text-white bg-white font-medium rounded-md me-2 border-black border btn-shadow cursor-pointer'>
                        <div className='me-1'><FaPlay color='#236AD4' size={10} /></div>
                        <div className='text-[#236AD4]'>Watch Demo Video</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={props.vector} className='w-[400px] hidden md:block' />
            </div>

        </div>
    )
}

export default Vector