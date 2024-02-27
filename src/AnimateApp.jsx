import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import Input from "./pages/Input";
import { AnimatePresence } from "framer-motion";
import SuccessPage from "./pages/SuccessPage";

//Vellalastreet@2024

const AnimateApp = () => {
  const location = useLocation();

  return (
    // <div className="appsection">
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/book-page" element={<BookPage />} />
        <Route path="/success-page" element={<SuccessPage />} />
      </Routes>
    </AnimatePresence>
    // </div>
  );
};

export default AnimateApp;
