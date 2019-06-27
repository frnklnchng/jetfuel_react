import React from 'react';

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
    const resize = "https://res.cloudinary.com/zzyzx/image/fetch/w_200,h_400,c_fill,g_face,r_10,f_auto/";

    const coverMedia = () => {
      if (media_type === "photo") {
        return <img src={resize + cover_photo_url} alt="failed to load"></img>
      }

      return (
        <div>
          <img src={resize + escape(cover_photo_url)} alt="failed to load"></img>
          <img src={null} alt="play"></img>
        </div>
      );
    };

    return (
      <li>
        <div>
          {coverMedia()}
          <button onClick={() => {this.copyToClipboard(tracking_link)}}>
            <img className="" src={null} alt="Copy"/>
          </button>
          <a href={download_url}>
            <img className="" src={null} alt="Download"/>
          </a>
        </div>
      </li>
    );
  }
}

export default CampaignMediaItem;