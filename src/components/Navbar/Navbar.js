import React, { Component } from "react";

import Logo from "./whitepanda.png";
import "./Navbar.scss";
import { FaBell, FaBellSlash, FaRegBell } from "react-icons/fa";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={Logo} alt="whitepanda" />
        <div className="navbar-right">
          <div className="navbar-right-icon">
            <span>99</span>
            <FaRegBell />
          </div>
          <div className="navbar-right--button">HG</div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
