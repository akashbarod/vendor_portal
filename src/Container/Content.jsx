import React from "react";
import Navbar from "../Component/Navbar";
import Sidebar from "../Component/Sidebar";
import "../Style/chapter.css";

const Content = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      <Sidebar />

      <div class="content">
        <form className="chapter-form">
          <div class="form-group fg row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Chapter
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="package"
                className="input-chapter"
              />
            </div>
          </div>
          <div class="form-group fg row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Content Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="content_name"
                className="input-chapter"
              />
            </div>
          </div>

          <div class="form-group fg row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              URL:
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="url"
                className="input-chapter"
              />
            </div>
          </div>

          <div class="form-group fg row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Content Type
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="content_type"
                className="input-chapter"
              />
            </div>
          </div>
          <div class="form-group form-check fg">
            <label class="form-check-label" for="exampleCheck1">
              Active
            </label>
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" class="btn btn-primary fg add-btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Content;
