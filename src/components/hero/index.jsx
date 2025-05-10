


import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

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

// export default function CryptoLandingPage() {
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);

//   const backgrounds = [hero1, hero2];

//   const brandLogos = [
//     { name: 'McDonald\'s', logo: mcdonalds },
//     { name: 'AliExpress', logo: aliexpress },
//     { name: 'Telegram', logo: telegram2 },
//     { name: 'Starbucks', logo: starbucks2 },
//     { name: 'Uber', logo: uber },
//     { name: 'PayPal', logo: paypal },
//     { name: 'Amazon', logo: amazon },
//     { name: 'YouTube', logo: youtube },
//     { name: 'Facebook', logo: facebook },
//     { name: 'KFC', logo: kfc },
//   ];

//   const transactions = [
//     { service: 'Telegram', amount: -9.9 },
//     { service: 'Starbucks Coffee', amount: -5.8 },
//   ];

//   useEffect(() => {
//     const img = new Image();
//     img.src = backgrounds[0];

//     const interval = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden pt-8 sm:pt-4 md:pt-10">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 bg-black bg-opacity-30 z-0"
//         style={{
//           backgroundImage: `url(${backgrounds[currentBgIndex]})`,
//           opacity: 1,
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 flex flex-col min-h-screen">
//         <div className="flex-1 px-4 sm:px-8 md:px-12 pt-6 sm:pt-8 md:pt-12 pb-4 max-w-6xl mx-auto w-full flex flex-col md:flex-row sm:flex-col items-start md:items-start md:justify-between">
//           {/* Left Section */}
//           <div className="md:w-1/2 mb-8  md:mb-8 ">
//             <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
//               SPEND CRYPTO
//               <br />
//               LIKE FIAT
//             </h1>
//             <p className="text-white mb-2 font-semibold text-xs sm:text-sm md:text-base">
//               Seamless blockchain payments with your crypto
//             </p>
//             <p className="text-white mb-2 font-semibold text-xs sm:text-sm md:text-base">
//               Trusted by 3.5+ Million Globally
//             </p>
//             <p className="text-white mb-2 font-semibold text-xs sm:text-sm md:text-base">
//               Supports BTC, ETH, USDC, USDT, and more
//             </p>
//             <p className="text-white mb-2 font-semibold text-xs sm:text-sm md:text-base">
//               Deposit via Bitcoin, Ethereum, Solana, BSC, Polygon, Tron, Arbitrum, and others
//             </p>

//             <button className="mt-6 sm:mt-8 md:mt-10 bg-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-800 text-sm sm:text-base">
//               Get the app
//             </button>
//           </div>

//           {/* Right Section - Balance & Transactions */}
//           <div className="w-full md:w-1/3 mt-6 sm:mt-10 md:mt-40 bg-transparent text-white">
//             <div className="mb-6 sm:mb-8">
//               <p className="text-xs sm:text-sm mb-1">Total Balance</p>
//               <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
//   <CountUp end={3868.24} prefix="$ " decimals={2} duration={3} />
// </h2>
            
//             </div>

//             {/* Recent Transactions */}
//             <div className="mb-6 sm:mb-10 md:mb-16">
//               {transactions.map((tx, index) => (
//                 <div key={index} className="flex justify-between items-center mb-4">
//                   <div className="flex items-center">
//                     <img
//                       src={tx.service === "Telegram" ? telegram : starbucks}
//                       className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2 sm:mr-3"
//                       alt={tx.service}
//                     />
//                     <span className="text-sm sm:text-base">{tx.service}</span>
//                   </div>
//                   <span className="text-sm sm:text-base text-red-400 font-semibold">
//                     <CountUp
//                       end={Math.abs(tx.amount)}
//                       prefix="- $ "
//                       decimals={2}
//                       duration={2}
//                     />
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="pt-2 sm:pt-4 pb-4 sm:pb-8 bg-opacity-70 w-full mt-auto">
//           <p className="text-white text-left mb-4 sm:mb-6 font-semibold md:ml-24 ml-4 sm:pl-8 md:pl-30 text-sm sm:text-base">
//             Accepted by 130M+ merchants worldwide
//           </p>

//           {/* Brand Logos Marquee */}
//           <div className="overflow-hidden w-full mt-4 sm:mt-6 md:mt-8">
//             <div className="flex animate-marquee">
//               {[...brandLogos, ...brandLogos].map((brand, index) => (
//                 <div key={index} className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0">
//                   <img src={brand.logo} alt={brand.name} className="h-8 sm:h-12 md:h-16 object-contain" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





export default function CryptoLandingPage() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgrounds = [hero1, hero2];

  const brandLogos = [
    { name: 'McDonald\'s', logo: mcdonalds },
    { name: 'AliExpress', logo: aliexpress },
    { name: 'Telegram', logo: telegram2 },
    { name: 'Starbucks', logo: starbucks2 },
    { name: 'Uber', logo: uber },
    { name: 'PayPal', logo: paypal },
    { name: 'Amazon', logo: amazon },
    { name: 'tiktok', logo: tiktok },
    { name: 'YouTube', logo: youtube },
    { name: 'Facebook', logo: facebook },
    { name: 'KFC', logo: kfc },
  ];

  const transactions = [
    { service: 'Telegram', amount: -9.9 },
    { service: 'Starbucks Coffee', amount: -5.8 },
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
    <div className="relative w-full min-h-screen overflow-hidden pt-8 sm:pt-10 md:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 bg-black/50"
        style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex-1 w-full flex flex-col md:flex-row justify-between items-start py-6 sm:py-10 md:py-16">
          {/* Left Section */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 sm:mb-8">
              SPEND CRYPTO
             
              LIKE FIAT
            </h1>
            <ul className="space-y-2">
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">Seamless blockchain payments with your crypto</li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">Trusted by 3.5+ Million Globally</li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">Supports BTC, ETH, USDC, USDT, and more</li>
              <li className="text-white text-sm sm:text-base md:text-lg font-medium">
                Deposit via Bitcoin, Ethereum, Solana, BSC, Polygon, Tron, Arbitrum, and others
              </li>
            </ul>
            <button className="mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800">
              Get the app
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 mt-6 md:mt-0 bg-transparent text-white">
            <div className="mb-8 lg:mt-50">
              <p className="text-xs sm:text-sm mb-1">Total Balance</p>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold">
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
                    <CountUp end={Math.abs(tx.amount)} prefix="- $ " decimals={2} duration={2} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full mt-auto pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-10">
          <p className="text-white text-sm sm:text-base font-semibold mb-4 sm:mb-6 ml-2 sm:ml-6 md:ml-12">
            Accepted by 130M+ merchants worldwide
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex  animate-marquee">
              {[...brandLogos, ...brandLogos].map((brand, index) => (
                <div key={index} className="  flex-shrink-0">
                  <img src={brand.logo} alt={brand.name} className="h-14 sm:h-10 md:h-14 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
