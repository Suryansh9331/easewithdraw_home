import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tab1 from "../../assets/images/tab1.jpg";
import tab2 from "../../assets/images/tab2.jpg";
import tab3 from "../../assets/images/tab3.jpg";
import tab4 from "../../assets/images/tab4.jpg";
import tab5 from "../../assets/images/tab5.jpg";

import telegram from "../../assets/images/LogoForTabs/telegram.jpeg";
import facebook from "../../assets/images/LogoForTabs/facebook.jpeg";
import insta from "../../assets/images/LogoForTabs/insta.jpeg";

import amazon from "../../assets/images/LogoForTabs/amazon.jpeg";
import ebay from "../../assets/images/LogoForTabs/eBay.jpeg";
import aliExpress from "../../assets/images/LogoForTabs/aliexpress.jpeg";

import ubereats from "../../assets/images/LogoForTabs/uberEats.jpeg";
import starbucks from "../../assets/images/LogoForTabs/starbucks_icon.jpeg";
import macD from "../../assets/images/LogoForTabs/Mcdonald.jpeg";
import deliveroo from "../../assets/images/LogoForTabs/deliveroo.svg";
import kfc from "../../assets/images/LogoForTabs/kfc_icon.jpeg";

import Booking from "../../assets/images/LogoForTabs/booking.jpeg";
import trip from "../../assets/images/LogoForTabs/trip.jpeg";
import Airnb from "../../assets/images/LogoForTabs/Airnb.jpeg";
import expedia   from "../../assets/images/LogoForTabs/expedia.jpeg"
import uber from "../../assets/images/LogoForTabs/uber.jpeg";

import bizzard from "../../assets/images/LogoForTabs/bizzard.jpeg";
import Pubg from "../../assets/images/LogoForTabs/pubg.jpeg";
import google from "../../assets/images/LogoForTabs/google.jpeg";
import FIFA from "../../assets/images/LogoForTabs/fifa.jpeg";

const tabs = [
  {
    id: "social",
    label: "📱 Social",
    background: tab1,
    fields: [
      { icon: telegram, label: "Telegram", amount: "- $39.00 USD" },
      { icon: facebook, label: "Facebook", amount: "- $247.60 USD" },
      { icon: insta, label: "Instagram", amount: "- $325.10 USD" },
    ],
  },
  {
    id: "shopping",
    label: "🛒 Online Shopping",
    background: tab2,
    fields: [
      { icon: amazon, label: "Amazon", amount: "- $140.00 USD" },
      { icon: ebay, label: "eBay", amount: "- $210.25 USD" },
      { icon: aliExpress, label: "AliExpress", amount: "- $210.25 USD" },
    ],
  },
  {
    id: "fnb",
    label: "🍔 F&B",
    background: tab3,
    fields: [
      { icon: ubereats, label: "Uber Eats", amount: "- $28.00 USD" },
      { icon: starbucks, label: "Starbucks", amount: "- $15.50 USD" },
      { icon: macD, label: "McDonald", amount: "- $10.50 USD" },
      { icon: deliveroo, label: "Deliveroo", amount: "- $10.50 USD" },
      { icon: kfc, label: "KFC", amount: "- $10.50 USD" },
    ],
  },
  {
    id: "travel",
    label: "✈️ Travel",
    background: tab4,
    fields: [
      { icon: Booking, label: "Booking.com", amount: "- $510.75 USD" },
      { icon: trip, label: "Trip.com", amount: "- $62.30 USD" },
      { icon: Airnb, label: "Airnb", amount: "- $62.30 USD" },
      { icon: expedia, label: "Expedia", amount: "- $62.30 USD" },
      { icon: uber, label: "Uber", amount: "- $62.30 USD" },
    ],
  },
  {
    id: "gaming",
    label: "🎮 Gaming & Tech",
    background: tab5,
    fields: [
      { icon: bizzard, label: "Bizzard", amount: "- $95.00 USD" },
      { icon: Pubg, label: "Pubg", amount: "- $89.00 USD" },
      { icon: google, label: "google", amount: "- $89.00 USD" },
      { icon: FIFA, label: "FIFA", amount: "- $89.00 USD" },
    ],
  },
];

function CryptoTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (tabIndex + 1) % tabs.length;
      setTabIndex(nextIndex);
      setActiveTab(tabs[nextIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, [tabIndex]);

  return (
    <div className="w-full h-screen py-6 relative overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 640px) {
          .mobile-tab-wrapper {
            scroll-snap-type: x mandatory;
            overflow-x: auto;
            white-space: nowrap;
          }
          .mobile-tab-button {
            scroll-snap-align: center;
            transition: transform 0.3s ease;
            flex-shrink: 0;
          }
        }
      `}</style>

      {/* Animated Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activeTab.background})` }}
        />
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center lg:py-0 md:py-16 text-white z-20 px-4 sm:px-8">
        {/* Heading */}
        <h1 className="text-3xl lg:text-6xl font-bold  md:mt-4 mt-8  sm:mt-10 sm:py-10 mb-2 text-center leading-snug">
          MAKE PAYMENT WITH CRYPTO ANYTIME, ANYWHERE
        </h1>
        <p className="text-xs sm:text-base mb-4 sm:mb-2 max-w-full text-center">
          Accepted by 130M+ merchants globally | Apple Pay/Google Pay
          compatibility | No advance fiat conversion needed
        </p>

        {/* Animated Fields */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id + "-fields"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-1 lg:mt-10 lg:mb-20  sm:gap-2 sm:mt-14"
          >
            {activeTab.fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex items-center bg-white/50  border-2 border-white rounded px-4 py-2 justify-between w-[280px] sm:w-[400px]"
              >
                <div className="flex items-center gap-3">
                  <img src={field.icon} alt={field.label} className="w-6 h-6" />
                  <span className="text-black text-sm font-medium">
                    {field.label}
                  </span>
                </div>
                <span className="text-black text-sm font-semibold">
                  {field.amount}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Tabs */}
        {/* Bottom Tabs */}
        <div className="absolute bottom-4 sm:bottom-10 w-full flex justify-center z-10 mt-30 mb-4">
          {/* Desktop view: show all tabs */}
          <div className="hidden sm:flex gap-4">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab);
                  setTabIndex(i);
                }}
                className={`px-4 py-2 text-lg font-medium rounded-full
          ${
            tab.id === activeTab.id
              ? "bg-white/40 border-white border-2   text-black/80 font-bold scale-110"
              : " text-white hover:bg-white/50"
          }
        `}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile view: animate only active tab with horizontal sliding */}
          <div className="sm:hidden w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.button
                key={activeTab.id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="px-6 py-3 text-base font-bold rounded-full bg-white text-black shadow-md scale-110"
              >
                {activeTab.label}
              </motion.button>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoTabs;
