import React, { useState, useEffect } from "react";
import "./passwordCheck.css";

const passwordCheck = (props) => {
  const [passwordStrength, setPasswordStrength] = useState("");
  const [lowUpperCase, setLowUpperCase] = useState("fa-circle");
  const [number, setNumber] = useState("fa-circle");
  const [specialChar, setSpecialChar] = useState("fa-circle");
  const [eightChar, setEightChar] = useState("fa-circle");
  useEffect(() => {
    checkStrength(props.password);
  });
  function checkStrength(password) {
    let strength = 0;

    //If password contains both lower and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 2;
      setLowUpperCase("fa-check");
    } else {
      setLowUpperCase("fa-circle");
    }
    //If it has numbers and characters
    if (password.match(/([0-9])/)) {
      strength += 1;
      setNumber("fa-check");
    } else {
      setNumber("fa-circle");
    }
    //If it has one special character
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength += 1;
      setSpecialChar("fa-check");
    } else {
      setSpecialChar("fa-circle");
    }
    //If password is greater than 7
    if (password.length > 7) {
      strength += 1;
      setEightChar("fa-check");
    } else {
      setEightChar("fa-circle");
    }

    // If value is less than 2
    if (strength == 1) {
      setPasswordStrength("progress-bar-danger");
    } else if (strength == 2) {
      setPasswordStrength("progress-bar-warning");
    } else if (strength == 3) {
      setPasswordStrength("progress-bar-okay");
    } else if (strength == 4) {
      setPasswordStrength("progress-bar-good");
    } else if (strength == 5) {
      setPasswordStrength("progress-bar-success");
    }

    if (strength == 5) {
      props.passwordCheck(true);
    } else {
      props.passwordCheck(false);
    }
  }

  return (
    <>
      <div className="form-group ">
        <div id="row">
          <p>
            <span id="result"></span>
          </p>
          <div className="progress">
            <div
              id="password-strength"
              className={`progress-bar ${passwordStrength}`}
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <ul className="list-unstyled">
            <li className="">
              <span className="low-upper-case">
                <i className={`fas ${lowUpperCase}`} aria-hidden="true"></i>
                &nbsp;Lowercase &amp; Uppercase
              </span>
            </li>
            <li className="">
              <span className="one-number">
                <i className={`fas ${number}`} aria-hidden="true"></i>
                &nbsp;Number (0-9)
              </span>
            </li>
            <li className="">
              <span className="one-special-char">
                <i className={`fas ${specialChar}`} aria-hidden="true"></i>
                &nbsp;Special Character (!@#$%^&*)
              </span>
            </li>
            <li className="">
              <span className="eight-character">
                <i className={`fas ${eightChar}`} aria-hidden="true"></i>
                &nbsp;Atleast 8 Character
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default passwordCheck;
