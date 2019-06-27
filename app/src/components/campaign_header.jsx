import React from 'react';

class CampaignHeader extends React.Component {
  render() {
    const {icon, name, pay} = this.props;
    const resize = "https://res.cloudinary.com/zzyzx/image/fetch/w_140,h_140,c_fill,g_face,r_40,f_auto/";

    return (
      <div className="campaign-header">
        <img className="campaign-icon" src={resize + icon} alt={name}></img>
        <div className="campaign-details">
          <p className="campaign-name"><b>{name}</b></p>
          <p className="campaign-pay"><b>{pay}</b> per install</p>
        </div>
      </div>
    );
  }
}

export default CampaignHeader;