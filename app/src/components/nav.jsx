import React from 'react';
import favicon from './favicon-96x96.png';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-hamburger">HAMBURGER</div>
        <a href="https://www.plugco.in/">
          <img className="nav-icon" src={favicon} alt="Plug"/>
        </a>
      </nav>
    );
  }
}

export default Nav;