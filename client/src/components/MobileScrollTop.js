import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import React, { Component } from "react";

export default class MobileScrollTop extends Component {
  componentDidMount() {
    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 100) {
        $("#mobileScrollTop").fadeIn();
      } else {
        $("#mobileScrollTop").fadeOut();
      }
    });
    $(document).ready(function () {
      $("#mobileScrollTop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
  }
  render() {
    return (
      <div id="mobileScrollTop" className="mobileScrollTop">
        <FontAwesomeIcon
          icon={faArrowUp}
          size="lg"
          className="mt-2"
          color="#eaa300"
        />
      </div>
    );
  }
}
