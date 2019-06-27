import React from 'react';
import retry from './retry.png';
import logo from '../logo.svg';
import Campaign from './campaign';
import PullToRefresh from '../index.umd';

class CampaignFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      campaigns: [],
      failed: null
    };

    this.fetchCampaigns = this.fetchCampaigns.bind(this);
  }

  fetchCampaigns() {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then((response) => response.json())
      .then((data) => this.setState({ campaigns: data.campaigns }))
      .catch((error) => this.setState({ failed: error }));
  }

  componentDidMount() {
    const that = this;
    
    PullToRefresh.init({
      mainElement: 'body',
      onRefresh() {
        that.setState({ campaigns: [] });
        that.fetchCampaigns();
      }
    });

    this.fetchCampaigns();
  }

  componentWillUnmount() {
    PullToRefresh.destroyAll();
  }

  render() {
    const {campaigns} = this.state;

    if (this.state.failed) {
      return (
        <div className="retry">
          <p>Oops! Something is broken.</p>
          <p>Please tap to try again.</p>
          <a className="retry-button" href=".">
            <img className="retry-button" src={retry} alt="Retry"></img>
          </a>
        </div>
      );
    }

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