import React, { Component } from 'react';
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
        <h2 className="description">Website filled up with cool UI/UX animations developed as Lead Front-End Developer at Perverte.</h2>
        <div className="share">
          <AwesomeButton
            size="large"
            href="https://google.com"
            target="_blank"
          >
            <svg className="i-svg" height="50" version="1.1" width="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50" space="preserve" data-icon="facebook,"><path d="M36.999,36.998H13V13.089L19,13V7h-12v35.998h35.998V27.999h-6V36.998z M25,7l6,6l-9,9l6,6l8.999-9l6,6V7H25z" fill="#ffffff"></path></svg> VISITS THIS WEBSITE
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
          <h2>Technical Sheet</h2>
          <p>In this project I acted as part of a small group of misfits hell-bent on making cool stuff.</p>
          <hr />
          <p>At the time I was still using BackboneJS for the client side routing, although the views were renderd directly in the Microsoft C# MVC's back-end. The client side javascript was entirely modularized with RequireJS, which is awesome for code maintainance and scalability. That was probably the biggest challange of the project as it has a huge number of different templates, to make everything run smoothly and cohesively was a huge win.</p>
        </div>
        <ul className="section_info">
          <h2>Technologies</h2>
          <em>Code technologies I got involved while working on this project</em>
          <hr />
          <ul className="keywords">
            <li>Front-End Development</li>
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS3 preprocessed with SCSS</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Ant-Design</li>
            <li>Bootstrap</li>
          </ul>
        </ul>
      </div >
    );
  }
}

export default modal1;
