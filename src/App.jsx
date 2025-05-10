// src/App.jsx
import React from 'react';

import CryptoLandingPage from './components/hero'; 
import   CryptoCardComponent from './components/cards'; 
import   RedotPayCarousel from './components/Courausal'; 
import   CryptoTabs from './components/tabsection'; 
import  CryptoSocialComponent from './components/SocialSharing'; 
import  CryptoToFiatBanner  from './components/CryptoTransfer'; 
import BussinessPartners  from './components/BussinessPartners'; 
import FAQ  from './components/FAQ'; 
import './index.css'
const App = () => {
  return (
    <div>
<CryptoLandingPage/>
<CryptoCardComponent/>
<RedotPayCarousel/>
<CryptoTabs/>
<CryptoSocialComponent/>
<CryptoToFiatBanner />
<BussinessPartners/>
<FAQ/>

</div>
  );
};

export default App;
