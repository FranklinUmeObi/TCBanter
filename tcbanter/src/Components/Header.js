import React from "react";
import "./Header.css";
import logo from '../Assets/tringles.png';
import Button from "@material-ui/core/Button";
import Fade from 'react-reveal/Fade';
function Header(props) {



function handleClick(bool){
  props.changePage(bool)
}

  return (
    <div className="header">
      <Fade top cascade>
      <div className="header_containerLeft">
        <img className="header_img"src={logo} alt="The Tringles logo"/>
      </div>
      <div className="header_containerRight">
        <Button className="header_button" color="secondary" onClick={() => handleClick(true)}>
          Tringles
        </Button>
        <Button className="header_button" color="primary" onClick={() => handleClick(false)}>
          TCDconfess
        </Button>
      </div>

      </Fade>
    </div>
  );
}

export default Header;
