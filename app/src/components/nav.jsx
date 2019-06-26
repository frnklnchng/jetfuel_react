import React from 'react';
import favicon from './favicon-96x96.png';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-hamburger">X</div>
        <a href="https://www.plugco.in/">
          <img className="nav-icon" src={favicon}/>
        </a>
      </nav>
    );
  }
}

export default Nav;