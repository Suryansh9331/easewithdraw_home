import React from 'react';
import card2 from "../../assets/images/card2.png"
const HologramComponent = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden lg:py-28 bg-black">
      {/* Hologram Background Pattern */}
      <div className="absolute inset-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 "></div>
        
        {/* Scrolling Lines Effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
              style={{
                top: `${i * 7}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0  bg-cover bg-center animate-pulse"
        style={{
          backgroundImage:card2 ,
          filter: 'hue-rotate(200deg) saturate(0.7) brightness(0.5)',
        }}
      />
      
      {/* Hologram Scan Lines */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
          style={{
            animation: 'scanLine 3s linear infinite',
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-8 px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-6xl uppercase font-bold  text-sky-200 mt-20 mb-10">
           Know Your Score, Own Your Future
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-cyan-300 tracking-wide animate-pulse mt-8 mb-8" 
             style={{ animationDelay: '0.5s' }}>
          Take the first step toward smarter financial decisions — check your credit score with confidence.
          </p>
          
          {/* Button */}
         <a href='#'>
          <button className="relative group px-12 py-4 mt-20 mb-20 bg-transparent border-2 rounded-full border-cyan-400 text-cyan-400 text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 glitch-button">
            <span className="relative z-10 ">CHECK NOW</span>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </button>
        </a>
        </div>
      </div>
      
      {/* Hologram Border Effect */}
      <div className="absolute inset-4 border border-cyan-400/30 pointer-events-none animate-pulse">
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-500 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-400 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400 animate-pulse"></div>
      </div>
      
      <style jsx>{`
        @keyframes scanLine {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        
        .glitch-button {
          text-shadow: 0 0 10px currentColor;
        }
        
        .glitch-button:hover {
          animation: glitch 0.5s ease-in-out;
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};

export default HologramComponent;