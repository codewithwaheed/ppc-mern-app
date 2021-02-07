import React, { Component } from "react";
import classnames from "classnames";
import Axios from "../../../config/AxiosFile";
import { connect } from "react-redux";
import Error from "./Error";
class SuqadForm extends Component {
  //State
  state = {
    // check states
    checkSub1: false,
    checkSub2: false,

    // Errors State
    errors: {},

    // form input states
    teamName: "",
    p1Name: "",
    p2Name: "",
    p3Name: "",
    p4Name: "",
    p5Name: "",
    p6Name: "",
    p1Id: "",
    p2Id: "",
    p3Id: "",
    p4Id: "",
    p5Id: "",
    p6Id: "",
  };

  // Change Handle fun
  activeSub1 = () => {
    this.setState({
      checkSub1: !this.state.checkSub1,
    });
  };
  activeSub2 = () => {
    this.setState({
      checkSub2: !this.state.checkSub2,
    });
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
  getP3Name = (e) => {
    this.setState({
      p3Name: e.target.value,
    });
  };
  getP4Name = (e) => {
    this.setState({
      p4Name: e.target.value,
    });
  };
  getP5Name = (e) => {
    this.setState({
      p5Name: e.target.value,
    });
  };
  getP6Name = (e) => {
    this.setState({
      p6Name: e.target.value,
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
  getP3Id = (e) => {
    this.setState({
      p3Id: e.target.value,
    });
  };
  getP4Id = (e) => {
    this.setState({
      p4Id: e.target.value,
    });
  };
  getP5Id = (e) => {
    this.setState({
      p5Id: e.target.value,
    });
  };
  getP6Id = (e) => {
    this.setState({
      p6Id: e.target.value,
    });
  };

  // Submit Fun
  Submit = async () => {
    const {
      teamName,
      p1Name,
      p2Name,
      p3Name,
      p4Name,
      p5Name,
      p6Name,
      p1Id,
      p2Id,
      p3Id,
      p4Id,
      p5Id,
      p6Id,
    } = this.state;

    const { userId } = this.props;

    var formData = {
      userId: userId,
      teamName,
      teamType: "squad",
      p1Name,
      p2Name,
      p3Name,
      p4Name,
      p1Id,
      p2Id,
      p3Id,
      p4Id,
    };

    const { checkSub1, checkSub2 } = this.state;
    // checking substitute player data and adding them
    if (checkSub1 && checkSub2) {
      formData["p5Name"] = p5Name;
      formData["p6Name"] = p6Name;
      formData["p5Id"] = p5Id;
      formData["p6Id"] = p6Id;
    } else if (checkSub1) {
      formData["p5Name"] = p5Name;
      formData["p5Id"] = p5Id;
    } else if (checkSub2) {
      formData["p6Name"] = p6Name;
      formData["p6Id"] = p6Id;
    }
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

  //   Render Fun
  render() {
    // error var
    const { errors } = this.state;

    // render return
    return (
      <div>
        <div className="formContainer squadFormClipPath">
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
          <div className="formInputDiv">
            <label className="formLabel">Player 3 IGN</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p3Name,
              })}
              type="text"
              placeholder="Enter your Player 3 Name"
              onChange={this.getP3Name}
            ></input>
            {errors.p3Name && <Error>{errors.p3Name}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel mr-2">Charachter ID</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p3Id,
              })}
              type="text"
              placeholder="Enter your Player 3 ID"
              onChange={this.getP3Id}
            ></input>
            {errors.p3Id && <Error>{errors.p3Id}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel">Player 4 IGN</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p4Name,
              })}
              type="text"
              placeholder="Enter your Player 4 Name"
              onChange={this.getP4Name}
            ></input>
            {errors.p4Name && <Error>{errors.p4Name}</Error>}
          </div>
          <div className="formInputDiv">
            <label className="formLabel mr-2">Charachter ID</label>
            <input
              className={classnames("formInput", {
                formInputError: errors.p4Id,
              })}
              type="text"
              placeholder="Enter your Player 4 ID"
              onChange={this.getP4Id}
            ></input>
            {errors.p4Id && <Error>{errors.p4Id}</Error>}
          </div>
          <div className="centerDiv mt-2">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkSub1}
                onChange={this.activeSub1}
              />
              Add 5th Player as 1st Substitute
            </label>
          </div>
          {this.state.checkSub1 === true ? (
            <div>
              {" "}
              <div className="formInputDiv">
                <label className="formLabel">Player 5 IGN</label>
                <input
                  className={classnames("formInput", {
                    formInputError: errors.p5Name,
                  })}
                  type="text"
                  placeholder="Enter your Player 5 Name"
                  onChange={this.getP5Name}
                ></input>
                {errors.p5Name && <Error>{errors.p5Name}</Error>}
              </div>
              <div className="formInputDiv">
                <label className="formLabel mr-2">Charachter ID</label>
                <input
                  className={classnames("formInput", {
                    formInputError: errors.p5Id,
                  })}
                  type="text"
                  placeholder="Enter your Player 5 ID"
                  onChange={this.getP5Id}
                ></input>
                {errors.p5Id && <Error>{errors.p5Id}</Error>}
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="centerDiv mt-2">
            <label className="formLabel">
              <input
                type="checkbox"
                checked={this.state.checkSub2}
                onChange={this.activeSub2}
              />
              Add 6th Player as 2nd Substitute
            </label>
          </div>
          {this.state.checkSub2 === true ? (
            <div>
              {" "}
              <div className="formInputDiv">
                <label className="formLabel">Player 6 IGN</label>
                <input
                  className={classnames("formInput", {
                    formInputError: errors.p6Name,
                  })}
                  type="text"
                  placeholder="Enter your Player 6 Name"
                  onChange={this.getP6Name}
                ></input>
                {errors.p6Name && <Error>{errors.p6Name}</Error>}
              </div>
              <div className="formInputDiv">
                <label className="formLabel mr-2">Charachter ID</label>
                <input
                  className={classnames("formInput", {
                    formInputError: errors.p6Id,
                  })}
                  type="text"
                  placeholder="Enter your Player 6 ID"
                  onChange={this.getP6Id}
                ></input>
                {errors.p6Id && <Error>{errors.p6Id}</Error>}
              </div>
            </div>
          ) : (
            <></>
          )}
          {errors.teamExist && (
            <div className="errorDiv">{errors.teamExist}</div>
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

// map state to props
const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(SuqadForm);
