




// import React from 'react';
// import { motion } from 'framer-motion';

// // Import images directly 
// import partner1 from "../../assets/images/partner1.png";
// import partner2 from "../../assets/images/partner2.png";
// import partner3 from "../../assets/images/partner3.png";
// import partner4 from "../../assets/images/partner4.png";
// import partner5 from "../../assets/images/partner5.png";
// import partner6 from "../../assets/images/partner6.png";
// import partner7 from "../../assets/images/partner7.png";
// import partner8 from "../../assets/images/partner8.png";


// // Store imported images in an array
// const logos = [
//  partner1,
// partner2,
// partner3,
// partner4,
// partner5,
// partner6,
// partner7,
// partner8,
// ];

// // Duplicate the logos once to ensure a smooth infinite loop
// const loopedLogos = [...logos, ...logos];

// const BusinessPartners = () => {
//   return (
//     <div className="w-full bg-white py-20 mt-10 sm:py-10 sm:mt-4 overflow-hidden">
//       {/* Inline Keyframes for stepped infinite loop */}
//       <style>{`
//         @keyframes steppedMarquee {
//           0%   { transform: translateX(0%); }
//           10%  { transform: translateX(-10%); }
//           20%  { transform: translateX(-20%); }
//           30%  { transform: translateX(-30%); }
//           40%  { transform: translateX(-40%); }
//           50%  { transform: translateX(-50%); }
//           60%  { transform: translateX(-60%); }
//           70%  { transform: translateX(-70%); }
//           80%  { transform: translateX(-80%); }
//           90%  { transform: translateX(-90%); }
//           100% { transform: translateX(-100%); }
//         }
//       `}</style>
//       {/* Animated heading on scroll up/down */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-extrabold text-center mt-16 mb-10"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         viewport={{ once: false, amount: 0.6 }}
//       >
//         OUR BUSINESS PARTNER
//       </motion.h2>
//       {/* Animated Underline */}
//       <motion.div
//         className="h-1 w-50 sm:w-100 bg-pink-500 mx-auto mb-10 rounded-full"
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
//         viewport={{ once: false, amount: 0.6 }}
//       />
//       {/* Marquee container centered */}
//       <div className="relative overflow-hidden mx-auto max-w-5xl w-full">
//         <div
//           className="flex gap-16 whitespace-nowrap"
//           style={{
//             animation: 'steppedMarquee 30s steps(10) infinite',
//           }}
//         >
//           {loopedLogos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-24 md:w-36 h-auto transition-transform duration-300 hover:scale-110"
//             >
//               <img src={logo} alt={`partner-${index}`} className="w-full h-auto object-contain" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessPartners;





import React from 'react';
import { motion } from 'framer-motion';

// Import images directly 
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import partner6 from "../../assets/images/partner6.png";
import partner7 from "../../assets/images/partner7.png";
import partner8 from "../../assets/images/partner8.png";


// Store imported images in an array
const logos = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
];

// Duplicate the logos once to ensure a smooth infinite loop
const loopedLogos = [...logos, ...logos];

const BusinessPartners = () => {
  return (
    <div className="w-full bg-white py-20 mt-10 sm:py-10 sm:mt-4 overflow-hidden">
      {/* Inline Keyframes for stepped infinite loop */}
      <style>{`
        @keyframes steppedMarquee {
          0%   { transform: translateX(0%); }
          10%  { transform: translateX(-10%); }
          20%  { transform: translateX(-20%); }
          30%  { transform: translateX(-30%); }
          40%  { transform: translateX(-40%); }
          50%  { transform: translateX(-50%); }
          60%  { transform: translateX(-60%); }
          70%  { transform: translateX(-70%); }
          80%  { transform: translateX(-80%); }
          90%  { transform: translateX(-90%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      {/* Animated heading on scroll up/down */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mt-16 mb-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
      >
        OUR BUSINESS PARTNER
      </motion.h2>
      {/* Animated Underline */}
      <motion.div
        className="h-1 w-50 sm:w-100 bg-pink-500 mx-auto mb-16 rounded-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: false, amount: 0.6 }}
      />
      {/* Marquee container centered */}
      <div className="relative overflow-hidden mx-auto max-w-6xl w-full">
        <div
          className="flex gap-20 whitespace-nowrap"
          style={{
            animation: 'steppedMarquee 30s steps(10) infinite',
          }}
        >
          {loopedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-60 md:w-70 lg:w-60  h-auto transition-transform duration-300 hover:scale-110"
            >
              <img src={logo} alt={`partner-${index}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPartners;