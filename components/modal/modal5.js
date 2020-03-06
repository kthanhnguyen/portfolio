import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";

export class modal5 extends Component {
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
        <h1 className="name">GAME MONSTER</h1>
        <h2 className="description">
          Monster killer game developed on javascript
        </h2>
        <div className="share">
          <AwesomeButton
            size="large"
            href="https://kthanhnguyen.github.io/javascript/monster/"
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
              <img src="/static/monster.PNG" />
            </div>
            <div>
              <img src="/static/monster_hover.png" />
            </div>
          </Slider>
        </div>
        <div className="section_info">
          <h2>About this project</h2>
          <p>The game kills moving monsters by clicking on them.</p>
          <hr />
          <p>This project I designed, and developed as a trainee.</p>
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
            <li>HTML5 - canvas</li>
            <li>CSS</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default modal5;
