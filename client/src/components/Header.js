import React, { Component } from 'react';

//Koriscen matereialize.css - gotove komponente
class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo"> Emaily </a>
          <ul className="right">
            <li>
              <a> Login with Google </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
