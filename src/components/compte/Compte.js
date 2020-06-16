import React from "react";
import classes from "./Compte.module.css";
import { FaUser } from "react-icons/fa";

const Compte = () => {
  return (
    <div className={classes.Compte}>
      <FaUser className={classes.compte_icon} />
      Compte
    </div>
  );
};

export default Compte;
