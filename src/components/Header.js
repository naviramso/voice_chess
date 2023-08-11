import React from "react";
import logo from "./public/logo.svg";   
import {BiMenu} from "react-icons/bi";
const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} class="logo" alt="logo" />
      <BiMenu fontSize={50} color="#ffffff"/>
    </header>
  );
};

export default Header;
