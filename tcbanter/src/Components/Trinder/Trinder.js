import React from "react";
import "./Trinder.css";
import Form from "./Form"
function Trinder() {
  return (
    <div className="trinder">
      <div className="header_intro">
        <h1 className="header_introHeader">Welcome to TCDmingle!</h1>
        <p className="header_introText">
          If you missed the glory days of the old Trinder on Facebook, I welcome
          you to the new and improved version, now with a website!
        </p>
      </div>
      <div className="header_formContainer">
        <Form/> 
      </div>
      <div className="header_"></div>
    </div>
  );
}

export default Trinder;
