import React from "react";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/barbah_logo.svg";

const Header = () => {
  const DEFAULT_NAV_ITEMS = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <div className="top-header">
      <div className="logo-holder">
        <Link to="/">
          <img src={siteLogo} alt="logo" />
        </Link>
      </div>
      <div className="menu-holder">
        <ul className="menu-list">
          {DEFAULT_NAV_ITEMS?.map((navItem, index) => {
            return (
              <li key={index} className="menu-item">
                <Link to={navItem.link}>{navItem?.label}</Link>
              </li>
            );
          })}
        </ul>
        <></>
        <div className="auth-holder">
          <button className="login-btn common-btn" type="button">
            Log in
          </button>
          <button className="signup-btn common-btn" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
