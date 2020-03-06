import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";

export class modal1 extends Component {
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
        <h1 className="name">Courses Online</h1>
        <h2 className="description">
          Courses Online react builds a javascript web application based on
          Firebase.
        </h2>
        <div className="share">
          <AwesomeButton
            size="large"
            href="https://kthanhnguyen.github.io/portfolio/"
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
              <img src="/static/courses_online.png" />
            </div>
            <div>
              <img src="/static/courses_online_hover.png" />
            </div>
            <div>
              <img src="/static/courses_online_03.png" />
            </div>
            <div>
              <img src="/static/courses_online_04.png" />
            </div>
            <div>
              <img src="/static/courses_online_05.png" />
            </div>
            <div>
              <img src="/static/courses_online_06.png" />
            </div>
            <div>
              <img src="/static/courses_online_07.png" />
            </div>
          </Slider>
        </div>
        <div className="section_info">
          <h2>About this project</h2>
          <p>Project to buy online courses.</p>
          <hr />
          <p>
            This project I undertake the design, interface, and functionality of
            the product. The project uses Firebase to manage data.
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
            <li>Javascript ES6</li>
            <li>HTML5</li>
            <li>CSS3 preprocessed with SCSS</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Redux Thunk</li>
            <li>Hooks</li>
            <li>HOC</li>
            <li>Firebase</li>
            <li>Ant-Design</li>
            <li>Bootstrap</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default modal1;
