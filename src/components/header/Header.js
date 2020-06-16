import React from "react";
import Menu from "../menu/Menu";
import Logo from "../logo/Logo";
import SearchBar from "../searchBar/SearchBar";
import Parrainage from "../parrainage/Parrainage";
import Compte from "../compte/Compte";
import Panier from "../panier/Panier";
import classes from "../header/Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_wrapper}>
        <Logo />
        <Menu />
        <SearchBar />
        <Parrainage />
        <Compte />
        <Panier />
      </div>
    </div>
  );
};

export default Header;
