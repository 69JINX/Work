import React from "react";
import { FaPlay } from "react-icons/fa";
import { Open_Sans, Poppins } from "next/font/google";

const poppins_bold = Poppins({
    subsets: ["latin"],
    weight: "600",
});
const poppins_light = Poppins({
    subsets: ["regular"],
    weight: "400",
});

function Vector(props) {
    return (
        <div className={`my-10 flex justify-center items-center md:justify-between ${props.align ? "" : "flex-row-reverse"}`}>
            <div className="md:w-[45vw]">
                <div className={`${poppins_bold.className} text-[10px] text-[#236AD4] md:text-sm`}>
                    {props.heading}
                </div>
                <div className={`${poppins_bold.className} mt-1 text-sm md:text-xl`}>
                    {props.sub_heading}
                </div>
                <div>
                    <img src={props.vector} className="m-auto block w-[300px] md:hidden" />
                </div>
                <div className={`${poppins_light.className} mt-6 text-[10px] md:text-xs tracking-wide text-[#333333]`} >
                    {props.para}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start">
                    <div className="group relative me-4 cursor-pointer rounded-md bg-[#236AD4] px-6 py-3 text-[10px] duration-500 hover:scale-110 tracking-wider text-[#236AD4] md:text-sm">
                        Try it Out
                        <div className="absolute right-[-10%] group-hover:border-t-[1px] border-[#6160603a] top-[-20%] h-[60%] w-[20%] rounded-[50%] bg-[#ffffff68] backdrop-blur-[1px] duration-300 group-hover:right-[7%] group-hover:h-[105%] group-hover:w-[85%] group-hover:rounded-[10%]"></div>
                        <div className="absolute left-0 top-0 h-[100%] w-[100%] content-center text-center text-[10px] text-white md:text-sm">
                            Try it out &rarr;
                        </div>
                    </div>
                    <div className="demo-btn group relative my-3 me-2 flex h-[45px] w-[120px] cursor-pointer items-center rounded-md bg-[#ffffff] px-4 py-2 text-[10px] font-medium text-white duration-300 hover:bg-[#236AD4] sm:w-[140px] md:w-[160px] md:text-sm">
                        <div className="absolute left-0 top-0 flex h-[100%] w-[100%] items-center justify-center rounded-md border bg-white duration-300 group-hover:left-[-3%] group-hover:top-[-8%]">
                            <div className="me-1">
                                <FaPlay color="#236AD4" size={10} />
                            </div>
                            <div className="text-[#236AD4]">Watch Demo Video</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={props.vector} className="hidden w-[400px] md:block" />
            </div>
        </div>
    );
}

export default Vector;
