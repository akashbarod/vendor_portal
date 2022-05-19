import React from "react";
import Navbar from "../Component/Navbar";
import "../Style/package.css";

const Package = () => {
  return (
    <form className="main-content">
      <div class="form-group common-div">
        <label for="exampleFormControlFile1">Cover Image</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div className="common-div">
        <label for="exampleFormControlFile1">Profile Image</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <div class="form-group common-div">
        <label for="exampleInputEmail1">About</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          className="email-field"
        />
      </div>
      <div className="board-div ">
        <p>Board :</p>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          CBSE
        </label>

        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          CBSE
        </label>

        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          CBSE
        </label>
      </div>
      <div class="form-group common-div">
        <label for="exampleInputPassword1">Others :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          className="email-field"
        />
      </div>
      <div>
        <p>Grade :</p>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            1
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            2
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            3
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            4
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            6
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            7
          </label>
        </div>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          8
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          9
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          10
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          11
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">
          12
        </label>
      </div>

      <div>
        <p>Subject :</p>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="option1"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Maths
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="option2"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Physics
          </label>
        </div>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Chemistry
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Social
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Life Skills
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Entreprenuership
        </label>
      </div>

      <div class="form-group common-div">
        <label for="exampleInputPassword1">Price :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          className="email-field"
        />
      </div>
      <div class="form-group common-div">
        <label for="exampleInputPassword1">DPrice :</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          className="email-field"
        />
      </div>
      <div className="board-div">
        <p>isActive :</p>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
      </div>

      <div className="board-div">
        <p>Start Date:</p>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          No Start Date
        </label>
        <p>OR</p>
        <input type="text" placeholder="calendar" />
      </div>

      <div className="board-div">
        <p>Validity:</p>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          No Validity
        </label>
        <p>OR</p>
        <input type="text" placeholder="calendar" />
      </div>
    </form>
  );
};

export default Package;
