import React from "react";
import { Link } from "react-router-dom";
import Package from "../Container/Package";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
        <Navbar />
      <Sidebar />

      <div class="content">
        <Package />
      </div>
    </>
  );
};

export default Home;
