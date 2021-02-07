import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
export default class FaqQuestion extends Component {
  // State
  state = {
    faqActive: false,
  };

  // FAQ ACTIVE FUN
  activeFaq = () => {
    this.setState({
      faqActive: !this.state.faqActive,
    });
  };

  // Render fun
  render() {
    return (
      <div className="faqDiv">
        <div className="faqHead">
          <h3 className=" faqTitle mb-0">{this.props.title}</h3>
          <div className="pointer" onClick={this.activeFaq}>
            <FontAwesomeIcon
              icon={this.state.faqActive ? faMinus : faPlus}
              color="#fff"
              size="sm"
            ></FontAwesomeIcon>
          </div>
        </div>

        {this.state.faqActive && (
          <Fade>
            <div className="faqContent">
              <span className="faqText">{this.props.content}</span>
            </div>
          </Fade>
        )}
      </div>
    );
  }
}
