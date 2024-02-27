import React from "react";
import "./Button.css";

const Button = ({ submit, title }) => {
  return (
    <button className="btn" onClick={submit}>
      {title}
    </button>
  );
};

export default Button;
