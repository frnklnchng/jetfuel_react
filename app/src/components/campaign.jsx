import React from 'react';
import CampaignHeader from './campaign_header';
import CampaignMedia from './campaign_media';

class Campaign extends React.Component {
  render() {
    const {campaign_icon_url, campaign_name, pay_per_install, medias} = this.props.campaign;

    return(
      <li>
        <CampaignHeader
          icon={campaign_icon_url}
          name={campaign_name}
          pay={pay_per_install}
        />
        <CampaignMedia media={medias}/>
      </li>
    );
  }
}

export default Campaign;