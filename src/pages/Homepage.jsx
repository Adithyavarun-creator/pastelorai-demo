import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Content from "../components/Content/Content";
import "../App.css";

const Homepage = () => {
  return (
    <>
      <div className="appsection">
        <div className="sidebarsection">
          {/* <Toggle /> */}
          <Sidebar />
        </div>
        <div className="contentsection">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Homepage;
