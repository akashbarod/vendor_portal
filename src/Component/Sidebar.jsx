import React from "react";
import { Link } from "react-router-dom";
import Chapter from "../Container/Chapter";
import Package from "../Container/Package";
import "../Style/sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <Link to="/home">
          <a class="active">Home</a>
        </Link>
        <Link to="/portfolio">
          <a>Company Portfolio</a>
        </Link>
        <Link to="/package">
          <a>Add Packages</a>
        </Link>
        <Link to="/promo">
          <a>Add Promo Codes</a>
        </Link>
        <Link to="/chapter">
          <a>Add Chapter</a>
        </Link>
        <Link to="/content">
          <a>Add Content</a>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
