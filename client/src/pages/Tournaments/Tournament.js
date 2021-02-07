import SearchTournament from "./components/SearchTournament";
import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import AxiosFile from "../../config/AxiosFile";
import "./components/tournament.css";
import TournamentCard from "./components/TournamentCard";
import { ErrorToast } from "../../components/Toast";
import FilterTournament from "./components/FilterTournament";
export default class Tournament extends Component {
  // component mount
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/api/tournament/");
      if (response) {
        this.setState({
          tournamentData: response.data,
          orignalData: response.data,
        });
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Can't Load Tournaments");
    }
  }
  // constructor for loading toast
  constructor() {
    super();
    toast.configure();
  }
  // state
  state = {
    // main tournament data
    tournamentData: null,
    // orignal data
    orignalData: null,
    // search State
    searchState: false,
  };

  // searchData callback
  searchData = (data) => {
    this.setState({
      searchState: true,
      tournamentData: data,
    });
  };
  // closeSearch callback
  closeSearch = () => {
    this.setState({
      tournamentData: this.state.orignalData,
    });
  };
  // Getting filter data callback
  getFilterData = (data) => {
    this.setState({
      tournamentData: data,
    });
  };

  // main render
  render() {
    var count = 0;
    const { tournamentData, orignalData } = this.state;
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12">
              <Bounce top>
                <h1 className="titleText text-center mb-2">Tournaments</h1>
              </Bounce>
              <div className="filterTournamentSec">
                <FilterTournament
                  data={orignalData}
                  filterData={this.getFilterData}
                />
                <SearchTournament
                  data={orignalData}
                  searchData={this.searchData}
                  closeSearch={this.closeSearch}
                />
              </div>
            </div>
            {!tournamentData && (
              <div className="col-12">
                <Loader />
              </div>
            )}
            {tournamentData && tournamentData.length > 0
              ? tournamentData.map((item) => {
                  if (count === 3) count = 0;
                  count++;
                  console.log(count);
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12 tournament">
                      <Fade bottom delay={200 * count}>
                        <TournamentCard key={item._id} data={item} />
                      </Fade>
                    </div>
                  );
                })
              : tournamentData && (
                  <div className="col-12 text-center mt-5 mb-5">
                    <h3 className="basicTitle2 mt-5 ">
                      Can't Find Any Tournament !
                    </h3>
                  </div>
                )}
          </div>
        </div>
      </div>
    );
  }
}
