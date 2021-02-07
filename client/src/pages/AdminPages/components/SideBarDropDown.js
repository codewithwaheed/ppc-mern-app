import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
export default class SideBarDropDown extends Component {
  render() {
    const {
      title,
      active,
      item1,
      item2,
      item3,
      item1Link,
      item2Link,
      item3Link,
    } = this.props;
    return (
      <>
        <Link>
          <div
            onClick={() => {
              if (active === title) this.props.handleDropDown("");
              else this.props.handleDropDown(title);
            }}
            className="sideBarItem"
          >
            {title}
            <FontAwesomeIcon
              icon={active === title ? faAngleUp : faAngleDown}
              size="sm"
              color="#eaa300"
            ></FontAwesomeIcon>
          </div>
        </Link>
        <Fade opposite when={active === title}>
          {active === title && (
            <div className="sideBarDropDown" onClick={this.props.closeSideBar}>
              {item1 && (
                <Link to={item1Link}>
                  <div className="dropDownItem">{item1}</div>
                </Link>
              )}
              {item2 && (
                <Link to={item2Link}>
                  <div className="dropDownItem">{item2}</div>
                </Link>
              )}
              {item3 && (
                <Link to={item3Link}>
                  <div className="dropDownItem">{item3}</div>
                </Link>
              )}
            </div>
          )}
        </Fade>
      </>
    );
  }
}
