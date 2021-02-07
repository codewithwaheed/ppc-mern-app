import React, { Component } from "react";
import classnames from "classnames";
import _ from "lodash";
export default class FilterTournament extends Component {
  // state
  state = {
    active: "all",
  };
  // handle active
  handleActive = (value) => {
    const { data } = this.props;
    var filterData = [];
    this.setState({
      active: value,
    });

    if (value !== "all") filterData = _.filter(data, { tournamentType: value });
    else filterData = data;

    console.log(filterData, data, value);

    this.props.filterData(filterData);
  };
  render() {
    const { active } = this.state;
    return (
      <div className="filterChips my-3">
        <div
          onClick={() => this.handleActive("all")}
          className={classnames("chip ", { chipActive: active === "all" })}
        >
          All
        </div>
        <div
          onClick={() => this.handleActive("squad")}
          className={classnames("chip ", { chipActive: active === "squad" })}
        >
          sqauad
        </div>
        <div
          onClick={() => this.handleActive("duo")}
          className={classnames("chip ", { chipActive: active === "duo" })}
        >
          Duo
        </div>
        <div
          onClick={() => this.handleActive("solo")}
          className={classnames("chip ", { chipActive: active === "solo" })}
        >
          Solo
        </div>
      </div>
    );
  }
}
