import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import Input from "./pages/Input";
import AnimateApp from "./AnimateApp";

//Vellalastreet@2024

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
