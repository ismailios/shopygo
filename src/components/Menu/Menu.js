import React from "react";
import classes from "../menu/Menu.module.css";
const Menu = () => {
  return (
    <div className={classes.menu_wrapper}>
      <select className={classes.menu_select}>
        <option value="accueil">Accueil</option>
        <option value="accueil">Accueil</option>
        <option value="accueil">Accueil</option>
        <option value="accueil">Accueil</option>
        <option value="accueil">Accueil</option>
      </select>
    </div>
  );
};

export default Menu;
