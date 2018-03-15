import React from "react";
import Link from "gatsby-link";

import logo from "../../assets/logo-only.svg";

const Sidebar = () => (
  <div
    style={{
      height: "100%",
      width: "224px",
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
      overflowX: "hidden",
      padding: "16px 32px"
    }}
  >
    <Link to="/">
      <img src={logo} alt="Logo" style={{ width: "80px" }} />
    </Link>
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/contact">Contact</Link>
  </div>
);

export default Sidebar;
