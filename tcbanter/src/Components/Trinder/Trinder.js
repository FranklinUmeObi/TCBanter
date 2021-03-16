import React from "react";
import "./Trinder.css";

import Form from "./Form";

import Fade from "react-reveal/Flip";

function Trinder() {
  return (
    <div className="trinder" id="test12">
      <Fade top cascade>
        <div className="header_intro">
          <h1 className="header_introHeader">Welcome to Tringles!</h1>
          <p className="header_introText">
            If you missed the glory days of the old Trinder on Facebook, I
            welcome you to the new and improved version, now with a website!
          </p>
        </div>
        <div className="header_formContainer">
          <Form />
        </div>


        {/* <div className="CarouselContainer">
          <p className="header_introText">
            Here's some past trinders for inspiration!
          </p>
        </div> */}

      </Fade>
    </div>
  );
}

export default Trinder;
