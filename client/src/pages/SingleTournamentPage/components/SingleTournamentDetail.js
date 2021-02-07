import React, { Component } from "react";
import Moment from "react-moment";

export default class SingleTournamentDetail extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="formContainer p-4">
        <p className="basicPrimaryText">
          <span className="fontBold">Registration Ends : </span>
          <Moment format="D MMM YYYY" withTitle>
            {data.registrationEnd}
          </Moment>
        </p>
        <p className="basicPrimaryText">
          <span className="fontBold">Starting From : </span>
          <Moment format="D MMM YYYY" withTitle>
            {data.startingDate}
          </Moment>
        </p>
        <p className="basicPrimaryText">
          <span className="fontBold">Entry FEE : </span>
          {data.regFee} PKR
        </p>
        <p className="basicPrimaryText">
          <span className="fontBold">Type : </span>
          {data.tournamentType}
        </p>
        <h4 className="basicTitle2 text-center mt-3">Details</h4>
        <p className="basicText text-center mt-2">{data.tournamentDetail}</p>
      </div>
    );
  }
}
