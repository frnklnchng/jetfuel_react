import React from 'react';

class CampaignHeader extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.icon} alt={this.props.name}></img>
        <p>{this.props.name}</p>
        <p>{this.props.pay}</p>
      </>
    );
  }
}

export default CampaignHeader;