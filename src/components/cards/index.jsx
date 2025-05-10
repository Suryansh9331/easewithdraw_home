




import { useState, useEffect, useRef } from 'react';
import GooglePlay from "../../assets/images/GooglePlay.svg";
import ApplePlay from "../../assets/images/Applepay.svg";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import './CryptoCardStyle.css'; // We'll create this file for custom animations

const CryptoCardComponent = () => {
  const [activeTab, setActiveTab] = useState('virtual');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right'); // 'right' or 'left'
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const INTERVAL_DURATION = 5000; // 5 seconds
  
  // Function to handle tab switching with transition
  const switchTab = (tabName) => {
    if (activeTab !== tabName && !isTransitioning) {
      setIsTransitioning(true);
      
      // Set slide direction based on which tab we're moving to
      setSlideDirection(tabName === 'virtual' ? 'right' : 'left');
      
      // Clear existing timers
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      // Reset progress
      setProgress(0);
      
      // Set timeout for transition
      timeoutRef.current = setTimeout(() => {
        setActiveTab(tabName);
        setIsTransitioning(false);
        startProgressTimer();
      }, 500); // Match this with CSS transition duration
    }
  };
  
  // Start progress timer
  const startProgressTimer = () => {
    // Reset progress
    setProgress(0);
    
    // Update progress every 50ms
    const startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / INTERVAL_DURATION) * 100;
      
      if (newProgress >= 100) {
        setProgress(100);
        clearInterval(intervalRef.current);
        
        // Switch to next tab
        const nextTab = activeTab === 'virtual' ? 'physical' : 'virtual';
        switchTab(nextTab);
      } else {
        setProgress(newProgress);
      }
    }, 50);
  };
  
  // Initialize automatic tab switching and progress
  useEffect(() => {
    startProgressTimer();
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab]);
  
  const cardData = {
    virtual: {
      title: "VIRTUAL CRYPTO CARD",
      subtitle: "ANYTIME, ANYWHERE",
      features: [
        "Instant transaction",
        "Widely-accepted",
        "Compatible with Apple Pay/Google Pay"
      ],
    
    },
    physical: {
      title: "PHYSICAL CRYPTO CARD",
      subtitle: "ONE CARD FOR ALL",
      features: [
        "Tap and Pay",
        "ATM withdrawal"
      ],
      primaryImage: {card1}, // Replace with path to your black card
      secondaryImage: {card2} // Replace with path to your green card
    }
  };
  
  const currentData = cardData[activeTab];
  
  // Function to determine which set of images to show based on active tab
  const getImageClasses = (isActive) => {
    return isActive 
      ? "opacity-100 transition-opacity duration-500" 
      : "opacity-0 absolute top-0 left-0 transition-opacity duration-500";
  };

  return (
    <div className="w-full bg-[#f7f8fa] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10   md:py-12">
        <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          {/* Content Container with Animation */}
          <div 
            className={`flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-out ${
              isTransitioning 
                ? slideDirection === 'right' 
                  ? 'translate-x-full opacity-0' 
                  : '-translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
            style={{ 
              transformOrigin: slideDirection === 'right' ? 'right center' : 'left center',
            }}
          >
            {/* Left Side - Content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 lg:pr-12 lg:pt-20 md:pt-10 sm:pt-10 md:mt-10">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-1 md:mb-2 tracking-tight">
                {currentData.title}
              </h1>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6 lg:mb-8">
                {currentData.subtitle}
              </h2>
              
              <ul className="mb-4 sm:mb-6 md:mb-10 lg:mb-12">
                {currentData.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-2 md:mb-4">
                    <span className="mr-2 text-sm sm:text-base md:text-lg">•</span>
                    <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col xs:flex-row justify-start items-start xs:items-center gap-4 sm:gap-6 md:gap-10 mb-6 md:mb-12">
                <button className="bg-pink-700 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base hover:bg-pink-800 transition-colors duration-300 w-full xs:w-auto flex justify-center">
                  Get your card
                </button>
                <div className="flex gap-4 sm:gap-8 items-center mt-2 xs:mt-0">
                  <img src={GooglePlay} alt="Google Play" className="h-5 sm:h-6 md:h-8" />
                  <img src={ApplePlay} alt="Apple Pay" className="h-5 sm:h-6 md:h-8" />
                </div>
              </div>
            </div>
            
            {/* Right Side - Animated Card Images */}
            <div className="w-full md:w-1/2 flex justify-center items-center lg:mt-20 md:mt-10 ">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pt-16 md:pt-20">
                {/* Virtual Card Images */}
                <div className={getImageClasses(activeTab === 'virtual')}>
                  {/* Primary Card (Bottom) */}
                  <div className="relative">
                    <img 
                      src={card2} 
                      alt="Virtual primary crypto card" 
                      className="w-full h-auto object-contain rounded-xl" 
                    />
                    
                    {/* Secondary Card (Top with Animation) */}
                    <div className="absolute top-0 left-0 w-full">
                      <img 
                        src={card1} 
                        alt="Virtual secondary crypto card" 
                        className="w-full h-auto object-contain rounded-xl animate-float"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Physical Card Images */}
                <div className={getImageClasses(activeTab === 'physical')}>
                  {/* Primary Card (Bottom) */}
                  <div className="relative">
                    <img 
                      src={card2} 
                      alt="Physical primary crypto card" 
                      className="w-full h-auto object-contain rounded-xl" 
                    />
                    
                    {/* Secondary Card (Top with Animation) */}
                    <div className="absolute top-0 left-0 w-full">
                      <img 
                        src={card1} 
                        alt="Physical secondary crypto card" 
                        className="w-full h-auto object-contain rounded-xl animate-float"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tab Selector */}
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 border-t pt-4">
          <div className="inline-flex relative">
            <button 
              className={`px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base ${activeTab === 'virtual' ? 'font-bold' : 'text-gray-400'} transition-colors duration-300`}
              onClick={() => switchTab('virtual')}
              disabled={isTransitioning}
              aria-pressed={activeTab === 'virtual'}
            >
              VIRTUAL CARD
              {activeTab === 'virtual' && (
                <div className="relative h-0.5 bg-gray-200 mt-1">
                  <div 
                    className="absolute left-0 top-0 h-full bg-black/40 transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </button>
            <button 
              className={`px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base ${activeTab === 'physical' ? 'font-bold' : 'text-gray-400'} transition-colors duration-300`}
              onClick={() => switchTab('physical')}
              disabled={isTransitioning}
              aria-pressed={activeTab === 'physical'}
            >
              PHYSICAL CARD
              {activeTab === 'physical' && (
                <div className="relative h-0.5 bg-gray-200 mt-1">
                  <div 
                    className="absolute left-0 top-0 h-full bg-black transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>          
  );                                                                    
};

export default CryptoCardComponent;




