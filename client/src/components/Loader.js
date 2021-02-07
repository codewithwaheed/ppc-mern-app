import React, { Component } from "react";

export default class Loader extends Component {
  render() {
    return (
      <div
        className="spinnerCenter"
        style={
          this.props.height
            ? {
                height: this.props.height,
              }
            : {}
        }
      >
        <div
          className="spinner"
          style={
            this.props.size
              ? {
                  height: `${this.props.size}px`,
                  width: `${this.props.size}px`,
                }
              : {}
          }
        >
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      </div>
    );
  }
}
