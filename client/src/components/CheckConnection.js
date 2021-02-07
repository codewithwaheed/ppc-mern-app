import React, { Component } from "react";
import { Offline } from "react-detect-offline";
export default class CheckConnection extends Component {
  render() {
    return (
      <Offline>
        <div className="offlineDiv">
          Oops, You lost Your Internet Connection
        </div>
      </Offline>
    );
  }
}
