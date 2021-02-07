import React, { Component } from "react";
import AxiosFile from "../../../../config/AxiosFile";
import YourTournamentCard from "./components/YourTournamentCard";
import Loader from "../../../../components/Loader";
import { ErrorToast } from "../../../../components/Toast";

export default class YourTournamentPage extends Component {
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/api/tournament/yourTournament", {
        withCredentials: true,
      });
      if (response) {
        this.setState({
          data: response.data,
        });
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Can't Load Tournaments");
    }
  }

  //   state
  state = {
    data: null,
  };

  //   delete Tournament

  render() {
    const { data } = this.state;
    return (
      <div className="container-fluid">
        <div className="row basicAdminRow">
          <div className="col-12">
            <h3 className="basicTitle text-center">My Tournaments</h3>
          </div>
          {!data && (
            <div className="col-12">
              <Loader />
            </div>
          )}
          {data && data.length === 0 ? (
            <>
              <div className="col-12">
                <h1 className="basicTitle2 text-center mt-5">
                  Oops, No Tournament Created by you Yet
                </h1>
              </div>
            </>
          ) : (
            data &&
            data.map((item) => {
              return <YourTournamentCard key={item._id} data={item} />;
            })
          )}
        </div>
      </div>
    );
  }
}
