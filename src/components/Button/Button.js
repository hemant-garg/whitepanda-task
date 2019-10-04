import React, { Component } from "react";

import "./Button.scss";

class Button extends Component {
  render() {
    return <button className="button">{this.props.content}</button>;
  }
}

export default Button;
