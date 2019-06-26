import React from 'react';
import Campaign from './campaign';

class CampaignFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch('https://www.plugco.in/public/take_home_sample_feed')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  // componentDidMount() {
  //   fetch('https://www.plugco.in/public/take_home_sample_feed')
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(JSON.stringify(myJson));
  //     });
  // };

  render() {
    if (!this.state.data) {
      // return loader;
      return (
        <React.Fragment>
          Loading...
        </React.Fragment>
      );
    }

    console.log(this.state.data);

    for (let campaignData of this.state.data.campaigns) {
      console.log(campaignData);
    }

    return (
      <React.Fragment>
        <Campaign/>
      </React.Fragment>
    );
  }
}

export default CampaignFeed;