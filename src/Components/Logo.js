import React, { Component } from "react";
import LogoImg from "../images/logo.svg";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={LogoImg} alt="logo" />
      </div>
    );
  }
}

export default Logo;
