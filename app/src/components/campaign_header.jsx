import React from 'react';

class CampaignHeader extends React.Component {
  render() {
    const {icon, name, pay} = this.props;
    const resize = "https://res.cloudinary.com/zzyzx/image/fetch/w_150,h_150,c_fill,g_face,r_75,f_auto/";

    return (
      <>
        <img src={resize + icon} alt={name}></img>
        <p>{name}</p>
        <p>{pay}</p>
      </>
    );
  }
}

export default CampaignHeader;