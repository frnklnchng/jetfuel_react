import React from 'react';
import logo from '../logo.svg';
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

    if (!campaigns.length) {
      // return loader;
      return (
        <img src={logo} className="App-logo" alt="logo" />
      );
    }

    let campaignItems = Object.values(campaigns).map((campaign, i) => {
      return (
        <Campaign key={i} campaign={campaign}/>
      );
    });

    return (
      <ul className="campaign-feed">
        <div className="nav-placeholder"></div>
        {campaignItems}
      </ul>
    );
  }
}

export default CampaignFeed;