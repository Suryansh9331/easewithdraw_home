



// import React, { useEffect, useRef, useState } from "react";
// import carousal1 from "../../assets/images/carousal1.jpg";
// import carousal2 from "../../assets/images/carousal2.jpg";
// import carousal3 from "../../assets/images/carousal3.jpg";
// import carousal4 from "../../assets/images/carousal4.jpg";
// import carousal5 from "../../assets/images/carousal5.jpg";
// import {
//   FaLock,
//   FaCreditCard,
//   FaPaperPlane,
//   FaExchangeAlt,
//   FaGlobe,
// } from "react-icons/fa";

// const originalCards = [
//   {
//     title: "Secure Custodian",
//     description: "Licensed Trust Company with USD 42M insurance coverage",
//     image: carousal1,
//     icon: <FaLock size={20} className="text-white" />,
//   },
//   {
//     title: "PAY",
//     description:
//       "Make payments at 130M+ merchants globally with our crypto card, enabling a seamless blockchain payment experience",
//     image: carousal2,
//     icon: <FaCreditCard size={20} className="text-white" />,
//   },
//   {
//     title: "SEND",
//     description:
//       "Send and receive crypto with no fees, enhancing your crypto payment & transactions across borders",
//     image: carousal3,
//     icon: <FaPaperPlane size={20} className="text-white" />,
//   },
//   {
//     title: "TRANSFER",
//     description:
//       "Effortlessly transfer Fiat with RedotPay crypto, bridging traditional finance and crypto payment solutions (Coming soon)",
//     image: carousal4,
//     icon: <FaExchangeAlt size={20} className="text-white" />,
//   },
//   {
//     title: "DAPP",
//     description: "Connect your wallet for deposit-free seamless payment",
//     image: carousal5,
//     icon: <FaGlobe size={20} className="text-white" />,
//   },
// ];

// const cardData = [...originalCards, ...originalCards];

// export default function RedotPayScroller() {
//   const containerRef = useRef(null);
//   const scrollInterval = 2000;
//   const [cardWidth, setCardWidth] = useState(280);
//   const [centerIdx, setCenterIdx] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth < 768 ? window.innerWidth - 40 : 280;
//       setCardWidth(width);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const scrollLoop = setInterval(() => {
//       if (containerRef.current) {
//         const container = containerRef.current;
//         const maxScrollLeft = container.scrollWidth / 2;

//         container.scrollBy({ left: cardWidth, behavior: "smooth" });

//         setProgress((prev) => {
//           const next = prev + 100 / originalCards.length;
//           return next >= 100 ? 0 : next;
//         });

//         if (container.scrollLeft >= maxScrollLeft) {
//           container.scrollLeft = 0;
//         }
//       }
//     }, scrollInterval);

//     return () => clearInterval(scrollLoop);
//   }, [cardWidth]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (containerRef.current) {
//         const scrollLeft = containerRef.current.scrollLeft;
//         const center = Math.round(scrollLeft / cardWidth) + 1;
//         setCenterIdx(center % originalCards.length);
//       }
//     };

//     containerRef.current.addEventListener("scroll", handleScroll);
//     return () => {
//       containerRef.current?.removeEventListener("scroll", handleScroll);
//     };
//   }, [cardWidth]);

//   return (
//     <div className="w-full py-30 bg-white">
//       <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>

//       <h2 className="text-5xl font-bold text-center mb-10 lg:mb-20 text-pink-500">
//         PAY, SEND, TRANSFER with{" "}
//         <span className="text-black">Easewithdraw</span>
//       </h2>

//       <div className="flex justify-center">
//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth w-full max-w-[800px] px-4 py-4 snap-x snap-mandatory"
//         >
//           {cardData.map((card, index) => {
//             const actualIndex = index % originalCards.length;
//             const isCenter = actualIndex === centerIdx;

//             return (
//               <div
//                 key={index}
//                 className={`w-[250px] md:min-w-[250px] min-w-full sm:min-w-full h-[350px] py-4 rounded-3xl bg-cover bg-center shadow-lg flex-shrink-0 relative transform transition-all duration-300 hover:scale-105 origin-center snap-center ${
//                   isCenter ? "scale-105 z-10" : ""
//                 }`}
//                 style={{ backgroundImage: `url(${card.image})` }}
//               >
//                 <div className="absolute inset-0 rounded-3xl bg-black/30 z-10" />
//                 <div className="absolute inset-0 rounded-xl text-white p-4 flex flex-col justify-between z-20">
//                   <div>
//                     <div className="bg-black bg-opacity-20 rounded-full p-2  inline-block mb-3">
//                       {card.icon}
//                     </div>
//                     <h3 className="text-xl font-bold">{card.title}</h3>
//                   </div>
//                   <p className="text-sm">{card.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="flex justify-center mt-10">
//         <div className="w-30 h-1 relative bg-gray-300 rounded overflow-hidden">
//           <div
//             className="absolute h-full bg-pink-500 transition-all duration-500"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useRef, useState, useCallback } from "react";
import carousal1 from "../../assets/images/carousal1.jpg";
import carousal2 from "../../assets/images/carousal2.jpg";
import carousal3 from "../../assets/images/carousal3.jpg";
import carousal4 from "../../assets/images/carousal4.jpg";
import carousal5 from "../../assets/images/carousal5.jpg";
import {
  FaLock,
  FaCreditCard,
  FaPaperPlane,
  FaExchangeAlt,
  FaGlobe,
} from "react-icons/fa";

