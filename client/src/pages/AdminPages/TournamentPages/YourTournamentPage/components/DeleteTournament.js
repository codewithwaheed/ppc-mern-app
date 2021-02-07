import React, { Component } from "react";
import BasicModal from "../../../../../components/Modal";
import { ErrorToast, SuccessToast } from "../../../../../components/Toast";
import AxiosFile from "../../../../../config/AxiosFile";
import history from "../../../../../config/history";
export default class DeleteTournament extends Component {
  state = { modalState: true };
  handleClose = () => {
    this.setState({ modalState: false });
    history.goBack();
  };
  //   Delete TournMENT
  deleteTournament = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    try {
      const response = await AxiosFile.delete(`/api/tournament/delete/${id}`);
      if (response) {
        SuccessToast("Tournament Deleted Successfuly");
        history.goBack();
      }
    } catch (error) {
      ErrorToast("Can't Delete Tournament !");
    }
  };
  renderBody = () => {
    return (
      <div className="basicText">
        Are you sure You wanna Delete this tournament ?
      </div>
    );
  };
  renderFooter = () => {
    return (
      <div>
        <div
          onClick={() => {
            this.handleClose();
          }}
          className="btn-outer  "
        >
          <div className="btn-inner btn-small btn-active">
            <p className="btn-text btn-active-text">Cancle</p>
          </div>
        </div>
        <div
          onClick={() => {
            this.deleteTournament();
          }}
          className="btn-outer ml-2  "
        >
          <div className="btn-inner btn-small">
            <p className="btn-text">Delete</p>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="loginModalBg">
        <BasicModal
          show={this.state.modalState}
          onHide={this.handleClose}
          body={this.renderBody()}
          footer={this.renderFooter()}
          title="Delete Tournament"
        />
      </div>
    );
  }
}
