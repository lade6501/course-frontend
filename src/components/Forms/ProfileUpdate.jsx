import React, { useState } from "react";


const ProfileUpdate = () =>{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [bioinfo,setBioInfo] = useState('')
    return (<> <form>
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
              Phone Number <span>*</span>
            </p>
            <span className="icon-case">
            <i class="fa-solid fa-phone"></i>
            </span>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="Enter Phone Number"
              required={true}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <p>
              Bio Info <span>*</span>
            </p>
            <span className="icon-case">
            <i class="fa-solid fa-message"></i>
            </span>
            <input
              type="text"
              name="bioinfo"
              id="bioinfo"
              value={bioinfo}
              placeholder="Enter Bio info"
              required={true}
              onChange={(e) => setBioInfo(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="button-contact"
          
        >
          Update
        </button>
      </form></>)
}

export default ProfileUpdate;