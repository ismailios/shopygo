import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../logo/Logo";
import classes from "../header/Header.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
