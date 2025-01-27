import React from "react";
import Vector from "./Vector";

function Vectors() {
  return (
    <div className="Vectors my-10 px-5 md:px-28">
      <Vector
        heading="1. Find Your Next Winning Screener"
        sub_heading="Advanced Stock Screener"
        para="Uncover profitable trading opportunities with our cutting-edge stock screener. Filter stocks based on multiple criteria, including price, volume, moving averages, and more. Identify potential winners and avoid losing trades with ease."
        vector="/Vector1.svg"
        align={true}
      />      
      <Vector
        heading="2. Master the Art of Options Trading"
        sub_heading="Option Screener"
        para="Gain a competitive edge with our powerful option screener. Analyze option chains, identify high-probability trades, and manage risk effectively. Make informed option trading decisions based on data-driven insights."
        vector="/Vector2.svg"
        align={false}
      />
      <Vector
        heading="3. Stay Ahead of the Market"
        sub_heading="Live Market Screener"
        para="Stay ahead of the market with our real-time market screener. Track price movements, volume, and other crucial indicators for multiple stocks and indices. Identify trends and make quick trading decisions."
        vector="/Vector3.svg"
        align={true}
      />
      <Vector
        heading="4. Master Options Trading Risk-Free"
        sub_heading="Option Simulator"
        para="Practice your option trading strategies risk-free with our option simulator. Experiment with different scenarios and refine your approach before committing real capital. Develop winning strategies and build confidence."
        vector="/Vector4.svg"
        align={false}
      />
      <Vector
        heading="5. Understand the Complete Option Picture"
        sub_heading="Option Chain"
        para="Get a comprehensive view of option contracts with our interactive option chain. Analyze open interest, implied volatility, and other key metrics to make well-informed option trading decisions."
        vector="/Vector5.svg"
        align={true}
      />
      <Vector
        heading="6. Identify Market Leaders and Potential Reversals"
        sub_heading="Trending OI"
        para="Stay ahead of the market with our Trending OI feature. Discover stocks with the highest open interest changes, indicating potential price movements. Make informed decisions based on market sentiment and identify potential breakout or reversal opportunities."
        vector="/Vector6.svg"
        align={false}
      />
    </div>
  );
}

export default Vectors;
