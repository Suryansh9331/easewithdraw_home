import React from 'react';
import paypal from "../../assets/images/cards/paypal@2x.png"
import trustwallet from "../../assets/images/cards/trustwalletcard-removebg-preview.png"
import cashapp from "../../assets/images/cards/Cashapp.png"
import nexo from "../../assets/images/cards/nexo (1).png"
import robinhood from "../../assets/images/cards/robinhood.png"
import coinbase from "../../assets/images/cards/coinbase.png"


const OurMainCardsMarquee = () => {
  // Replace these paths with your actual image paths
  const images = [
    { 
      id: 1, 
      src: paypal, 
      alt: 'Card 1'
    },
    { 
      id: 2, 
      src: trustwallet, 
      alt: 'Card 2'
    },
    { 
      id: 3, 
      src: cashapp, 
      alt: 'Card 3'
    },
    { 
      id: 4, 
      src: nexo, 
      alt: 'Card 4'
    },
    { 
      id: 5, 
      src: robinhood, 
      alt: 'Card 5'
    },
    { 
      id: 6, 
      src: coinbase, 
      alt: 'Card 6'
    },
    { 
      id: 7, 
      src: paypal, 
      alt: 'Card 7'
    },
    { 
      id: 8, 
      src: paypal, 
      alt: 'Card 8'
    },
  ];
// Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <section className="min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-16">
      <div className="relative z-10 container mx-auto  w-full">
        {/* Main heading with animation */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mt-10">
            Your Go-To Collection Of The Most Popular Digital Cards
          </h1>
        </div>

        {/* Marquee container */}
        <div className="relative w-full">
          {/* Marquee wrapper */}
          <div className="overflow-hidden">
            <div className="flex gap-4 sm:gap-6 md:mt-18 mt-20 animate-marquee">
              {duplicatedImages.map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="relative flex-shrink-0 group"
                >
                  {/* Card container - credit card aspect ratio */}
                  <div className="w-full h-40  sm:h-48  md:h-60 lg:w-112 lg:h-72 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    {/* Full image container */}
                    <div className="w-full h-full relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 "
                        onError={(e) => {
                          e.target.style.display = 'none';
                          console.log(`Failed to load image: ${image.src}`);
                        }}
                      />
                      
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        
        /* Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
        
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 10s;
          }
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 8s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 6s;
          }
        }
        
        /* Credit card aspect ratio utility */
        .w-112 {
          width: 28rem;
        }
        .h-72 {
          height: 18rem;
        }
      `}</style>
    </section>
  );
};

export default OurMainCardsMarquee;