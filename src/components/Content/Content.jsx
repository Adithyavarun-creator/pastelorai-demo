import React from "react";
import "./Content.css";
import Navbar from "../Navbar/Navbar";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import RecipeEdits from "../RecipeEdits/RecipeEdits";

const Content = () => {
  return (
    <section className="content-section">
      <div>
        <Navbar />
      </div>
      <div className="content-recipebox">
        <div>
          <RecipeDetails />
        </div>
        <div>
          <RecipeEdits />
        </div>
      </div>
    </section>
  );
};

export default Content;
