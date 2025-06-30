import React from "react";
import navBarStyles from "./../navBar/navBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={navBarStyles.parent_wrapper}>
      <div className={navBarStyles.wrapper}>
        <nav>
          <div className={navBarStyles.appName}>Watch More</div>
          <div className={navBarStyles.links_div}>
            <Link className={navBarStyles.link} to={"/"}>
              Home
            </Link>
            <Link className={navBarStyles.link} to={"/favorites"}>
              Favorites
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
