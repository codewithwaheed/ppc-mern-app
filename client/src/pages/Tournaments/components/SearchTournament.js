import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

export default class SearchTournament extends Component {
  // state
  state = {
    // check
    check: "tid",
    // search state
    search: "",
    // search State\
    searchState: false,
  };

  // handleCheck

  handleCheck = (value) => {
    this.setState({
      check: value,
      search: "",
    });
  };

  // getSearch value
  getSearch = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  // Search fun
  Search = () => {
    const { search, check } = this.state;
    const { data, searchData } = this.props;
    var filterData = [];
    if (search) {
      if (check === "tid") {
        filterData = _.filter(data, { _id: search });
      } else if (check === "organizer") {
        filterData = _.filter(data, { organizerName: search });
      }
    }
    this.setState({
      searchState: true,
    });
    searchData(filterData);
  };

  // close Search fun
  closeSearch = () => {
    this.props.closeSearch();
    this.setState({
      search: "",
      searchState: false,
    });
  };
  // render main
  render() {
    const { searchState } = this.state;
    return (
      <div>
        <div className="">
          <label className="formLabel fontSm bold">SEARCH</label>
          <input
            type="text"
            placeholder="Search"
            className="formInput"
            onChange={this.getSearch}
            value={this.state.search}
          ></input>
          <div className="tournamentSearchButton d-inline">
            <FontAwesomeIcon
              onClick={this.Search}
              icon={faSearch}
              size="sm"
              color="#fff"
            />
          </div>
          {searchState && (
            <button onClick={this.closeSearch} className="btn-simple d-inline">
              Close
            </button>
          )}

          <div className="d-flex mt-2">
            <label
              className="radioButton"
              onClick={() => {
                this.handleCheck("tid");
              }}
            >
              By Tournament ID
              <input
                type="radio"
                defaultChecked={this.state.check === "tid"}
                name="tournament"
              />
              <span className="checkmark" />
            </label>
            <label
              className="radioButton ml-2"
              onClick={() => {
                this.handleCheck("organizer");
              }}
            >
              By Organizer
              <input
                type="radio"
                defaultChecked={this.state.check === "organizer"}
                name="tournament"
              />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}
