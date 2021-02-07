import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default class YourTournamentCard extends Component {
  // state
  state = {};

  render() {
    const { data } = this.props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="yourTournamentCard">
          <div>
            <h4 className="basicTitle2 mb-0">{data.tournamentName}</h4>
            <p className="basicText mt-0 mb-0">
              Status: {data.tournamentStatus}
            </p>
            <p className="basicText mt-0 ">
              Created on :{" "}
              <Moment format="D MMM YYYY" withTitle>
                {data.createdAt}
              </Moment>
            </p>
          </div>
          <div className="yourTournamentActionsDiv">
            <FontAwesomeIcon
              className="yourTournamentActions"
              icon={faEye}
              size="sm"
            />
            <Link to={`/admin/tournament/delete/${data._id}`}>
              <FontAwesomeIcon
                className="yourTournamentActions"
                icon={faTrash}
                size="sm"
              />
            </Link>
            <FontAwesomeIcon
              className="yourTournamentActions"
              icon={faEdit}
              size="sm"
            />
          </div>
        </div>
      </div>
    );
  }
}
