import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  boutiqueLinks,
  bureauLinks,
  economatLinks,
  labLinks,
} from "../../data/sidebarData";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="sidebar-logobox">
        <span className="sidebar-logo">PASTELAR AI</span>
      </div>
      <div className="sidebar-links">
        <motion.span {...framerSidebarPanel} className="sidebar-link">
          Accueli
        </motion.span>
        <motion.span {...framerIcon}>
          <FontAwesomeIcon icon={faHouse} className="sidebar-linkicon" />
        </motion.span>{" "}
      </div>

      <div className="sidebarcategory">
        {economatLinks.map((link, i) => (
          <motion.div
            {...framerSidebarPanel}
            className="sidebar-headlinkbox"
            key={i}
          >
            <div>
              <h2 className="sidebar-heading" {...framerText(i)}>
                {link.title}
              </h2>
            </div>
            <div className="sidebar-links">
              <span className="sidebar-link">{link.linkname}</span>
              <motion.span {...framerIcon}>
                <FontAwesomeIcon
                  icon={link.linkicon}
                  className="sidebar-linkicon"
                />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="sidebarcategory">
        {labLinks.map((link, i) => (
          <motion.div
            {...framerSidebarPanel}
            className="sidebar-headlinkbox"
            key={i}
          >
            <div>
              <h2 className="sidebar-heading" {...framerText(i)}>
                {link.title}
              </h2>
            </div>
            <div className="sidebar-links">
              <span className="sidebar-link">{link.linkname}</span>
              <motion.span {...framerIcon}>
                <FontAwesomeIcon
                  icon={link.linkicon}
                  className="sidebar-linkicon"
                />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="sidebarcategory">
        {boutiqueLinks.map((link, i) => (
          <motion.div
            {...framerSidebarPanel}
            className="sidebar-headlinkbox"
            key={i}
          >
            <div>
              <h2 className="sidebar-heading" {...framerText(i)}>
                {link.title}
              </h2>
            </div>
            <div className="sidebar-links">
              <span className="sidebar-link">{link.linkname}</span>
              <motion.span {...framerIcon}>
                <FontAwesomeIcon
                  icon={link.linkicon}
                  className="sidebar-linkicon"
                />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="sidebarcategory">
        {bureauLinks.map((link, i) => (
          <motion.div
            {...framerSidebarPanel}
            className="sidebar-headlinkbox"
            key={i}
          >
            <div>
              <h2 className="sidebar-heading" {...framerText(i)}>
                {link.title}
              </h2>
            </div>
            <div className="sidebar-links">
              <span className="sidebar-link">{link.linkname}</span>
              <motion.span {...framerIcon}>
                <FontAwesomeIcon
                  icon={link.linkicon}
                  className="sidebar-linkicon"
                />
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 40,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.5,
  },
};

export default Sidebar;
