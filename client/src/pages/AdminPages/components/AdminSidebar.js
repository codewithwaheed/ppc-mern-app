import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarDropDown from "./SideBarDropDown";
export default class adminSidebar extends Component {
  // state
  state = { activeDropDown: "" };

  //   handle fun
  handleDropDown = (value) => {
    this.setState({
      activeDropDown: value,
    });
  };
  render() {
    const { activeDropDown } = this.state;
    return (
      <div className="sideBar">
        <Link to="/admin/dashbord">
          <div className="sideBarItem">Dashbord</div>
        </Link>

        <SideBarDropDown
          title="Tournament"
          handleDropDown={this.handleDropDown}
          active={activeDropDown}
          item1="Create Tournament"
          item1Link="/admin/tournament/create"
          item2="My Tournaments"
          item2Link="/admin/tournament/yourTournament"
        />
        <SideBarDropDown
          title="Team"
          handleDropDown={this.handleDropDown}
          active={activeDropDown}
        />
      </div>
    );
  }
}
