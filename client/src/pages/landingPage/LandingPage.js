import React, { Component } from "react";
import Features from "./components/OurFeatures";
import HowItWorks from "./components/HowtoPlay";
import LandingSlider from "./components/LandingSlider";
import "./components/landingPage.css";
import TournamentFeature from "./components/TournamentFeatures";
import PaymentMethodFeatured from "./components/paymentMethodFeatured";
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingSlider />
        <HowItWorks />
        <TournamentFeature />
        <Features />
        <PaymentMethodFeatured />
      </div>
    );
  }
}
