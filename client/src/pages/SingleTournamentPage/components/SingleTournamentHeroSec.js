import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";

export default class SingleTournamentHeroSec extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="singleTournamentHeroBg">
        <div
          className="tournamentStatusDiv"
          style={{
            backgroundColor: getTournamentStatusColor(data.tournamentStatus),
          }}
        >
          <h5 className="tournamentStatusText">
            {getTournamentStatus(data.tournamentStatus)}
          </h5>
        </div>
        <div>
          <Bounce top>
            <h1 className="titleText text-center mb-0">
              {data.tournamentName}
            </h1>
          </Bounce>
          <Bounce top>
            <h5 className="basicText text-center" style={{ fontSize: "1rem" }}>
              Orgnizer : {data.organizerName}
            </h5>
          </Bounce>
        </div>
      </div>
    );
  }
}
export const getTournamentStatus = (status) => {
  if (status === "registration") return "Registration Open";
  if (status === "inProgress") return "In Progress";
  if (status === "completed") return "Completed";
};
export const getTournamentStatusColor = (status) => {
  if (status === "registration") return "#ed4337";
  if (status === "inProgress") return "#FFCC00";
  if (status === "completed") return "#4BB543";
};
