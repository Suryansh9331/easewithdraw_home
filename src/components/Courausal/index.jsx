



import React, { useEffect, useRef, useState } from "react";
import carousal1 from "../../assets/images/carousal1.png";
import carousal2 from "../../assets/images/carousal2.png";
import carousal3 from "../../assets/images/carousal3.png";
import carousal4 from "../../assets/images/carousal4.png";
import carousal5 from "../../assets/images/carousal5.png";
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

const cardData = [...originalCards, ...originalCards];

export default function RedotPayScroller() {
  const containerRef = useRef(null);
  const scrollInterval = 2000;
  const [cardWidth, setCardWidth] = useState(280);
  const [centerIdx, setCenterIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth < 768 ? window.innerWidth - 40 : 280;
      setCardWidth(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollLoop = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const maxScrollLeft = container.scrollWidth / 2;

        container.scrollBy({ left: cardWidth, behavior: "smooth" });

        setProgress((prev) => {
          const next = prev + 100 / originalCards.length;
          return next >= 100 ? 0 : next;
        });

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollLeft = 0;
        }
      }
    }, scrollInterval);

    return () => clearInterval(scrollLoop);
  }, [cardWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const center = Math.round(scrollLeft / cardWidth) + 1;
        setCenterIdx(center % originalCards.length);
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [cardWidth]);

  return (
    <div className="w-full py-30 bg-white">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <h2 className="text-5xl font-bold text-center mb-10 lg:mb-20 text-pink-500">
        PAY, SEND, TRANSFER with{" "}
        <span className="text-black">Easewithdraw</span>
      </h2>

      <div className="flex justify-center">
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth w-full max-w-[800px] px-4 py-4 snap-x snap-mandatory"
        >
          {cardData.map((card, index) => {
            const actualIndex = index % originalCards.length;
            const isCenter = actualIndex === centerIdx;

            return (
              <div
                key={index}
                className={`w-[250px] md:min-w-[250px] min-w-full sm:min-w-full h-[350px] py-4 rounded-3xl bg-cover bg-center shadow-lg flex-shrink-0 relative transform transition-all duration-300 hover:scale-105 origin-center snap-center ${
                  isCenter ? "scale-105 z-10" : ""
                }`}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 rounded-3xl bg-black/30 z-10" />
                <div className="absolute inset-0 rounded-xl text-white p-4 flex flex-col justify-between z-20">
                  <div>
                    <div className="bg-black bg-opacity-20 rounded-full p-2  inline-block mb-3">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-30 h-1 relative bg-gray-300 rounded overflow-hidden">
          <div
            className="absolute h-full bg-pink-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