const originalCards = [
  {
    title: "Secure Custodian",
    description: "Licensed Trust Company with USD 42M insurance coverage",
    image: carousal1,
    icon: <FaLock size={20} className="text-white" />,
  },
  {
    title: "PAY",
    description:
      "Make payments at 130M+ merchants globally with our crypto card, enabling a seamless blockchain payment experience",
    image: carousal2,
    icon: <FaCreditCard size={20} className="text-white" />,
  },
  {
    title: "SEND",
    description:
      "Send and receive crypto with no fees, enhancing your crypto payment & transactions across borders",
    image: carousal3,
    icon: <FaPaperPlane size={20} className="text-white" />,
  },
  {
    title: "TRANSFER",
    description:
      "Effortlessly transfer Fiat with RedotPay crypto, bridging traditional finance and crypto payment solutions (Coming soon)",
    image: carousal4,
    icon: <FaExchangeAlt size={20} className="text-white" />,
  },
  {
    title: "DAPP",
    description: "Connect your wallet for deposit-free seamless payment",
    image: carousal5,
    icon: <FaGlobe size={20} className="text-white" />,
  },
];

export default function RedotPayScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  
  const nextCard = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add a slight delay to ensure smooth transition starts
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % originalCards.length;
        return nextIndex;
      });
      
      // Allow transition to complete before enabling next one
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 50);
  }, [isTransitioning]);

  // Update progress when currentIndex changes
  useEffect(() => {
    setProgress((currentIndex / (originalCards.length - 1)) * 100);
  }, [currentIndex]);

  // Auto-scroll effect
  useEffect(() => {
    intervalRef.current = setInterval(nextCard, 4500);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextCard]);

  const getVisibleCards = () => {
    const prevIndex = (currentIndex - 1 + originalCards.length) % originalCards.length;
    const nextIndex = (currentIndex + 1) % originalCards.length;
    
    return [
      { card: originalCards[prevIndex], position: 'left', index: prevIndex },
      { card: originalCards[currentIndex], position: 'center', index: currentIndex },
      { card: originalCards[nextIndex], position: 'right', index: nextIndex }
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="w-full h-auto py-30 bg-white">
      <style>{`
        .card-left {
          transform: scale(0.85) translateX(20px);
          opacity: 0.7;
          z-index: 1;
        }
        .card-center {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .card-right {
          transform: scale(0.85) translateX(-20px);
          opacity: 0.7;
          z-index: 1;
        }
        .card-transition {
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-hover:hover {
          transform: scale(1.05);
        }
      `}</style>

      <h2 className="text-5xl font-bold text-center mb-10 lg:mb-20 text-pink-500">
        PAY, SEND, TRANSFER with{" "}
        <span className="text-black">Easewithdraw</span>
      </h2>

      <div className="flex justify-center items-center px-4 py-12">
        <div className="relative w-full max-w-4xl h-96 flex justify-center items-center">
          {visibleCards.map(({ card, position, index }) => (
            <div
              key={`${index}-${position}`}
              className={` w-80 h-96 py-4 rounded-3xl bg-cover bg-center shadow-lg flex-shrink-0 relative card-transition card-${position}`}
              style={{ 
                backgroundImage: `url(${card.image})`,
                transitionDelay: position === 'center' ? '0ms' : '50ms'
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-black/30 z-10" />
              <div className="absolute inset-0 rounded-3xl text-white p-6 flex flex-col justify-between z-20">
                <div>
                  <div className="bg-black bg-opacity-20 rounded-full p-3 inline-block mb-4">
                    {card.icon}
                  </div>
                  <h3 className={`font-bold mb-3 ${position === 'center' ? 'text-2xl' : 'text-xl'}`}>
                    {card.title}
                  </h3>
                </div>
                <p className={`leading-relaxed ${position === 'center' ? 'text-sm' : 'text-xs'}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-32 h-2 relative bg-gray-300 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-pink-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${((currentIndex + 1) / originalCards.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {originalCards.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-pink-500 w-4' : 'bg-gray-300'
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  // Reset and restart auto-scroll when manually clicking
                  if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(nextCard, 2500);
                  }
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 500);
                }, 50);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}