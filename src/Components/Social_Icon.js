import React, { Component } from "react";
class Social extends Component {
  render() {
    return (
      <div className="social__icon">
        <i className={this.props.name}></i>
      </div>
    );
  }
}

export default Social;
