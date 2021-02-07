import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AxiosFile from "../../../config/AxiosFile";
import TournamentCard from "../../Tournaments/components/TournamentCard";
import Slide from "react-reveal/Slide";
import Loader from "../../../components/Loader";
import { Fade } from "react-reveal";

export default class TournamentFeature extends Component {
  // component did mount
  async componentDidMount() {
    try {
      const response = await AxiosFile.get("/api/tournament/feature");
      if (response) {
        this.setState({
          tournamentData: response.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // states
  state = {
    tournamentData: null,
  };

  //   render Main
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div className="basicBg basicRow">
        <Slide left delay={200}>
          <h1 className="titleText text-center">Feature Tournament</h1>
        </Slide>
        {!this.state.tournamentData && (
          <div>
            <Loader />
          </div>
        )}
        {this.state.tournamentData && (
          <Fade delay={200}>
            <Carousel
              // swipeable={false}
              // draggable={false}
              // showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              // containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // deviceType={this.props.deviceType}
              // dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
              {this.state.tournamentData &&
                this.state.tournamentData.map((item) => {
                  return (
                    <div key={item._id} className="tournament ">
                      <TournamentCard data={item} />
                    </div>
                  );
                })}
            </Carousel>
          </Fade>
        )}
      </div>
    );
  }
}
