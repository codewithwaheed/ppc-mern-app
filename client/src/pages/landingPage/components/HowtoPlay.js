import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
export default class HowItWorks extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid basicBg">
          <div className="row basicRow">
            <div className="col-12">
              <Slide left delay={200}>
                <h1 className="titleText text-center">How to Play ?</h1>
              </Slide>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 howToPlay">
              <Fade bottom delay={200}>
                <div className="card">
                  <div className="cardBorder">
                    <div className="shapeCircle">
                      <h3 className="shapeText">1</h3>
                    </div>
                    <h4 className="basicTitle mt-2">Create your Team</h4>
                    <p className="basicText">
                      Create your own team / roaster on our platform for
                      participating in DUO or SQUAD tournaments
                    </p>

                    <Link to="/register-team">
                      <div className="btn-outer">
                        <div className="btn-inner btn-small">
                          <p className="btn-text">Create Team</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 howToPlay">
              <Fade bottom delay={400}>
                <div className="card ">
                  <div className="cardBorder">
                    <div className="shapeCircle">
                      <h3 className="shapeText">2</h3>
                    </div>
                    <h4 className="basicTitle mt-2">Register tournament</h4>
                    <p className="basicText mt-1">
                      You can find multiple tournaments registration ongoing in
                      SOLO , DUO and SQUAD . Just Register your team in
                      available Tournaments.
                    </p>
                    <div className="btn-outer">
                      <div className="btn-inner btn-small">
                        <p className="btn-text">Register</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 howToPlay">
              <Fade bottom delay={600}>
                <div className="card ">
                  <div className="cardBorder">
                    <div className="shapeCircle">
                      <h3 className="shapeText">3</h3>
                    </div>
                    <h4 className="basicTitle mt-2">Pay Entry Fee</h4>
                    <p className="basicText">
                      You can successfully register yourself after paying ENTRY
                      FEE of respective tournament. Payment method like JAZZ
                      CASH , EASIY PESSA and Through BANK ACCOUNT is availble.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 howToPlay">
              <Fade bottom delay={800}>
                <div className="card ">
                  <div className="cardBorder">
                    <div className="shapeCircle">
                      <h3 className="shapeText">4</h3>
                    </div>
                    <h4 className="basicTitle mt-2">Join Room</h4>
                    <p className="basicText ">
                      After successfull registration room details will be email
                      or whatsapp to registered details on Time.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
