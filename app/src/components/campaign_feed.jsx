import React from 'react';
import Campaign from './campaign';

class CampaignFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then((response) => response.json())
      .then((data) => this.setState({campaigns: data.campaigns}));
  }

  render() {
    const {campaigns} = this.state;

    if (!campaigns) {
      // return loader;
      return (
        <>
          Loading...
        </>
      );
    }

    let campaignItems = Object.values(campaigns).map((campaign, i) => {
      return (
        <Campaign key={i} campaign={campaign}/>
      );
    });

    return (
      <ul className="campaign-feed">
        {campaignItems}
      </ul>
    );
  }
}

export default CampaignFeed;