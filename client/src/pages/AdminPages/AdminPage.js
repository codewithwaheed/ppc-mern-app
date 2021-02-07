import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import AdminMobileSidebar from "./components/AdminMobileSidebar";
import "./components/adminPage.css";
import AdminSidebar from "./components/AdminSidebar";
import DashbordPage from "./Dashbord/DashbordPage";
import CreateTournamentPage from "./TournamentPages/CreateTournamentPage/CreateTournamentPage";
import AxiosFile from "../../config/AxiosFile";
import history from "../../config/history";
import { toast } from "react-toastify";
import { ErrorToast } from "../../components/Toast";
import YourTournamentPage from "./TournamentPages/YourTournamentPage/YourTournamentPage";
import DeleteTournament from "./TournamentPages/YourTournamentPage/components/DeleteTournament";

class AdminPage extends Component {
  // component mount
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/auth/admin/success", {
        withCredentials: true,
      });
    } catch (error) {
      ErrorToast("You are not Authorized to use ADMIN PORTAl");
      history.push("/");
    }
  }

  constructor() {
    toast.configure();
    super();
  }
  //state
  state = {};

  render() {
    return (
      <>
        <div className="adminFlex">
          <AdminMobileSidebar />

          <div className="adminSidebarDiv d-none d-md-inline">
            <AdminSidebar />
          </div>

          <div className="adminContentDiv">
            <Route path="/admin/dashbord" component={DashbordPage} />
            <Route
              path="/admin/tournament/create"
              component={CreateTournamentPage}
            />
            <Route
              path="/admin/tournament/delete/:id"
              component={DeleteTournament}
            />
            <Route
              path="/admin/tournament/yourTournament"
              component={YourTournamentPage}
            />
          </div>
        </div>
      </>
    );
  }
}

const MapStateToProps = (state) => {
  return {
    admin: state.auth.admin,
  };
};
export default connect(MapStateToProps)(AdminPage);
