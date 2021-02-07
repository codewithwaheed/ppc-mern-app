import React, { Component } from "react";

export default class Error extends Component {
  render() {
    return <div className="errorMessage">{this.props.children}</div>;
  }
}
