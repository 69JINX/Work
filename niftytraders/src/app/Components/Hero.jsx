import React from "react";
import { Open_Sans, Poppins } from "next/font/google";

const openSans_head = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});

const poppins_sub = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppins_btn = Poppins({
  subsets: ["latin"],
  weight: "600",
});

function Hero() {
  return (
    <div
      className={`bg-[url('/Hero-Image.svg')] bg-cover bg-center bg-no-repeat text-white`}
    >
      <div className="m-auto bg-gradient-to-r from-[#111111] to-[#00000000] p-5 py-20 text-center md:p-40">
        <div className={`${openSans_head.className} text-xl md:text-3xl`}>
          EMPOWER YOUR TRADING JOURNEY WITH NIFTYTRADER
        </div>
        <div
          className={`mt-4 md:mt-6 ${poppins_sub.className} text-sm md:text-lg`}
        >
          Find Winning Stock Faster with NiftyTrader's Advanced Stock Screening
          Tool
        </div>
        <div
          className={`mt-4 cursor-pointer relative overflow-hidden inline-block group rounded bg-white px-4 py-2 text-sm tracking-wider text-white md:mt-6 md:text-lg ${poppins_btn.className} font-bold`}
        >
          Subscribe Now
          <div className="w-[120%] h-[120%] absolute left-[100%] top-[-5] rounded group-hover:left-[-10] duration-500 bg-[#236AD4]"></div>
          <div className="absolute h-full w-full top-0 left-0 duration-500 text-black group-hover:text-white text-center content-center">Subscribe Now</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
