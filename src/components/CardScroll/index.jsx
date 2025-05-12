


import React from 'react';
import paypal from "../../assets/images/cards/paypal@2x.png";
import trustwallet from "../../assets/images/cards/trustwalletcard-removebg-preview.png";
import cashapp from "../../assets/images/cards/Cashapp.png";
import nexo from "../../assets/images/cards/nexo (1).png";
import robinhood from "../../assets/images/cards/robinhood.png";
import coinbase from "../../assets/images/cards/coinbase.png";

const OurMainCardsMarquee = () => {
  const images = [
    { id: 1, src: paypal, alt: 'Card 1' },
    { id: 2, src: trustwallet, alt: 'Card 2' },
    { id: 3, src: cashapp, alt: 'Card 3' },
    { id: 4, src: nexo, alt: 'Card 4' },
    { id: 5, src: robinhood, alt: 'Card 5' },
    { id: 6, src: coinbase, alt: 'Card 6' },
  ];

  // Create enough duplicates for smooth loop
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <section className=" h-auto bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-16">
      <div className="container mx-auto w-full">
        <div className="text-center mb-12 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-10">
            Your Go-To Collection Of The Most Popular Digital Cards
          </h1>
        </div>

        <div className="relative w-full overflow-hidden mt-20">
          <div className="flex animate-marquee">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-none mx-2 sm:mx-3 md:mx-4"
              >
                <div className="w-32 h-20 sm:w-40 sm:h-22 md:w-48 md:h-30 lg:w-60 lg:h-38 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="w-full h-full relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 "
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.log(`Failed to load image: ${image.src}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 30s;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 0.5rem));
            }
          }
        }

        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 25s;
          }
          
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 0.5rem));
            }
          }
        }

        /* Ensure smooth scrolling on all devices */
        * {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>
    </section>
  );
};

export default OurMainCardsMarquee;