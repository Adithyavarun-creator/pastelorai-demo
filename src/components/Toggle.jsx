import React from "react";
import "./Toggle.css";

const Toggle = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <>
      <input
        type="checkbox"
        className="theme-checkbox"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      ></input>
    </>
  );
};

export default Toggle;
