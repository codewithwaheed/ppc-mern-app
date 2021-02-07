import React, { Component } from "react";
import "./components/singleTournament.css";
import SingleTournamentHeroSec from "./components/SingleTournamentHeroSec";
import SingleTournamentDetail from "./components/SingleTournamentDetail";
import { ErrorToast } from "../../components/Toast";
import AxiosFile from "../../config/AxiosFile";
import history from "../../config/history";
import Loader from "../../components/Loader";
import classnames from "classnames";
import SingleTournamentRules from "./components/SingleTournamentRules";

export default class SingleTournamentPage extends Component {
  // component mount
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const response = await AxiosFile.get(`/api/tournament/${id}`);
      if (response) {
        this.setState({
          data: response.data,
        });
      }
    } catch (error) {
      ErrorToast("Can't Find Tournament Details !");
      history.push("/tournaments");
    }
  }

  //   State
  state = {
    data: null,

    // active state

    active: "detail",
  };

  //   handle active

  handleActive = (value) => {
    this.setState({
      active: value,
    });
  };

  //   render Details/Rules/Results
  renderSection = () => {
    const { active, data } = this.state;
    if (active === "detail") {
      return <SingleTournamentDetail data={data} />;
    }
    if (active === "rules") {
      return <SingleTournamentRules data={data} />;
    }
  };

  // render MAin
  render() {
    const { data, active } = this.state;
    return (
      <div className="basicBg">
        {!data && <Loader height="100vh" />}
        {data && (
          <>
            <SingleTournamentHeroSec data={data} />
            <div className="container-fluid">
              <div className="row basicRow">
                <div className="col-md-9 col-sm-12">
                  <div className="centerDiv mt-3">
                    <div
                      className="btn-outer"
                      onClick={() => this.handleActive("detail")}
                    >
                      <div
                        className={classnames("btn-inner btn-small", {
                          "btn-active": active === "detail",
                        })}
                      >
                        <p
                          className={classnames("btn-text", {
                            "btn-active-text": active === "detail",
                          })}
                        >
                          Details
                        </p>
                      </div>
                    </div>
                    <div
                      className="btn-outer ml-3"
                      onClick={() => this.handleActive("rules")}
                    >
                      <div
                        className={classnames("btn-inner btn-small", {
                          "btn-active": active === "rules",
                        })}
                      >
                        <p
                          className={classnames("btn-text", {
                            "btn-active-text": active === "rules",
                          })}
                        >
                          Rules
                        </p>
                      </div>
                    </div>
                    <div
                      className="btn-outer ml-3"
                      onClick={() => this.handleActive("result")}
                    >
                      <div
                        className={classnames("btn-inner btn-small", {
                          "btn-active": active === "result",
                        })}
                      >
                        <p
                          className={classnames("btn-text", {
                            "btn-active-text": active === "result",
                          })}
                        >
                          Result
                        </p>
                      </div>
                    </div>
                  </div>

                  {this.renderSection()}
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="tournamentPrizeDiv centerDiv">
                    <h4 className="basicTitle2 text-center">Prize Money</h4>
                    <div className="basicTextBg">
                      {data.killPrize && (
                        <p className="basicPrimaryText">
                          1 Kill : {data.killPrize} RS
                        </p>
                      )}
                      {data.topFraggerPrize && (
                        <p className="basicPrimaryText">
                          Top Fragger : {data.topFraggerPrize} RS
                        </p>
                      )}
                      <p className="basicPrimaryText">
                        First position : {data.firstPrize} RS
                      </p>
                      <p className="basicPrimaryText">
                        second position : {data.secondPrize} Rs
                      </p>
                      <p className="basicPrimaryText">
                        third position : {data.thirdPrize} RS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
