import React from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";

const Promo = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      <Sidebar />

      <div class="content">
        <p>Promo Loading...</p>
      </div>
    </>
  );
};

export default Promo;
