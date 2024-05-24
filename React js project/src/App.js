// src/App.js
import React from 'react';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import WhyChooseUs from './components/WhyChooseUs';
import ACCAEligibility from './components/ACCAEligibility';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import KickoffJourney from './components/KickoffJourney';
import CallbackModal from './components/CallbackModal';

function App() {
  return (
    <div className="App">
      <Header />
      <BecomeACCA />
      <WhyChooseUs />
      <ACCAEligibility />
      <WhatWillYouLearn />
      <PlacementAssistance />
      <KickoffJourney />
      <CallbackModal />
    </div>
  );
}

export default App;
