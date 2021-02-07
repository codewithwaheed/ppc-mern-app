import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faDiscord,
  faWhatsapp,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import Zoom from "react-reveal/Zoom";
import history from "../config/history";
import classnames from "classnames";

export default class Footer extends Component {
  // component mount
  componentDidMount() {
    const containAdmin = window.location.href.indexOf("admin");
    if (containAdmin > -1) {
      this.setState({ displayFooter: false });
    }
  }
  // state
  state = { displayFooter: true };
  render() {
    return (
      <div
        className={classnames("basicBg", {
          "d-none": !this.state.displayFooter,
        })}
      >
        <div className="container-fluid">
          <div className="row basicRow">
            <Zoom delay={200}>
              <div className="col-md-4 col-sm-12 footer">
                <h3 className="basicTitle">PAKISTAN PAID COUSTOMS</h3>
                <p className="basicText">
                  we are here aimming to provide a fair tournament every day and
                  provide a opportunity for our PUBG lover to EARN money with
                  thier Skills
                </p>
              </div>
            </Zoom>
            <Zoom delay={200}>
              <div className="col-md-4 col-sm-12 footer">
                <h3 className="basicTitle">Quick Links</h3>
                <p className="footerLink">
                  {"\u00BB"} Tournaments Registration
                </p>
                <p className="footerLink">
                  {"\u00BB"} Check Your Register Team
                </p>
                <p className="footerLink">
                  {"\u00BB"} Check Regsiter Tournaments
                </p>

                <p
                  onClick={() => {
                    history.push("/admin/dashbord");
                  }}
                  className="footerLink"
                >
                  {"\u00BB"} Admin Portal
                </p>

                <p className="footerLink">{"\u00BB"} FAQ</p>
              </div>
            </Zoom>
            <Zoom delay={200}>
              <div className="col-md-4 col-sm-12 footer">
                <h3 className="basicTitle">CONTACT US</h3>
                <div className="socialFlex mt-3">
                  <div className="footerSocialShape">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      color="#fff"
                      size="lg"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="footerSocialShape">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="#fff"
                      size="lg"
                    ></FontAwesomeIcon>
                  </div>
                  <div className="footerSocialShape">
                    <FontAwesomeIcon
                      icon={faDiscord}
                      color="#fff"
                      size="lg"
                    ></FontAwesomeIcon>
                  </div>
                </div>

                <div className="socialFlex mt-3">
                  <div className="footerSocialShape mr-2">
                    <FontAwesomeIcon
                      icon={faGooglePlusG}
                      color="#fff"
                      size="lg"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="footerPhoneText">support@ppc.com</p>
                </div>
                <div className="socialFlex mt-3">
                  <div className="footerSocialShape mr-2">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      color="#fff"
                      size="lg"
                    ></FontAwesomeIcon>
                  </div>
                  <p className="footerPhoneText">+93062298677</p>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
        <div className="footerCopyRight">
          Copyright 2020 {"\u00A9"} Pakistan Paid Coustoms All Right Reserved
        </div>
      </div>
    );
  }
}
