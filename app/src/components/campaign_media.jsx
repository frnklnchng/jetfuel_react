import React from 'react';
import CampaignMediaItem from './campaign_media_item';

class CampaignMedia extends React.Component {
  render() {
    let mediaItems = this.props.media.map((media, i) => {
      return (
        <CampaignMediaItem key={i} media={media}/>
      );
    });

    // let mediaPlaceholder = (n) => {
    //   if (n > 0) {
    //     return <div className="media-placeholder"></div>;
    //   }
    // };

    return (
      <ul className="campaign-media">
        {mediaItems}
        {/* {mediaPlaceholder(mediaItems.length)} */}
        <div className="media-placeholder"></div>
        
      </ul>
    );
  }
}

export default CampaignMedia;