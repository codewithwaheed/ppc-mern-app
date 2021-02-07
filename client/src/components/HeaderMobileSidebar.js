import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import history from "../config/history";
export default class HeaderMobileSidebar extends Component {
  componentDidMount() {
    const url = history.location.pathname;
    //  switch to set Active Sidebar
    switch (url) {
      case "/":
        this.handleActive("home");
        break;
      case "/your-team":
        this.handleActive("team");
        break;
      case "/tournaments":
        this.handleActive("tournament");
        break;
      case "/check-register-tournaments":
        this.handleActive("register");
        break;
      case "/FAQ":
        this.handleActive("faq");
        break;
      default:
        break;
    }
  }

  // state
  state = {
    active: "",
  };

  // handle Active
  handleActive = (value) => {
    this.setState({
      active: value,
    });
  };
  // handle CLose fun
  handleClose = (value) => {
    this.handleActive(value);
    this.props.closeSideBar();
  };
  // render Main
  render() {
    const { active } = this.state;
    const { activeSideBar, renderLogin } = this.props;
    return (
      <div
        className={classnames("headerSideBar ", {
          headerSideBarActive: activeSideBar,
        })}
      >
        <div className="mt-3 ml-2">{renderLogin()}</div>
        <div className="itemDiv">
          <Link to="/">
            <div
              onClick={() => this.handleClose("home")}
              className={classnames("barItem", {
                barItemActive: active === "home",
              })}
            >
              HOME
            </div>
          </Link>
          <Link to="/your-team">
            <div
              onClick={() => this.handleClose("team")}
              className={classnames("barItem", {
                barItemActive: active === "team",
              })}
            >
              TEAM
            </div>
          </Link>
          <Link to="/tournaments">
            <div
              onClick={() => this.handleClose("tournament")}
              className={classnames("barItem", {
                barItemActive: active === "tournament",
              })}
            >
              {" "}
              TOURNAMENTS
            </div>
          </Link>
          <Link to="/check-register-tournaments">
            <div
              onClick={() => this.handleClose("register")}
              className={classnames("barItem", {
                barItemActive: active === "register",
              })}
            >
              {" "}
              REGISTER TOURNAMENTS
            </div>
          </Link>
          <Link to="/FAQ">
            <div
              onClick={() => this.handleClose("faq")}
              className={classnames("barItem", {
                barItemActive: active === "faq",
              })}
            >
              {" "}
              FAQ
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
