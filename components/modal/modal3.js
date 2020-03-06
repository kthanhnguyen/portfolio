import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";

export class modal3 extends Component {
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
        <h1 className="name">TRANSCOSMOS ANALYTICS RECRUIT</h1>
        <h2 className="description">
          The project introduces website data analysis company
        </h2>
        <div className="share">
          <AwesomeButton
            size="large"
            href="https://www.trans-cosmos.co.jp/transcosmos-analytics/recruit/"
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
              <img src="/static/analytic.png" />
            </div>
            <div>
              <img src="/static/analytic_hover.png" />
            </div>
          </Slider>
        </div>
        <div className="section_info">
          <h2>About this project</h2>
          <p>
            Build the target company's website to provide analytical information
            to determine the user interface improvement direction. Analysis is
            based on many factors like Adobe Analytics, Google Analytics, etc.
          </p>
          <hr />
          <p>
            At this project, I act as a front end developer. Get Xd design from
            customers. Then develop the product.
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
            <li>Javascript</li>
            <li>JQuery</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tweenmax.js</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default modal3;
