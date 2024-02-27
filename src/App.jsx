import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimateApp from "./AnimateApp";

const App = () => {
  return (
    // <div className="appsection">
    <BrowserRouter>
      <AnimateApp />
    </BrowserRouter>
    // </div>
  );
};

export default App;
