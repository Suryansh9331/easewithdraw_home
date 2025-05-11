import { useState, useEffect } from "react";
import CountUp from "react-countup";

import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.png";
import telegram from "../../assets/images/telegram.jpeg";
import starbucks from "../../assets/images/starbucks.jpeg";

import mcdonalds from "../../assets/images/mcdonald.svg";
import aliexpress from "../../assets/images/ali.svg";
import telegram2 from "../../assets/images/telegram.svg";
import starbucks2 from "../../assets/images/starbucks.svg";
import uber from "../../assets/images/uber.svg";
import paypal from "../../assets/images/paypal.svg";
import amazon from "../../assets/images/amazon.svg";
import youtube from "../../assets/images/youtube.svg";
import tiktok from "../../assets/images/tiktok.svg";
import facebook from "../../assets/images/facebook.svg";
import kfc from "../../assets/images/kfc.svg";

export default function CryptoLandingPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgrounds = [hero1, hero2];

  const brandLogos = [
    { name: "McDonald's", logo: mcdonalds },
    { name: "AliExpress", logo: aliexpress },
    { name: "Telegram", logo: telegram2 },
    { name: "Starbucks", logo: starbucks2 },
    { name: "Uber", logo: uber },
    { name: "PayPal", logo: paypal },
    { name: "Amazon", logo: amazon },
    { name: "tiktok", logo: tiktok },
    { name: "YouTube", logo: youtube },
    { name: "Facebook", logo: facebook },
    { name: "KFC", logo: kfc },
  ];

  const transactions = [
    { service: "Telegram", amount: -9.9 },
    { service: "Starbucks Coffee", amount: -5.8 },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = backgrounds[0];

    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-6 sm:pt-4 md:pt-8 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-2 md:px-12">
        <div className="flex-1 w-full h-auto flex flex-col md:flex-col  lg:flex-row justify-between items-start   md:py-16">
          {/* Left Section */}
          <div className="w-full md:w-3/4 pt-10  ">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 ">
              SPEND CRYPTO LIKE FIAT
            </h1>
            <ul className="space-y-2">
              <li className="text-white text-sm sm:text-base md:text-xl font-medium">
                Seamless blockchain payments with your crypto
              </li>
              <li className="text-white text-sm sm:text-base md:text-xl font-medium">
                Trusted by 3.5+ Million Globally
              </li>
              <li className="text-white text-sm sm:text-base md:text-xl font-medium">
                Supports BTC, ETH, USDC, USDT, and more
              </li>
              <li className="text-white text-sm sm:text-base md:text-xl font-medium">
                Deposit via Bitcoin, Ethereum, Solana, BSC, Polygon, Tron ,Arbitrum, and others
              </li>
            </ul>
            <button className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800">
              Get the app
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 bg-transparent text-white">
            <div className=" mt-4 lg:mt-60 lg:mr-45 ">
              <p className="text-xs sm:text-sm mb-1">Total Balance</p>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2">
                <CountUp end={3868.24} prefix="$ " decimals={2} duration={3} />
              </h2>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-4 ">
              {transactions.map((tx, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src={tx.service === "Telegram" ? telegram : starbucks}
                      alt={tx.service}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3"
                    />
                    <span className="text-sm sm:text-base">{tx.service}</span>
                  </div>
                  <span className="text-sm sm:text-base text-white-400 font-bold lg:mr-16">
                    <CountUp
                      end={Math.abs(tx.amount)}
                      prefix="- $ "
                      decimals={2}
                      duration={2}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full mt-auto pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10">
          <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6  sm:ml-4 md:ml-2 lg:ml-4">
            Accepted by 130M+ merchants worldwide
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex  animate-marquee">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={index} className="  flex-shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-14 sm:h-10 md:h-16 lg:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


