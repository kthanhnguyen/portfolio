import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Content from "../content/content";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";
import Typist from "react-typist";

import WithModal from "../modal/WithModal";
import Modal1 from "../modal/modal1";
import Modal2 from "../modal/modal2";
import Modal3 from "../modal/modal3";
import Modal4 from "../modal/modal4";
import Modal5 from "../modal/modal5";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Typist className="hello">
            <h1>Hello, my name is Nguyen Kim Thanh</h1>
            I’m a front-end developer with 2 years of experience in building web
            application.
          </Typist>
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/portfolio");
              }}
            >
              Goto the next page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

let Modal01 = WithModal(Modal1, 1);
let Modal02 = WithModal(Modal2, 2);
let Modal03 = WithModal(Modal3, 3);
let Modal04 = WithModal(Modal4, 4);
let Modal05 = WithModal(Modal5, 5);

export const Two = withNavigationContext(({ fullpage }) => {
  function openModal01() {
    let modal = document.getElementById("modal1");
    // modal.classList.add("show");
    modal.className = "modal active";
  }
  function openModal02() {
    let modal = document.getElementById("modal2");
    modal.className = "modal active";
  }
  function openModal03() {
    let modal = document.getElementById("modal3");
    modal.className = "modal active";
  }
  function openModal04() {
    let modal = document.getElementById("modal4");
    modal.className = "modal active";
  }
  function openModal05() {
    let modal = document.getElementById("modal5");
    modal.className = "modal active";
  }

  return (
    <Page>
      <Section wrapper={false} backgroundColor="#2a2a2a">
        <Content
          main={
            <Page>
              <div className="modal-block">
                <Modal01 />
                <Modal02 />
                <Modal03 />
                <Modal04 />
                <Modal05 />
              </div>
              <Section backgroundColor="#2a2a2a">
                <div>
                  <h1>Web Developer Portfolio</h1>
                  <ul className="grid-list">
                    <li className="item repo">
                      <a className="screen" onClick={openModal01}>
                        <div className="bar">
                          <h2>COURSES ONLINE</h2>
                          <i />
                        </div>
                        <div className="main">
                          <div className="back">
                            <img src="/static/courses_online.png" />
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>REACT</li>
                                <li>REDUX</li>
                                <li>FIREBASE</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">
                            <img src="/static/courses_online_hover.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="item repo">
                      <a className="screen" onClick={openModal02}>
                        <div className="bar">
                          <h2>MY MOVIE</h2>
                          <i />
                        </div>
                        <div className="main">
                          <div className="back">
                            <img src="/static/movie.png" />
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>ANGULAR 8</li>
                                <li>BOOTSTRAP</li>
                                <li>API</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">
                            <img src="/static/movie_hover.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="item repo">
                      <a className="screen" onClick={openModal03}>
                        <div className="bar">
                          <h2>TRANSCOSMOS ANALYTICS RECRUIT</h2>
                          <i />
                        </div>
                        <div className="main">
                          <div className="back">
                            <img src="/static/analytic.png" />
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JQUERY</li>
                                <li>ANIMATIONS</li>
                                <li>TWEENMAX</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">
                            <img src="/static/analytic_hover.png" />
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="item repo">
                      <a className="screen" onClick={openModal04}>
                        <div className="bar">
                          <h2>JAPAN MEETING &amp; EVENT</h2>
                          <i />
                        </div>
                        <div className="main">
                          <div className="back">
                            <img src="/static/japan.png" />
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>HTML5</li>
                                <li>SCSS</li>
                                <li>JQUERY</li>
                                <li>BOOTSTRAP 4</li>
                                <li>GULP</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">
                            <img src="/static/japan_hover.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="item repo">
                      <a className="screen" onClick={openModal05}>
                        <div className="bar">
                          <h2>GAME MONSTER</h2>
                          <i />
                        </div>
                        <div className="main">
                          <div className="back">
                            <img src="/static/monster.PNG" />
                          </div>
                          <div className="tags">
                            <div>
                              <ul>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>ANIMATIONS</li>
                                <li>JAVASCRIPT</li>
                                <li>CANVAS</li>
                              </ul>
                            </div>
                          </div>
                          <div className="imgs">
                            <img src="/static/monster_hover.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </Section>
            </Page>
          }
          action={
            <div className="button">
              <AwesomeButton
                size="large"
                onPress={() => {
                  fullpage.navigate("/contact");
                }}
              >
                Goto the next page
              </AwesomeButton>
            </div>
          }
        />
      </Section>
    </Page>
  );
});

export const Third = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#4158b4">
      <Content
        main={
          <div className="intro">
            <h1>CONTACT</h1>
          </div>
        }
        action={
          <div className="button">
            <AwesomeButton
              size="large"
              onPress={() => {
                fullpage.navigate("/portfolio");
              }}
            >
              Goto the prev page
            </AwesomeButton>
          </div>
        }
      />
    </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "slide about",
    children: <Home />
  },
  {
    slug: "portfolio",
    className: "portfolio",
    children: <Two />
  },
  {
    slug: "contact",
    className: "slide contact",
    children: <Third />
  }
];
