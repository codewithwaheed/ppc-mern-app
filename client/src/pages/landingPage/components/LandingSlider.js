import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";

export default class LandingSlider extends Component {
  render() {
    var items = [
      {
        name: "Solo Tournament",
        fee: "100 RS",
        perKill: "50 RS",
        first: "500 RS",
        second: "200 RS",
        third: "100 RS",
        imageUrl: "assets/images/slide4.jpg",
      },
      {
        name: "Duo Tournament",
        fee: "200 RS",
        first: "3000 RS",
        second: "1000 RS",
        third: "400 RS",
        imageUrl: "assets/images/slide2.jpg",
      },
      {
        name: "Squad Tournament",
        fee: "400 RS",
        first: "3000 RS",
        second: "1000 RS",
        third: "400 RS",
        imageUrl: "assets/images/slide5.jpg",
      },
    ];
    return (
      <div>
        <div className="bg-dark">
          <Carousel
            navButtonsAlwaysVisible="true"
            animation="fade"
            interval="5000"
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
function Item(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.item.imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "600px",
        width: "100%",
      }}
    >
      <h2 className="sliderTitle animate__animated animate__bounceInDown">
        {props.item.name}
      </h2>
      <p className="sliderText animate__animated animate__fadeInUp animate__delay-1s">
        Entry Fee : {props.item.fee}
      </p>
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="sliderTitle2 ">PRIZE POOL</h2>
        {props.item.perKill && (
          <p className="sliderText"> Per Kill :{props.item.perKill} </p>
        )}
        <p className="sliderText">First position : {props.item.first}</p>
        <p className="sliderText">second position : {props.item.second}</p>
        <p className="sliderText">third position : {props.item.third}</p>
      </div>
      <h2 className="sliderTitle2 animate__animated animate__bounceInUp animate__delay-3s ">
        one day tournament !<br />4 Different Maps
      </h2>
    </div>
  );
}
