import React, { Component } from "react";
import LogoImg from "../images/logo.svg";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logo__img" src={LogoImg} alt="logo" />
      </div>
    );
  }
}

export default Logo;
