import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";

export class modal4 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h1 className="name">JAPAN MEETING &amp; EVENT</h1>
        <h2 className="description">Japan tourism introduction event</h2>
        <div className="share">
          <AwesomeButton
            size="large"
            href="https://www.japanmeetings.org/"
            target="_blank"
          >
            <svg
              className="i-svg"
              height="50"
              version="1.1"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50 50"
              space="preserve"
              data-icon="facebook,"
            >
              <path
                d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z"
                fill="#ffffff"
              ></path>
            </svg>{" "}
            VISITS THIS WEBSITE
          </AwesomeButton>
        </div>
        <div className="slider">
          <Slider {...settings}>
            <div>
              <img src="/static/japan.png" />
            </div>
            <div>
              <img src="/static/japan_hover.png" />
            </div>
          </Slider>
        </div>
        <div className="section_info">
          <h2>About this project</h2>
          <p>
            Establish website introducing tourism destinations, and prominent
            events of Japan. Users can search for each place, entertainment,
            dining, event venue in any prefecture in Japan.
          </p>
          <hr />
          <p>
            This project, I act as front end developer. I got the customers
            photoshop desgin, is project development like design.
          </p>
        </div>
        <ul className="section_info">
          <h2>Technical Sheet</h2>
          <em>
            Code technologies I got involved while working on this project
          </em>
          <hr />
          <ul className="keywords">
            <li>Front-End Development</li>
            <li>Gulp</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default modal4;
