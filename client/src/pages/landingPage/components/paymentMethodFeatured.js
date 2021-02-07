import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
export default class PaymentMethodFeatured extends Component {
  render() {
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12">
              <Slide left delay={200}>
                <h1 className="titleText text-center">Payment Methods</h1>
              </Slide>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature">
              <Fade bottom delay={200}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage h-auto mt-4"
                      src="assets/images/jazzCash-logo.png"
                      alt="jazz cash"
                    ></img>
                  </div>
                  <h2 className="basicTitle">Jazz Cash</h2>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature">
              <Fade bottom delay={400}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage h-auto mt-4"
                      src="assets/images/easypaisa-logo.png"
                      alt="imageBan"
                    ></img>
                  </div>
                  <h2 className="basicTitle">Easy Paisa</h2>
                </div>
              </Fade>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 feature">
              <Fade bottom delay={600}>
                <div className="card">
                  <div className="featureCircle">
                    <img
                      className="featureImage h-auto"
                      src="assets/images/bankTransfer-logo.png"
                      alt="image21"
                    ></img>
                  </div>
                  <h2 className="basicTitle">Bank Transfer</h2>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
