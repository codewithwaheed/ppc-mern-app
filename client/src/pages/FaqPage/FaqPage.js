import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import FaqQuestion from "./components/FaqQuestion";
import "./components/faq.css";
export default class FaqPage extends Component {
  render() {
    const FaqData = [
      {
        title: "How you recieve your prize money ?",
        content:
          "You will recieve your prize money through jazz cash or Eapessa on your registered account number",
      },
      {
        title: "How you recieve your prize money ?",
        content:
          "You will recieve your prize money through jazz cash or Eapessa on your registered account number",
      },
      {
        title: "How you recieve your prize money ?",
        content:
          "You will recieve your prize money through jazz cash or Eapessa on your registered account number",
      },
    ];
    return (
      <div className="basicBg">
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12">
              <Bounce top>
                <h1 className="titleText text-center mb-5">FAQ</h1>
              </Bounce>
            </div>
            <div className="col-12">
              {FaqData.map((item) => {
                return (
                  <Fade bottom delay={600}>
                    <FaqQuestion title={item.title} content={item.content} />
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
