import React from "react";
import "../Style/navbar.css";

const Navbar = () => {
  return (
    <nav class="nav navbar navbar-expand-lg navbar-light navbar-fixed-top bg-custom">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form class="d-flex">
          <input
            class="form-control me-2 search-bar"
            type="search"
            placeholder="🔍 &nbsp; &nbsp; &nbsp;Search"
            aria-label="Search"
          />
          <div className="icon-box">
            <i class="fa fa-commenting" aria-hidden="true"></i> &nbsp; &nbsp;
            <i class="fa fa-cogs" aria-hidden="true"></i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
