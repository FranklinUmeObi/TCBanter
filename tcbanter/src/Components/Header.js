import React from "react";
import "./Header.css";

import Button from "@material-ui/core/Button";

function Header() {
  return (
    <div className="header">
      <div className="header_containerLeft">
        <h1>TCBanter</h1>
      </div>
      <div className="header_containerRight">
        <Button className="header_button" color="secondary">
          TCDmingle
        </Button>
        <Button className="header_button" color="primary">
          TCDconfess
        </Button>
      </div>

      
    </div>
  );
}

export default Header;
