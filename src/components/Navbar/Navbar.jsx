import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGear,
  faPowerOff,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "../Toggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const navbaranimation = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.5 },
  };

  return (
    <motion.nav {...navbaranimation} className="navbar-section">
      <div className="">
        <h2
          className="navbar-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 1 / 10,
          }}
        >
          recettes
        </h2>
      </div>

      <div className="navbar-listcontent">
        <div className="navbar-search">
          <input type="text" name="" id="" className="navbar-input" />
          <FontAwesomeIcon icon={faSearch} className="navbar-searchicon" />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="navbar-sideicon" />
        </div>
        <div>
          <FontAwesomeIcon icon={faGear} className="navbar-sideicon" />
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} className="navbar-sideicon" />
        </div>
        <div>
          <Toggle />
        </div>
        <div>
          <FontAwesomeIcon icon={faPowerOff} className="navbar-sideicon" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
