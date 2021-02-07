import React, { Component } from "react";
import "../adminTournament.css";

import CreateTournamentForm from "./components/CreateTournamentForm";
export default class CreateTournamentPage extends Component {
  // render main fun
  render() {
    return (
      <div className="container-fluid">
        <div className="row basicAdminRow">
          <div className="col-12">
            <h3 className="basicTitle text-center">Create Tournament</h3>
          </div>
          <div className="col-12">
            <CreateTournamentForm />
          </div>
        </div>
      </div>
    );
  }
}
