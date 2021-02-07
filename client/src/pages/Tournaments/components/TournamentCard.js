import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../../../components/Toast";

export default class TournamentCard extends Component {
  // copy Text fun
  copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);

      SuccessToast("Copied Succeessfully !");
    } catch (error) {
      ErrorToast("Can't Copy Text");
    }
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="card">
          <div className="cardBorder">
            <div
              onClick={() => this.copyText(data._id)}
              className="toutnamentIdDiv centerDiv"
            >
              <h5 className="basicText p-2 fontXsm">
                ID : {data._id}{" "}
                <FontAwesomeIcon
                  className="ml-1"
                  icon={faCopy}
                  size="sm"
                  color="#fff"
                />
              </h5>
            </div>
            <h3 className="basicTitle mt-3 mb-0">{data.tournamentName}</h3>
            <p className="basicText fontXsm mt-0 mb-1">
              Orgnize By {data.organizerName}
            </p>
            <p className="basicPrimaryText basicTextBg centerDiv">
              Entry Fee : {data.regFee} RS
            </p>
            <div className="tournamentPrizeDiv centerDiv mt-2 ">
              <h4 className="basicTitle2">Prize Money</h4>
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
            <div className="mt-4">
              <div className="btn-outer mr-3">
                <div className="btn-inner btn-small btn-active">
                  <p className="btn-text btn-active-text">Register</p>
                </div>
              </div>
              <Link to={`/tournament/${data._id}`}>
                <div className="btn-outer">
                  <div className="btn-inner btn-small">
                    <p className="btn-text">See more</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
