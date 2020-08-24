import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import './Header.css';
class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <a className='logo' href='/home'>
            <img src={Logo} alt='' />
          </a>

          <div className='menu'>
            <ul className='main-menu'>
              <li>
                <a href='shop'>Shop</a>
              </li>
              <li>
                <a href='review'>Order Review</a>
              </li>
              <li>
                <a href='manage'>Manage Inventory Here</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
