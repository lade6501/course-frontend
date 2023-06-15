import React, { useState, useEffect } from "react";
import "./EnrollForm.css";
import PasswordCheck from "./passwordCheck";
import axios from "axios";
import Swal from "sweetalert2";

const EnrollFrom = (props) => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cpassword, setCPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [samePass, setSamePass] = useState(false);
  const [showPassCheck, setShowPassCheck] = useState(false);
  const [canEnroll, setCanEnroll] = useState(false);

  const passwordCheck = (value) => {
    setCanEnroll(value);
  };
  const handleEnroll = (e) => {
    const backUrl = "http://localhost:8080/user/addUser";
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      phone: parseInt(phoneNumber),
    };

    axios.post(backUrl, { user }).then((response) => {
      console.log(response.statusText);
      props.hideModal();
      Swal.fire("Congratulations!", "You Enrolled Successfully ", "success");
    });
  };
  useEffect(() => {
    if (cpassword.trim === password.trim) {
      setSamePass(false);
    } else {
      setSamePass(true);
    }
  }, [cpassword]);
  
  const handleLogin = (e) =>{
    e.preventDefault();
    if( !(email && password)){
       Swal.fire("Warning!",'All input fields are required', "warning");
    }
    axios.post('http://localhost:8080/user/login',{email,password}).then((responnse) => {
        if(response.statusText === 'OK'){
          const {authtoken} = response;
          localStorage.setItem("token", authtoken);
          props.hideModal();
          Swal.fire("Congratulations!",response.message, "success");
        }
      
        if(response.statusText === 'Unauthorized'){
          Swal.fire("Warning!",response.message, "warning");
        }
    })
  }
  return (
    <>
      {!haveAccount ? (
        <>
          <form>
            <div className="contentform">
              <div className="form-group">
                <p>
                  Name<span>*</span>
                </p>
                <span className="icon-case">
                  <i className="fa-solid fa-person"></i>
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Full Name"
                  required={true}
                  data-msg="Name is required"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="validation"></div>
              </div>

              <div className="form-group">
                <p>
                  E-mail <span>*</span>
                </p>
                <span className="icon-case">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="E-mail"
                  required={true}
                  data-msg="Email is required"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="validation"></div>
              </div>

              <div className="form-group">
                <p>
                  Password <span>*</span>
                </p>
                <span className="icon-case">
                  <i className="fa-sharp fa-solid fa-lock"></i>
                </span>
                <input
                  type="text"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="********"
                  required={true}
                  data-msg="password is required"
                  onChange={(e) => setPassword(e.target.value)}
                  onFocusCapture={(e) => setShowPassCheck(true)}
                  onBlur={(e) => setShowPassCheck(false)}
                />
                {showPassCheck ? (
                  <PasswordCheck
                    password={password}
                    passwordCheck={passwordCheck}
                  />
                ) : null}
              </div>

              <div className="form-group">
                <p>
                  Confirm Password <span>*</span>
                </p>
                <span className="icon-case">
                  <i className="fa-sharp fa-solid fa-lock" id="cpass"></i>
                </span>
                <input
                  type="text"
                  name="password"
                  id="cpassword"
                  value={cpassword}
                  placeholder="********"
                  required={true}
                  data-msg="confirm password is required"
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <div
                  className={
                    !samePass ? "hideconfirmerror" : "showconfirmerror"
                  }
                >
                  confirm password not same as password
                </div>
              </div>

              <div className="form-group">
                <p>
                  Phone Number <span>*</span>
                </p>
                <span className="icon-case">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  placeholder="Please Enter Phone Number"
                  required={true}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="button-contact"
              onClick={(e) => handleEnroll(e)}
            >
              Enroll
            </button>
          </form>
          <p>
            Alredy have an account!{" "}
            <button className="clickhere" onClick={() => setHaveAccount(true)}>
              Click here
            </button>
          </p>
        </>
      ) : (
        <>
          <form>
            <div className="contentform">
              <div className="leftcontact">
                <div className="form-group">
                  <p>
                    E-mail <span>*</span>
                  </p>
                  <span className="icon-case">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    data-rule="email"
                    data-msg="Email is required"
                    onChange ={(e)=> setEmail(e.target.value)}
                  />
                  <div className="validation"></div>
                </div>

                <div className="form-group">
                  <p>
                    Password <span>*</span>
                  </p>
                  <span className="icon-case">
                    <i className="fa-sharp fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    data-rule="password"
                    data-msg="password is required"
                    onChange={(e)=> setPassword(e.target.value)}
                  />
                  <div className="validation"></div>
                </div>
              </div>
            </div>
            <button type="submit" className="button-contact">
              Login
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default EnrollFrom;
