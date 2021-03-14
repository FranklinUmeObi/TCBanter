import React from "react";
import "./Header.css";

import Button from "@material-ui/core/Button";

function Header(props) {



function handleClick(bool){
  props.changePage(bool)
}

  return (
    <div className="header">
      <div className="header_containerLeft">
        <h1>TCBanter</h1>
      </div>
      <div className="header_containerRight">
        <Button className="header_button" color="secondary" onClick={() => handleClick(true)}>
          TCDmingle
        </Button>
        <Button className="header_button" color="primary" onClick={() => handleClick(false)}>
          TCDconfess
        </Button>
      </div>

      
    </div>
  );
}

export default Header;
