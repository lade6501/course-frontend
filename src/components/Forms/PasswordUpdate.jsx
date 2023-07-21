import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const PasswordUpdate = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (oldPassword !== "" && newPassword !== "" && confirmPassword !== "") {
      if (newPassword !== confirmPassword) {
        Swal.fire(
          "Warning!",
          "New password and confirm new password are not same",
          "warning"
        );
      }
    } else {
      Swal.fire("Warning!", "All fields are required!", "warning");
    }
  };
  return (
    <>
      <form action="none">
        <div className="contentform">
          <div className="form-group">
            <p>
              Old Password <span>*</span>
            </p>
            <span className="icon-case">
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              name="oldpassword"
              value={oldPassword}
              id="oldpassword"
              placeholder="********"
              data-rule="Old password"
              data-msg="Old password is required"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p>
              New Password <span>*</span>
            </p>
            <span className="icon-case">
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              name="newpassword"
              value={newPassword}
              id="newpassword"
              placeholder="********"
              data-rule="New password"
              data-msg="New password is required"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p>
              Confirm New Password <span>*</span>
            </p>
            <span className="icon-case">
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
            <input
              type="password"
              name="confirmpassword"
              value={confirmPassword}
              id="confirmpassword"
              placeholder="********"
              data-rule="Confirm password"
              data-msg="Confirm password is required"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="button-contact"
          onClick={(e) => handlePasswordUpdate(e)}
        >
          Update Password
        </button>
      </form>
    </>
  );
};

export default PasswordUpdate;
