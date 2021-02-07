import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBarDropDown from "./SideBarDropDown";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class AdminMobileSidebar extends Component {
  // state
  state = { activeDropDown: null, activeSideBar: false };

  //   handle fun
  handleDropDown = (value) => {
    this.setState({
      activeDropDown: value,
    });
  };
  // handle mobile sidebar change
  handleChangeSideBar = () => {
    this.setState({
      activeSideBar: !this.state.activeSideBar,
    });
  };
  render() {
    const { activeDropDown, activeSideBar } = this.state;
    return (
      <>
        <div
          onClick={this.handleChangeSideBar}
          className="adminSidebarButton pointer"
        >
          <FontAwesomeIcon
            className="m-1"
            icon={activeSideBar === true ? faAngleLeft : faAngleRight}
            size="2x"
          />
        </div>
        <div className={activeSideBar ? "sideBarM sideBarMactive" : "sideBarM"}>
          <Link to="/admin/dashbord" onClick={this.handleChangeSideBar}>
            <div className="sideBarItem mt-5">Dashbord</div>
          </Link>
          <SideBarDropDown
            title="Tournament"
            handleDropDown={this.handleDropDown}
            active={activeDropDown}
            item1="Create"
            item1Link="/admin/tournament/create"
            closeSideBar={this.handleChangeSideBar}
          />
          <SideBarDropDown
            title="Team"
            handleDropDown={this.handleDropDown}
            active={activeDropDown}
            closeSideBar={this.handleChangeSideBar}
          />
        </div>
      </>
    );
  }
}
