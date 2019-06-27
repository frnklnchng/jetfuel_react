import React from 'react';
import copy from './copy.png';
import play from './play.png';
import download from './download.png';


class CampaignMediaItem extends React.Component {
  constructor(props) {
    super(props);

    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(str) {
    const el = document.createElement('textarea');

    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    let selected = false;

    if (document.getSelection().rangeCount > 0) {
      selected = document.getSelection().getRangeAt(0);
    }

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  render() {
    const {cover_photo_url, media_type, tracking_link, download_url} = this.props.media;
    const resize = "https://res.cloudinary.com/zzyzx/image/fetch/w_100,h_200,c_fill,g_face,r_10,f_auto/";

    const coverMedia = () => {
      if (media_type === "video") {
        return (
          <img className="cover-play" src={play} alt="Play"></img>
        );
      }
    };

    return (
      <li className="campaign-media-item">
        <div className="cover-container">
          {coverMedia()}
          <div className="cover-overlay"></div>
          <img className="media-item-cover" src={resize + escape(cover_photo_url)} alt="failed to load"></img>
        </div>
        <div className="media-item-options">
          <button className="copy" onClick={() => {this.copyToClipboard(tracking_link)}}>
            <img className="copy" src={copy} alt="Copy"/>
          </button>
          <a className="download" href={download_url} download>
            <img className="download" src={download} alt="Download"/>
          </a>
        </div>
      </li>
    );
  }
}

export default CampaignMediaItem;