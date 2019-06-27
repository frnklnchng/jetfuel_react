import React from 'react';
import CampaignMediaItem from './campaign_media_item';

class CampaignMedia extends React.Component {
  render() {
    let mediaItems = this.props.media.map((media, i) => {
      return (
        <CampaignMediaItem key={i} media={media}/>
      );
    });

    return (
      <ul>
        {mediaItems}
      </ul>
    );
  }
}

export default CampaignMedia;