



import CountUp from "react-countup";

import telegram from "../../assets/images/telegram.jpeg";
import starbucks from "../../assets/images/starbucks.jpeg";

import paypal from "../../assets/images/Sixmembers/paypal.png"
import coinbase from "../../assets/images/Sixmembers/coinbase.png"
import nexo from "../../assets/images/Sixmembers/nexo.png"
import cashapp from "../../assets/images/Sixmembers/cashapp.png"
import robinhood from "../../assets/images/Sixmembers/robinhood.png"
import trustwallet from "../../assets/images/Sixmembers/truswallet.png"


import HeroVideo from "../../assets/Video/HeroVideo.mp4";

export default function CryptoLandingPage() {
  const brandLogos = [
    { name: "cashapp", logo: cashapp },
    { name: "coinbase", logo: coinbase },
    { name: "nexo", logo: nexo },
    { name: "robinhood", logo: robinhood },
    { name: "trustwallet", logo: trustwallet },
    { name: "PayPal", logo: paypal },
    { name: "cashapp", logo: cashapp },
    { name: "coinbase", logo: coinbase },
    { name: "nexo", logo: nexo },
    { name: "robinhood", logo: robinhood },
    { name: "trustwallet", logo: trustwallet },
    { name: "PayPal", logo: paypal },
    { name: "cashapp", logo: cashapp },
    { name: "coinbase", logo: coinbase },
    { name: "nexo", logo: nexo },
    { name: "robinhood", logo: robinhood },
    { name: "trustwallet", logo: trustwallet },
    { name: "PayPal", logo: paypal },
   
  ];

  const transactions = [
    { service: "Telegram", amount: -2.2 },
    { service: "Starbucks Coffee", amount: -3.5 },
  ];

  return (
    <div className="relative w-full h-auto overflow-hidden pt-6 sm:pt-4 md:pt-8 ">
      {/* Background Video with Overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/66 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-2 md:px-12">
        <div className="flex-1 w-full h-auto flex flex-col md:flex-col  lg:flex-row justify-between items-start md:py-16">
          {/* Left Section */}
          <div className="w-full md:w-3/4 pt-10">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              SPEND CRYPTO LIKE FIAT
            </h1>
            <ul className="space-y-1">
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">
                Seamless blockchain payments with your crypto
              </li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">
                Trusted by 3.5+ Million Globally
              </li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">
                Supports BTC, ETH, USDC, USDT, and more
              </li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">
                Deposit via Bitcoin, Ethereum, Solana, BSC, Polygon, Tron ,Arbitrum, and others
              </li>
            </ul>
            <a href="#">
              <button className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-black">
                Get Started
              </button>
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 bg-transparent text-white">
            <div className=" mt-4 lg:mt-60 lg:mr-45 ">
              <p className="text-xs sm:text-sm mb-1">Total Balance</p>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-2">
                <CountUp end={1260.24} prefix="$ " decimals={2} duration={3} />
              </h2>
            </div>

            {/* Recent Transactions */}
            <div className="space-y-4">
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
          <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6 sm:ml-4 md:ml-2 lg:ml-4">
            Accepted by 130M+ merchants worldwide
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex animate-marquee gap-14">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-6 sm:h-2 md:h-6 lg:h-10 object-contain"
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





