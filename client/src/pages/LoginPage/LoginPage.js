import React, { Component } from "react";
import Modal from "../../components/Modal";
import { SERVER_URL } from "../../config/configs";
import history from "../../config/history";

export default class LoginPage extends Component {
  state = { modalState: true };
  handleClose = () => {
    this.setState({ modalState: false });
    history.goBack();
  };

  renderBody = () => {
    return (
      <div className="text-center">
        <div
          onClick={() => {
            window.open(`${SERVER_URL}/auth/google`, "_self");
          }}
          className="btn-outer mt-5 mb-5  "
        >
          <div className="btn-inner">
            <p className="btn-text">Login</p>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="loginModalBg"></div>
        <Modal
          show={this.state.modalState}
          onHide={this.handleClose}
          body={this.renderBody()}
          title="Login With Google"
        />
      </>
    );
  }
}
