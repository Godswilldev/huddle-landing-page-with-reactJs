import React, { Component } from "react";
import headerImg from "../images/illustration-mockups.svg";
class HeaderImg extends Component {
  render() {
    return (
      <div className="header__Img">
        <img className="header__Image" src={headerImg} alt="headerImg" />
      </div>
    );
  }
}

export default HeaderImg;
