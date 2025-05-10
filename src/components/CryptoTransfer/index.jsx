












// import { useState, useEffect, useRef } from 'react';
// import transfer from "../../assets/images/transfer.png";

// const CryptoToFiatBanner = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (bannerRef.current) observer.observe(bannerRef.current);
//     return () => {
//       if (bannerRef.current) observer.unobserve(bannerRef.current);
//     };
//   }, []);

//   const countryFlags = [
//     { country: "Brazil", flag: "🇧🇷", top: "20%", left: "15%" },
//     { country: "UAE", flag: "🇦🇪", top: "30%", right: "15%" },
//     { country: "Romania", flag: "🇷🇴", top: "45%", left: "20%" },
//     { country: "Thailand", flag: "🇹🇭", top: "52%", right: "25%" },
//     { country: "Saudi Arabia", flag: "🇸🇦", top: "60%", left: "17%" },
//   ];

//   return (
//     <div
//       ref={bannerRef}
//       className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 lg:p-16 bg-white relative overflow-hidden"
//     >
//       {/* Background world map */}
//       <div
//         className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 bg-repeat-space"
//         style={{ backgroundImage: "url('/api/placeholder/400/400')" }}
//       ></div>

//       {/* Left - Image with flags */}
//       <div className="relative w-full md:w-3/4 lg:w-1/3 mb-6 lg:mb-0">
//         <div className="relative">
//           <img
//             src={transfer}
//             alt="Transfer"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-lg shadow-lg"
//           />

//           {countryFlags.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute flex items-center gap-2 bg-white text-black p-2 rounded-full shadow-md transition-all duration-700 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//               }`}
//               style={{
//                 top: item.top,
//                 left: item.left,
//                 right: item.right,
//                 transitionDelay: `${index * 200}ms`,
//               }}
//             >
//               <span>{item.flag}</span>
//               <span className="text-xs sm:text-sm font-medium">{item.country}</span>
//             </div>
//           ))}

//           {/* Arrow image */}
//           <img
//             src="/api/placeholder/50/50"
//             alt="Arrow"
//             className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12"
//           />
//         </div>
//       </div>

//       {/* Right - Text */}
//       <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black leading-tight">
//           CRYPTO TO FIAT INTERNATIONAL TRANSFER
//         </h1>

//         <p className="text-base sm:text-lg mb-6 text-black">
//           Transfer fiat with your crypto to anyone anywhere in the world
//         </p>

//         <ul className="mb-6 space-y-3 text-left">
//           <li className="flex items-center text-black">
//             <span className="mr-2 text-lg">•</span>
//             <span>Direct transfer with crypto</span>
//           </li>
//           <li className="flex items-center text-black">
//             <span className="mr-2 text-lg">•</span>
//             <span>Super competitive commission rate</span>
//           </li>
//           <li className="flex items-center text-black">
//             <span className="mr-2 text-lg">•</span>
//             <span>Instant Execution</span>
//           </li>
//         </ul>

//         <a
//           href="#"
//           className="inline-block border-2 border-black text-black font-medium py-2 px-6 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
//         >
//           Learn more
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CryptoToFiatBanner;





import { useState, useEffect, useRef } from "react";
import transfer from "../../assets/images/transfer.png";
import plane from "../../assets/images/plane.png";
import WorldMap from "../../assets/images/worldMap.jpeg";
const CryptoToFiatBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = bannerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const countryFlags = [
    { country: "Brazil", flag: "🇧🇷", top: "20%", left: "15%" },
    { country: "UAE", flag: "🇦🇪", top: "30%", right: "15%" },
    { country: "Romania", flag: "🇷🇴", top: "45%", left: "20%" },
    { country: "Thailand", flag: "🇹🇭", top: "52%", right: "25%" },
    { country: "Saudi Arabia", flag: "🇸🇦", top: "60%", left: "17%" },
  ];

  return (
    <div
      ref={bannerRef}
      className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 lg:p-16  relative overflow-hidden"
    >
      {/* World map background */}
      <div
        className="absolute top-0 right-0 w-full lg:w-1/2 h-7/9  z-0"
        style={{ backgroundImage: `url(${WorldMap})` }}
      ></div>

      {/* LEFT: Animated person image */}
      <div
        className={`relative w-full md:w-3/4 lg:w-1/3 lg:ml-36 mb-6 lg:mb-0 transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="relative">
          <img
            src={transfer}
            alt="Transfer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-lg shadow-lg"
          />

          {countryFlags.map((item, index) => (
            <div
              key={index}
              className={`absolute flex items-center gap-2 bg-white text-black p-2 rounded-full shadow-md transition-all duration-700 ease-in-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-gray-300 text-lg">
                {item.flag}
              </div>
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {item.country}
              </span>
            </div>
          ))}

          {/* Optional: Arrow */}
        {/* Animated "flying plane" arrow image */}
<img
  src={plane}
  alt="Arrow"
  className={`absolute  sm:-bottom-16 sm:-right-12 -bottom-8 -right-4   w-30 h-30 sm:w-48 sm:h-48 transition-all duration-3000 ease-in-out transform ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
  }`}
/>
        </div>
      </div>

      {/* RIGHT: Text + button - animate from left */}
      <div
        className={`w-full lg:w-1/2 lg:pl-8 text-center lg:text-left transition-all duration-700 ease-in-out transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black leading-tight">
          CRYPTO TO FIAT INTERNATIONAL TRANSFER
        </h1>

        <p className="text-xl sm:text-2xl  mb-6 text-black font-semibold ">
          Transfer fiat with your crypto to anyone anywhere in the world
        </p>

        <ul className="mb-6 space-y-3 text-left">
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">Direct transfer with crypto</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">Super competitive commission rate</span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">Instant Execution</span>
          </li>
        </ul>

        <a
          href="#"
          className="inline-block border-2 border-black text-black font-medium py-2 px-6 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CryptoToFiatBanner;
