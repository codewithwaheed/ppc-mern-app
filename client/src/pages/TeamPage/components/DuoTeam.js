import React, { Component } from "react";
import AxiosFile from "../../../config/AxiosFile";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import DuoEdit from "./DuoEdit";
import { Link } from "react-router-dom";
import history from "../../../config/history";
import { toast } from "react-toastify";
class DuoTeam extends Component {
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/api/team/duo", {
        withCredentials: true,
      });
      this.setState({
        teamData: response.data,
      });
    } catch (error) {
      this.props.showToast();
      history.push("/login");
    }
  }

  //   constructor
  constructor() {
    super();
    toast.configure();
  }
  //   state

  state = {
    teamData: {},
    activeEdit: false,
  };
  //   Handel Active Edit Change
  activeEdit = () => {
    this.setState({
      activeEdit: !this.state.activeEdit,
    });
  };
  cancelEdit = async (cbValue) => {
    this.setState({
      activeEdit: false,
    });
    if (cbValue) {
      this.setState({
        teamData: {},
      });
      try {
        const response = await AxiosFile.get("/api/team/duo", {
          withCredentials: true,
        });
        if (this.props.userId) {
          this.setState({
            teamData: response.data,
          });
          toast.success("Successfully Update Team.", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {}
    }
  };

  //   Render Team Details
  renderTeamDetail = () => {
    const { teamData, activeEdit } = this.state;

    // render Edit
    if (activeEdit) {
      return <DuoEdit cancelEdit={this.cancelEdit} data={teamData} />;
    }
    if (teamData) {
      var teamLength = Object.keys(teamData).length;
      if (teamLength === 0) {
        return <Loader height={400} />;
      }
    }
    if (teamData === null) {
      return (
        <div className="verticalCenter text-center">
          <div className="basicTitle">No Team created yet</div>
          <Link to="/register-team">
            <div className="btn-outer mt-2  ">
              <div className="btn-inner">
                <p className="btn-text">Create Team</p>
              </div>
            </div>
          </Link>
        </div>
      );
    }

    if (teamData) {
      return (
        <>
          <div onClick={this.activeEdit} className="text-right pointer p-10">
            <div className="mr-5 pr-5">
              <FontAwesomeIcon
                icon={faEdit}
                color="#fff"
                size={"sm"}
              ></FontAwesomeIcon>
              <span className="basicText ml-1">Edit</span>
            </div>
          </div>
          <div className="basicTitle fontLg  text-center mt-1">
            {teamData.teamName}
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-sm-12 text-center">
              <h4 className="basicTitle fontMd">Player 1</h4>
              <div className="basicText mt-0">{teamData.p1Name}</div>
              <div className="basicText mt-0">{teamData.p1Id}</div>
            </div>
            <div className="col-md-6 col-sm-12 text-center ">
              <h4 className="basicTitle fontMd">Player 2</h4>
              <div className="basicText mt-0">{teamData.p2Name}</div>
              <div className="basicText mt-0">{teamData.p2Id}</div>
            </div>
          </div>
        </>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="formContainer ">{this.renderTeamDetail()}</div>
      </div>
    );
  }
}
const MapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(MapStateToProps)(DuoTeam);
