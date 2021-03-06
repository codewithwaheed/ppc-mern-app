import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Rotate from "react-reveal/Rotate";
import DuoTeam from "./components/DuoTeam";
import SuqadTeam from "./components/SquadTeam";
import { toast } from "react-toastify";
class TeamPage extends Component {
  constructor() {
    toast.configure();
    super();
  }
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
  showToast = () => {
    toast.error("Please Login Your Account", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  //   Render Team fun
  renderTeam = () => {
    if (this.state.active === "squad")
      return (
        <Rotate bottom right delay={400}>
          <SuqadTeam showToast={this.showToast} />
        </Rotate>
      );
    if (this.state.active === "duo")
      return (
        <Rotate bottom right delay={400}>
          <DuoTeam showToast={this.showToast} />
        </Rotate>
      );
    else
      return (
        <Rotate bottom right delay={400}>
          <SuqadTeam showToast={this.showToast} />
        </Rotate>
      );
  };

  // Render fun
  render() {
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow ml-0 mr-0">
            <div className="col-12">
              <Bounce top>
                <h1 onClick={this.showToast} className="titleText text-center ">
                  Your Team
                </h1>
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
            <div className="col-12">{this.renderTeam()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamPage;
