import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import Error from "./Error";
import Axios from "../../../config/AxiosFile";

class DuoForm extends Component {
  //State
  state = {
    // error state
    errors: {},

    // form input states
    teamName: "",
    p1Name: "",
    p2Name: "",
    p1Id: "",
    p2Id: "",
  };

  // Form input fin
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

  //Submit fun

  Submit = async () => {
    const { teamName, p1Name, p2Name, p1Id, p2Id } = this.state;
    const formData = {
      teamName,
      p1Name,
      p2Name,
      p1Id,
      p2Id,
      teamType: "duo",
      userId: this.props.userId,
    };

    try {
      // Tring to register
      const response = await Axios.post("/team/register", formData);
      if (response) {
        this.props.history.push("/");
      }
    } catch (error) {
      // setting errors
      this.setState({
        errors: error.response.data,
      });
    }
  };

  // Render fun
  render() {
    // error var
    const { errors } = this.state;
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
              onChange={this.getP2Id}
            ></input>
            {errors.p2Id && <Error>{errors.p1Id}</Error>}
          </div>
          {errors.teamExist && (
            <div className="errorDiv mt-2">{errors.teamExist}</div>
          )}
          <div className="centerDiv">
            <div className=" btn-outer mt-4 mb-4" onClick={this.Submit}>
              <div className="btn-inner">
                <p className="btn-text">Register Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(DuoForm);
