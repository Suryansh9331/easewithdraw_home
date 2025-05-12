import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

import long from "../../assets/images/long.jpg"
import happy1 from "../../assets/images/happy1.jpg"
import happy2 from "../../assets/images/happy2.jpg"
import happy3 from "../../assets/images/happy3.jpg"

// import bg_space1 from "../../assets/images/bg_space1.jpeg"

export default function CryptoSocialComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Set initial visibility after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const handleScroll = () => {
      if (!componentRef.current) return;

      const rect = componentRef.current.getBoundingClientRect();
      const scrolledAmount = window.innerHeight - rect.bottom;

      setScrollPosition(scrolledAmount);

      // Animate heading when it comes into view
      if (headingRef.current) {
        const headingRect = headingRef.current.getBoundingClientRect();
        if (headingRect.top < window.innerHeight && headingRect.bottom > 0) {
          headingRef.current.style.opacity = "1";
          headingRef.current.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effect for background and images
  const bgParallaxStyle = {
    transform: `translateY(${scrollPosition * 0.05}px)`,
    transition: "transform 0.3s ease-out",
  };

  const imageParallaxStyle = {
    transform: `translateY(${scrollPosition * -0.08}px)`,
    transition: "transform 0.3s ease-out",
  };

  return (
    <div
      ref={componentRef}
      className="relative w-full min-h-screen overflow-hidden bg-black/50 mb-12"
    >
      {/* Background image with stars - with parallax effect */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url("https://th.bing.com/th/id/OIP.5Xik3N0-xu0ufvK5rqncxAHaEX?w=719&h=424&rs=1&pid=ImgDetMain")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...bgParallaxStyle,
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto pt-16 md:pt-24 lg:pt-32 px-4 pb-24">
        {/* Heading text with animation */}
        <div
          ref={headingRef}
          className="text-center mb-6 md:mb-8 transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            SHARE HAPPY MOMENTS
          </h1>
          <p className="text-white text-base md:text-lg">
            Split the bill with friends or send gifts in crypto with 0 transfer
            fees
          </p>
        </div>

        {/* Image grid with parallax effect */}
        <div
          className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 m-12 transition-transform duration-700 ease-out"
          style={imageParallaxStyle}
        >
          {/* Left large image */}
          <div
            className="w-full md:w-90 lg:w-80 h-64 md:h-auto lg:h-90 transition-all duration-700 ease-out transform"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionDelay: "200ms",
            }}
          >
            <img
              src={long}
              alt="Friends dining"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto">
            {/* Right top column with two images stacked horizontally */}
            <div
              className="flex flex-row gap-4 w-full transition-all duration-700 ease-out transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "400ms",
              }}
            >
              <div className="w-1/2 h-28 md:h-34">
                <img
                  src={happy1}
                  alt="Friends laughing"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-1/2 h-28 md:h-34">
                <img
                  src={happy2}
                  alt="Friends drinking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom image in right column */}
            <div
              className="w-full h-40 md:h-50 transition-all duration-700 ease-out transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: "600ms",
              }}
            >
              <img
                src={happy3}
                alt="Happy person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form fields */}
        <div
          className="relative z-20 max-w-full md:max-w-lg mx-auto mb-14 transition-all duration-700 ease-out transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "800ms",
          }}
        >
          {/* Send field */}
          <div className="bg-white rounded-full py-2 px-4 flex items-center justify-between mb-4 shadow-lg">
            <span className="text-gray-700 font-medium">Send</span>
            <div className="flex-grow mx-4">
              <div className="w-full h-1 bg-pink-500 rounded-full"></div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 text-xs">Happy Valentines</div>
              <div className="text-gray-700 font-medium">- 214 USDT</div>
            </div>
          </div>

          {/* Receive field */}
          <div className="bg-white rounded-full py-2 px-4 flex items-center justify-between mb-6 shadow-lg">
            <span className="text-gray-700 font-medium">Receive</span>
            <div className="flex-grow mx-4">
              <div className="w-1/3 h-1 bg-pink-500 rounded-full"></div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 text-xs">Dinner on Apr 20</div>
              <div className="text-gray-700 font-medium">+ 8.7 USDT</div>
            </div>
          </div>

          {/* Call to action button */}
         <a href="#">
          <button className="w-full py-3 px-8 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition-opacity shadow-lg">
            Why not surprise your friends with crypto?
          </button>
          </a>
        </div>
      </div>

      {/* Telegram icon at bottom with enhanced animation */}
      <div
        className="absolute left-3/5 md:left-5/9 lg:1/2 transform -translate-x-1/2 transition-all duration-500 ease-out"
        style={{
          bottom: Math.min(0, scrollPosition) > -80 ? "50px" : "60px",
          transform: `translate(-50%, ${Math.min(0, scrollPosition * 0.3)}px)`,
          opacity: 1 - Math.abs(Math.min(0, scrollPosition)) / 300,
        }}
      >
        <div className="relative ">
          <div className="absolute left-1/2 transform -translate-x-1/4 w-38 lg:w-38 h-20 mt-4"></div>
          <div className="relative flex items-center justify-center  w-16 h-16 rounded-full bg-pink-500 hover:bg-pink-200 transition-colors duration-300 cursor-pointer">
            <Send className="text-white" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
