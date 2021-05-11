import React, { Component } from "react";
import Logo from "./Logo";
import HeaderImg from "./HeaderImg";
import HeaderText from "./HeaderText";
import Button from "./Button";
import Social from "./Social_Icon";
class App extends Component {
  render() {
    return (
      <div className="greg">
        <div className="hero__background">
          <Logo />
          <div className="header">
            <HeaderImg />
            <div className="greg">
              <HeaderText />
              <Button />
            </div>
          </div>
          <div className="social__icons">
            <Social name="fab fa-facebook" />
            <Social name="fab fa-twitter" />
            <Social name="fab fa-instagram" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
