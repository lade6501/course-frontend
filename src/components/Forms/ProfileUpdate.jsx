import React, { useState } from "react";
import axios from "axios";
import "./ProfileUpdate.css";
import Swal from "sweetalert2";

const ProfileUpdate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bioinfo, setBioInfo] = useState("");
  const [isChangeEmailSelected, setIsChangeEmailSelected] = useState(false);

  const handleUpdate = () => {
    const backURL = "http://localhost:8000/user/updateUserByEmail";

    if (email === "") {
      Swal.fire("Warning!", "Email cann't be empty", "warning");
    } else {
      axios
        .put(
          backURL,
          {
            name: name,
            phone: phoneNumber,
            bioInfo: bioinfo,
            isNewEmail: isChangeEmailSelected,
            newEmail,
          },
          {
            params: { email: email },
          }
        )
        .then((response) => {});
    }
  };

  return (
    <>
      <form>
        <div className="contentform">
          <div className="form-group">
            <p>Name</p>
            <span className="icon-case">
              <i className="fa-solid fa-person"></i>
            </span>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Full Name"
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
            <label htmlFor="newEmail" id="newEmailLable">
              Want to change your email ?
            </label>
            <input
              type="checkbox"
              id="newEmail"
              onChange={(e) => setIsChangeEmailSelected(e.target.checked)}
            />{" "}
          </div>

          {isChangeEmailSelected && (
            <div className="form-group">
              <p>
                New E-mail <span>*</span>
              </p>
              <span className="icon-case">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <input
                type="email"
                name="newemail"
                id="newemail"
                value={newEmail}
                placeholder="New E-mail"
                required={true}
                data-msg="NEw Email is required"
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <div className="validation"></div>
            </div>
          )}

          <div className="form-group">
            <p>Phone Number</p>
            <span className="icon-case">
              <i class="fa-solid fa-phone"></i>
            </span>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="Enter Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p>Bio Info</p>
            <span className="icon-case">
              <i class="fa-solid fa-message"></i>
            </span>
            <input
              type="text"
              name="bioinfo"
              id="bioinfo"
              value={bioinfo}
              placeholder="Enter Bio info"
              onChange={(e) => setBioInfo(e.target.value)}
            />
          </div>
          <div>
            <span>To change your password </span>
            <button id="changePassword">Click here</button>{" "}
          </div>
        </div>
        <button
          type="submit"
          className="button-update"
          onClick={() => handleUpdate()}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default ProfileUpdate;
