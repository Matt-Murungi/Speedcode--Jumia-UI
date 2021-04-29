import React from "react";

import "./Navigation.css";

import Person from "@material-ui/icons/PersonOutline";
import Help from "@material-ui/icons/HelpOutline";
import ShoppingChart from "@material-ui/icons/ShoppingCartOutlined";

export default function Navigation() {
  return (
    <nav className="navigation">
      <img
        src="https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png"
        alt="Jumia Logo"
        className="navigation__logo"
      />
      <input type="text" className="navigation__searchBar" />
      <button className="navigation__searchButton">SEARCH</button>

      <div className="navigation__option">
        <div className="navigation__optionLink">
          <Person />
          <span className="navigation__optionLinkName">Login</span>
        </div>

        <div className="navigation__optionLink">
          <Help />
          <span className="navigation__optionLinkName">Help</span>
        </div>

        <div className="navigation__optionLink">
          <ShoppingChart />
          <span className="navigation__optionLinkName">Cart</span>
        </div>
      </div>
    </nav>
  );
}
