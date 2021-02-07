import React, { Component } from "react";
import classnames from "classnames";
import Axios from "../../../config/AxiosFile";
import { connect } from "react-redux";
import Error from "../../RegisterTeamPage/components/Error";

class DuoEdit extends Component {
  // component mount fun
  componentDidMount() {
    const { teamName, p1Name, p2Name, p1Id, p2Id } = this.props.data;

    this.setState({
      teamName,
      p1Name,
      p2Name,
      p1Id,
      p2Id,
    });
  }
  //State
  state = {
    // Errors State
    errors: {},

    // form input states
    teamName: "",
    p1Name: "",
    p2Name: "",
    p1Id: "",
    p2Id: "",

    // Suqad data
    teamData: this.props.data,
  };

  // Input Change Fun
  getTeamName = (e) => {
    this.setState({
      teamName: e.target.value,
    });
  };
  getP1Name = (e) => {
    this.setState({
      p1Name: e.target.value,
    });
  };
  getP2Name = (e) => {
    this.setState({
      p2Name: e.target.value,
    });
  };

  getP1Id = (e) => {
    this.setState({
      p1Id: e.target.value,
    });
  };
  getP2Id = (e) => {
    this.setState({
      p2Id: e.target.value,
    });
  };

  //   Cancel fun
  Cancel = () => {
    this.props.cancelEdit(false);
  };
  // Submit Fun
  Submit = async () => {
    const { teamName, p1Name, p2Name, p1Id, p2Id } = this.state;

    const { userId } = this.props;

    var formData = {
      userId: userId,
      teamName,
      teamType: "duo",
      p1Name,
      p2Name,
      p1Id,
      p2Id,
    };

    try {
      // Tring to update
      const { _id } = this.props.data;
      const response = await Axios.post(`/api/team/update/${_id}`, formData, {
        withCredentials: true,
      });
      if (response) {
        this.props.cancelEdit(true);
      }
    } catch (error) {
      // setting errors
      this.setState({
        errors: error.response.data,
      });
    }
  };

  //   Render Fun
  render() {
    // error var
    const { errors } = this.state;
    // team Data var destruct
    const { teamData } = this.state;

    // render return
    return (
      <div>
        <div className="formContainer">
          <div className="formInputDiv mt-5 pt-5">
            <label className="formLabel">Team Name</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.teamName,
              })}
              type="text"
              defaultValue={teamData.teamName}
              placeholder="Enter your Team Name"
              onChange={this.getTeamName}
            ></input>
            {errors.teamName && <Error>{errors.teamName}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel">Player 1 IGN</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p1Name,
              })}
              type="text"
              defaultValue={teamData.p1Name}
              placeholder="Enter your Player 1 Name"
              onChange={this.getP1Name}
            ></input>
            {errors.p1Name && <Error>{errors.p1Name}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel mr-2">Charachter ID</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p1Id,
              })}
              type="text"
              placeholder="Enter your Player 1 ID"
              onChange={this.getP1Id}
              defaultValue={teamData.p1Id}
            ></input>
            {errors.p1Id && <Error>{errors.p1Id}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel">Player 2 IGN</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p2Name,
              })}
              type="text"
              defaultValue={teamData.p2Name}
              placeholder="Enter your Player 2 Name"
              onChange={this.getP2Name}
            ></input>
            {errors.p2Name && <Error>{errors.p2Name}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel mr-2">Charachter ID</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p2Id,
              })}
              type="text"
              placeholder="Enter your Player 2 ID"
              defaultValue={teamData.p2Id}
              onChange={this.getP2Id}
            ></input>
            {errors.p2Id && <Error>{errors.p1Id}</Error>}
          </div>
          <div className="centerDiv">
            <div className=" btn-outer mt-4 mb-4 mr-4" onClick={this.Cancel}>
              <div className="btn-inner btn-small">
                <p className="btn-text">Cancel</p>
              </div>
            </div>
            <div className=" btn-outer mt-4 mb-4" onClick={this.Submit}>
              <div className="btn-inner btn-active btn-small">
                <p className="btn-text btn-active-text">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(DuoEdit);
