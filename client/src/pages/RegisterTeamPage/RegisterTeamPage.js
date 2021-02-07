import React, { Component } from "react";
import DuoForm from "./components/DuoForm";
import SuqadForm from "./components/SquadForm";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import "./components/registerTeam.css";
export default class RegisterTeamPage extends Component {
  // component mount
  componentDidMount() {}
  // States
  state = {
    active: "squad",
  };

  //   Change Handle fun
  activeSquad = (e) => {
    const dataId = "squad";
    this.setState({
      active: dataId,
    });
  };
  activeDuo = (e) => {
    const dataId = "duo";
    this.setState({
      active: dataId,
    });
  };

  //   Render From fun
  renderForm = () => {
    if (this.state.active === "squad")
      return (
        <Rotate bottom right delay={400}>
          <SuqadForm />
        </Rotate>
      );
    if (this.state.active === "duo")
      return (
        <Rotate bottom right delay={400}>
          <DuoForm />
        </Rotate>
      );
    else
      return (
        <Rotate bottom right delay={400}>
          <SuqadForm />
        </Rotate>
      );
  };

  //   Render fun
  render() {
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow ml-0 mr-0">
            <div className="col-12">
              <Bounce top>
                <h1 className="titleText text-center ">Regsiter Your Team</h1>
              </Bounce>
              <Fade bottom delay={200}>
                <div className="centerDiv mt-5">
                  <div
                    data-id="squad"
                    onClick={this.activeSquad}
                    className="btn-outer "
                  >
                    <div
                      className={
                        this.state.active === "squad"
                          ? "btn-inner btn-active"
                          : "btn-inner"
                      }
                    >
                      <p
                        className={
                          this.state.active === "squad"
                            ? "btn-text btn-active-text"
                            : "btn-text"
                        }
                      >
                        Squad
                      </p>
                    </div>
                  </div>
                  <div
                    data-id="duo"
                    onClick={this.activeDuo}
                    className="btn-outer ml-4"
                  >
                    <div
                      className={
                        this.state.active === "duo"
                          ? "btn-inner btn-active"
                          : "btn-inner"
                      }
                    >
                      <p
                        className={
                          this.state.active === "duo"
                            ? "btn-text btn-active-text"
                            : "btn-text"
                        }
                      >
                        DUO
                      </p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="col-12">{this.renderForm()}</div>
          </div>
        </div>
      </div>
    );
  }
}
