import React, { Component } from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
// import CheckConnection from "./components/CheckConnection";
import { Route, Switch } from "react-router-dom";
import RegisterTeamPage from "./pages/RegisterTeamPage/RegisterTeamPage";
import Tournament from "./pages/Tournaments/Tournament";
import FaqPage from "./pages/FaqPage/FaqPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPages/AdminPage";
import SingleTournamentPage from "./pages/SingleTournamentPage/SingleTournamentPage";
import MobileScrollTop from "./components/MobileScrollTop";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CheckConnection /> */}

        <Header />

        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/register-team" component={RegisterTeamPage}></Route>
          <Route path="/your-team" component={TeamPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route
            path="/tournament/:id"
            component={SingleTournamentPage}
          ></Route>
          <Route path="/tournaments" component={Tournament}></Route>
          <Route path="/FAQ" component={FaqPage}></Route>
          <Route path="/admin" component={AdminPage}></Route>
        </Switch>
        <MobileScrollTop />
        <Footer />
      </div>
    );
  }
}
