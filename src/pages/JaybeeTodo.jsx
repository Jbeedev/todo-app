import { useState } from "react";
// import "./JaybeeTodo.scss";
import "./JaybeeTodo.css";
import Window10 from "../images/Vector.png";
import NoImage from "../images/no-image-icon.jpg";
import UploadIcon from "../images/upload-icon.png";

const JaybeeTodo = () => {
    const [file, setFile] = useState("");


  return (
    <div className="edit-home">
      <div className="profile-container ">
        <h3 className="">My Profile</h3>
        <div className="profile">
          <div className="edit-avatar">
                <img className="profile-icon" src={file ? URL.createObjectURL(file) : NoImage} alt="" />
            <form action="">
              <label htmlFor="file"><img className="upload-icon" src={UploadIcon} alt="" /></label>
              <input type="file" id="file" onChange={ e => setFile(e.target.files[0])} style={{display: "none"}} />
            </form>
          </div>
          
          <div className="profile-text">
            <p>Joseph Anderson</p>
            <p>You are using Ticked for free</p>
          </div>
        </div>

{/* <div>
    <form className="form-edit" action="">
        <div className="form-input">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="full name" />
        </div>
        <div className="form-input">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="password" />
        </div>
        <div className="form-input">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="full name" />
        </div>
        <div className="form-input">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="password" />
        </div>
        <div className="form-input">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="password" />
        </div>
    </form>
</div> */}



        <div className="profile-content">
          <h1 className=" profle-content-header t">Personal Information</h1>
          <div className="profile-form ">
            <div className="single-form">
              <label htmlFor="" className="">
                Full Name
              </label>
              <input className="" type="text" placeholder="Joseph Andersen" />
            </div>
            <div className="single-form">
              <label htmlFor="" className="">
                Email Address
              </label>
              <input
                className=""
                type="text"
                placeholder="Josephanderson@gmail.com"
              />
            </div>
          </div>
          <div className="profile-form ">
            <div className="single-form">
              <label htmlFor="" className="">
                Phone Number
              </label>
              <input className="" type="text" placeholder="+2348055667788" />
            </div>
          </div>
          <div className="profile-form ">
            <div className="single-form">
              <label htmlFor="" className="">
                Password
              </label>
              <input
                className=""
                type="text"
                placeholder="Enter New Password"
              />
            </div>
            <div className="single-form">
              <label htmlFor="" className="">
                Confirm Password
              </label>
              <input className="" type="text" placeholder="confirm password" />
            </div>
          </div>
          <button  className=" form-button ">Save changes</button>

          <div className="profile-form">
            <div className="manage-account">
              <label htmlFor="" className="">
                Manage Account
              </label>
              <div className="check-box flex gap-2 items-center">
                <input className=" " type="checkbox" />{" "}
                <span>Receive an email when you sign in</span>
              </div>
            </div>
          </div>
          <div className="edit-device">
            <div>
              <div className="edit-footer">
                <div className="edit-footer-top">
                  <img className="" src={Window10} alt="" />
                  <div className="window-text">
                    <p>iOS 10</p>
                    <p>
                      Safari Browser, Today 09:59, 129.205.124.143, Lagos
                      Nigeria
                    </p>
                  </div>
                </div>
                <p className="edit-footer-btn ">
                  This <span>device</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JaybeeTodo;
