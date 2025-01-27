import React from "react";
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "700",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

function FloatingRibbon() {
  return (
    <>
      <div className="relative top-[-40px] w-[100vw] lg:top-[-100px]">
        <div className="absolute left-[10%] top-[-20%] w-[80vw] overflow-hidden rounded-xl border bg-[#EEEEEE] lg:left-[0] lg:top-[-50%] lg:rounded-e-full">
          <div className="relative left-0 top-0 z-10 m-1 sm:m-3 lg:ps-20">
            <div className={`text-center ${openSans.className} text-[11px] sm:text-lg`}>
              CONQUER THE MARKET WITH NIFTYTRADER
            </div>
            <div className={`px-3 pt-3 text-[8px] sm:text-[10px] md:text-xs tracking-wider lg:w-[78%] text-[#333333] ${poppins.className}`} >
              Navigating the stock market can be complex and overwhelming.
              NiftyTrader simplifies your trading journey by providing essential
              tools and insights. Make informed decisions and maximize your
              potential with our powerful platform.
              <div className="mt-5">Unleash your trading edge with:</div>
              <ul className="mx-1 ps-3 mb-3 list-disc">
                <li className="list-item">
                  <span className="font-semibold">
                    Advanced Stock Screener:
                  </span>
                  <span> Find your winning trade</span>
                </li>
                <li className="list-item">
                  <span className="font-semibold">Option Screener</span>
                  <span> Master the art of options trading.</span>
                </li>
                <li className="list-item">
                  <span className="font-semibold">Live Market Screener</span>
                  <span> Stay ahead of the curve</span>
                </li>
                <li className="list-item">
                  <span className="font-semibold">Option Simulator</span>
                  <span> Practice your strategies risk-free</span>
                </li>
                <li className="list-item">
                  <span className="font-semibold">Option Chain</span>
                  <span> Analyze options like a pro</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-[-20%] right-[-10%] z-0 h-[150px] w-[150px] rounded-full bg-white md:h-[220px] md:w-[220px] lg:right-3 lg:top-3 lg:h-[90%]"></div>
        </div>
      </div>
      <div
        className={`px-3 pt-3 text-[8px] opacity-0 sm:text-[10px] md:text-[13px] lg:w-[70%] ${poppins.className}`}
      >
        Navigating the stock market can be complex and overwhelming. NiftyTrader
        simplifies your trading journey by providing essential tools and
        insights. Make informed decisions and maximize your potential with our
        powerful platform.
        <div className="mt-5">Unleash your trading edge with:</div>
        <ul className="mx-1 mb-3 list-disc">
          <li className="list-item">
            <span className="font-semibold">Advanced Stock Screener:</span>
            <span> Find your winning trade</span>
          </li>
          <li className="list-item">
            <span className="font-semibold">Option Screener</span>
            <span> Master the art of options trading.</span>
          </li>
          <li className="list-item">
            <span className="font-semibold">Live Market Screener</span>
            <span> Stay ahead of the curve</span>
          </li>
          <li className="list-item">
            <span className="font-semibold">Option Simulator</span>
            <span> Practice your strategies risk-free</span>
          </li>
          <li className="list-item">
            <span className="font-semibold">Option Simulator</span>
            <span> Practice your strategies risk-free</span>
          </li>
          <li className="list-item">
            <span className="font-semibold">Option Simulator</span>
            <span> Practice your strategies risk-free</span>
          </li>

          <div className="sm:hidden">
            {Array(2)
              .fill(null)
              .map((ii, i) => (
                <li className="list-item" key={i}>
                  <span className="font-semibold">Option Chain</span>
                  <span> Analyze options like a pro</span>
                </li>
              ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default FloatingRibbon;
