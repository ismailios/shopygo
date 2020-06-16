import React from "react";
import classes from "./Panier.module.css";
import { FaShoppingCart } from "react-icons/fa";

const Panier = () => {
  return (
    <div className={classes.Panier}>
      <FaShoppingCart className={classes.panier_icon} />
      Panier
    </div>
  );
};

export default Panier;
