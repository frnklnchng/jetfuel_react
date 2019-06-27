import React from 'react';
import favicon from './favicon-96x96.png';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <a className="nav-hamburger" href=".">=</a>
        <a className="nav-icon" href="https://www.plugco.in/">
          <img className="nav-icon" src={favicon} alt="Plug"/>
        </a>
      </div>
    );
  }
}

export default Nav;