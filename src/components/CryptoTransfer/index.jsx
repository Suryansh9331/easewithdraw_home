import { useState, useEffect, useRef } from "react";
import transfer from "../../assets/images/transfer.jpg";
import plane from "../../assets/images/plane.png";
import WorldMap from "../../assets/images/worldMap.jpeg";

// Add CSS animation keyframes
const flyingPlaneStyles = `
   @keyframes flyAcrossAndBack {
    0% {
      transform: translateX(0) translateY(0) rotate(5deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    40% {
      transform: translateX(calc(100vw - 1px)) translateY(calc(-100vh + 20px)) rotate(20deg);
      opacity: 1;
    }
    50% {
      transform: translateX(calc(100vw - 1px)) translateY(calc(-100vh + 20px)) rotate(-180deg);
      opacity: 1;
    }
    80% {
      transform: translateX(50%) translateY(-150px) rotate(-180deg);
      opacity: 0;
    }
    100% {
      transform: translateX(50%) translateY(-150px) rotate(-180deg);
      opacity: 0;
    }
  }
`;

const CryptoToFiatBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // Control the CSS animation based on visibility
        if (entry.isIntersecting) {
          if (animationRef.current) {
            animationRef.current.style.animationPlayState = "running";
          }
        } else {
          if (animationRef.current) {
            animationRef.current.style.animationPlayState = "paused";
          }
        }
      },
      { threshold: 0.2 }
    );

    const current = bannerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Updated with proper country codes and flag URLs
  const countryFlags = [
    {
      country: "USA",
      code: "us",
      top: "20%",
      left: "5%",
      flagUrl: "https://flagpedia.net/data/flags/mini/us.png",
    },
    {
      country: "UK",
      code: "gb",
      top: "30%",
      right: "15%",
      flagUrl: "https://flagpedia.net/data/flags/mini/gb.png",
    },
    {
      country: "Canada",
      code: "ca",
      top: "45%",
      left: "25%",
      flagUrl: "https://flagpedia.net/data/flags/mini/ca.png",
    },
    {
      country: "Australia",
      code: "au",
      top: "59%",
      right: "5%",
      flagUrl: "https://flagpedia.net/data/flags/mini/au.png",
    },
    {
      country: "Saudi Arabia",
      code: "sa",
      top: "75%",
      left: "7%",
      flagUrl: "https://flagpedia.net/data/flags/mini/sa.png",
    },
  ];

  return (
    <div
      ref={bannerRef}
      className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 lg:p-16 relative overflow-hidden"
    >
      {/* Inject the CSS animation */}
      <style dangerouslySetInnerHTML={{ __html: flyingPlaneStyles }} />
      {/* New flying plane animation */}
      <img
        ref={animationRef}
        src={plane}
        alt="Flying Plane"
        className="absolute z-20 w-20 h-20 pointer-events-none"
        style={{
          left: "-50px",
          bottom: "10%",
          animation: "flyAcrossAndBack 30s infinite",
          animationPlayState: isVisible ? "running" : "paused",
        }}
      />

      {/* World map background */}
      <div
        className="absolute top-0 right-0 w-full lg:w-3/4 h-7/9 opacity-80 bg-repeat space-y-2  z-0"
        style={{
          backgroundImage: `url(${WorldMap})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
            className="w-full  max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-4xl shadow-lg"
          />

          {countryFlags.map((item, index) => (
            <div
              key={index}
              className={`absolute flex items-center gap-2 bg-white text-black p-2 rounded-full shadow-md transition-all duration-700 ease-in-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                top: item.top,
                left: item.left,
                right: item.right,
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden border border-gray-300">
                <img
                  src={item.flagUrl}
                  alt={`${item.country} flag`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.textContent = item.code.toUpperCase();
                  }}
                />
                <span className="hidden text-xs font-bold">
                  {item.code.toUpperCase()}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {item.country}
              </span>
            </div>
          ))}

          {/* Original plane image (preserved) */}
          <img
            src={plane}
            alt="Arrow"
            className={`absolute sm:-bottom-16 sm:-right-12 -bottom-8 -right-4 w-30 h-30 sm:w-48 sm:h-48 transition-all duration-3000 ease-in-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-40"
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

        <p className="text-xl sm:text-2xl mb-6 text-black font-semibold">
          Transfer fiat with your crypto to anyone anywhere in the world
        </p>

        <ul className="mb-6 space-y-3 text-left">
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">
              Direct transfer with crypto
            </span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">
              Super competitive commission rate
            </span>
          </li>
          <li className="flex items-center text-black">
            <span className="mr-2 text-2xl font-medium">•</span>
            <span className="text-xl sm:text-xl md:text-2xl font-normal">
              Instant Execution
            </span>
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
