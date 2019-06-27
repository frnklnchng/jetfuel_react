import React from 'react';
import './App.css';

import Nav from './components/nav';
import CampaignFeed from './components/campaign_feed';

function App() {
  return (
    <div className="App">
      <Nav/>
      <CampaignFeed/>
    </div>
  );
}

export default App;
