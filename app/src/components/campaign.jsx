import React from 'react';
import CampaignHeader from './campaign_header';
import CampaignMedia from './campaign_media';

class Campaign extends React.Component {
  render() {
    return(
      <React.Fragment>
        <p>CAMPAIGN</p>
        <CampaignHeader/>
        <CampaignMedia/>
      </React.Fragment>
    );
  }
}

export default Campaign;