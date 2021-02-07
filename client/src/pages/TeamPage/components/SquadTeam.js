import React, { Component } from "react";
import AxiosFile from "../../../config/AxiosFile";
import Loader from "../../../components/Loader";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import SquadEdit from "./SquadEdit";
import { toast } from "react-toastify";
import history from "../../../config/history";
class SquadTeam extends Component {
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/api/team/squad", {
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

  constructor() {
    super();
    toast.configure();
  }

  //   state

  state = {
    teamData: {},
    activeEdit: false,
    activeToast: false,
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
        const response = await AxiosFile.get("/api/team/squad", {
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
      return <SquadEdit cancelEdit={this.cancelEdit} data={teamData} />;
    }

    // render Loader

    if (teamData) {
      var teamLength = Object.keys(teamData).length;
      if (teamLength === 0) {
        return <Loader height={400} />;
      }
    }
    // render No account
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
    // render details
    if (teamData) {
      return (
        <>
          <div onClick={this.activeEdit} className="text-right pointer p-10">
            <div className="mr-5">
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
          <div className="row">
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
            <div className="col-md-6 col-sm-12 text-center mt-2">
              <h4 className="basicTitle fontMd">Player 3</h4>
              <div className="basicText mt-0">{teamData.p3Name}</div>
              <div className="basicText mt-0">{teamData.p3Id}</div>
            </div>
            <div className="col-md-6 col-sm-12 text-center mt-2">
              <h4 className="basicTitle fontMd">Player 4</h4>
              <div className="basicText mt-0">{teamData.p4Name}</div>
              <div className="basicText mt-0">{teamData.p4Id}</div>
            </div>
            {teamData.p5Id && (
              <div className="col-md-6 col-sm-12 text-center mt-2">
                <h4 className="basicTitle fontMd">Player 5</h4>
                <div className="basicText mt-0">{teamData.p5Name}</div>
                <div className="basicText mt-0">{teamData.p5Id}</div>
              </div>
            )}
            {teamData.p6Id && (
              <div className="col-md-6 col-sm-12 text-center mt-2">
                <h4 className="basicTitle fontMd">Player 6</h4>
                <div className="basicText mt-0">{teamData.p6Name}</div>
                <div className="basicText mt-0">{teamData.p6Id}</div>
              </div>
            )}
          </div>
        </>
      );
    }
  };
  //   render main fun
  render() {
    return (
      <div>
        <div className="formContainer squadFormClipPath pb-3">
          {this.renderTeamDetail()}
        </div>
      </div>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
  };
};
export default connect(MapStateToProps)(SquadTeam);
