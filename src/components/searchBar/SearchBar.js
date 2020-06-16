import React from "react";
import classes from "../searchBar/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <div className={classes.search_wrapper}>
        <FaSearch className={classes.search_icon} />
        <input name="search" className={classes.search_input} type="text" />
      </div>
    </div>
  );
};

export default SearchBar;
