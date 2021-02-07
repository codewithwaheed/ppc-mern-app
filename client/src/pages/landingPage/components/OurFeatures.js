import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default class Features extends Component {
  render() {
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12">
              <Slide left delay={200}>
                <h1 className="titleText text-center">Our Values</h1>
              </Slide>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature">
              <Fade bottom delay={200}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage"
                      src="assets/images/vision.png"
                      alt="imageVision"
                    ></img>
                  </div>
                  <h2 className="basicTitle">VISION</h2>
                  <p className="basicText">
                    We are here to provide FAIR game competition , from which
                    our pakistan pubg player can play for fun and earn some cash
                    as well
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature">
              <Fade bottom delay={400}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage"
                      src="assets/images/ban.png"
                      alt="imageBan"
                    ></img>
                  </div>
                  <h2 className="basicTitle">INSTANT BAN</h2>
                  <p className="basicText">
                    If we found someone Hacking and some other activities that
                    ruin Fair gameplay , we will Permenantly BAN the team from
                    our platform and reorganize the whole tournament
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature">
              <Fade bottom delay={600}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage"
                      src="assets/images/refund.png"
                      alt="image21"
                    ></img>
                  </div>
                  <h2 className="basicTitle">REFUND</h2>
                  <p className="basicText">
                    Team can refund thier Entry Fee before getting thier
                    Tournament shecdule and slot details by contacting our
                    support system at different platform
                  </p>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 feature">
              <Fade bottom delay={800}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage"
                      src="assets/images/prizeMoney.png"
                      alt="image12"
                    ></img>
                  </div>
                  <h2 className="basicTitle">PRIZE MONEY</h2>
                  <p className="basicText">
                    Prize Money will be Transfer to Team with in next 24 Hour of
                    Tournament. Money will be Transfer on your Register jazz
                    cash or Easiy pessa number.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
