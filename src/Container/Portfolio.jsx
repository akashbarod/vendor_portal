import React from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      <Sidebar />

      <div class="content">
        <p>Portfolio Loading...</p>
      </div>
    </>
  );
};

export default Portfolio;
