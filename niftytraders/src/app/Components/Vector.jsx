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
                <div className='flex items-center flex-wrap justify-center md:justify-start mt-5'>
                    <div className='relative py-2 px-4 md:text-sm text-[10px] group tracking-wider rounded-md me-4 bg-[#236AD4] cursor-pointer group text-[#236AD4]'>Try it Out
                        <div className='w-[20%] h-[60%] absolute top-[-20%] right-[-10%] group-hover:right-[10%] group-hover:h-[100%] group-hover:w-[80%] duration-300 group-hover:rounded-[10%] backdrop-blur-[1px] bg-[#ffffff68] rounded-[50%]'></div>
                        <div className='absolute top-0 left-0 h-[100%] w-[100%] text-center content-center md:text-sm text-[10px] text-white'>Try it out</div>
                    </div>
                    <div className='relative group my-3 flex md:text-sm text-[10px] items-center h-[35px] w-[120px] sm:w-[140px] md:w-[160px] py-2 px-4 duration-300 text-white bg-[#ffffff] hover:bg-[#236AD4] font-medium rounded-md me-2 demo-btn cursor-pointer'>
                        <div className='absolute border duration-300 h-[100%] w-[100%] top-0 left-0 group-hover:top-[-8%] group-hover:left-[-3%] flex items-center rounded-md justify-center bg-white'>
                            <div className='me-1'><FaPlay color='#236AD4' size={10} /></div>
                            <div className='text-[#236AD4]'>Watch Demo Video</div>
                        </div>
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