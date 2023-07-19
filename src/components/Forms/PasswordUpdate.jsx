import React, { useState } from "react";

const PasswordUpdate = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = () => {
    e.preventDefault();
  };
  return (
    <>
      <form>
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
