import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "../lettering/lettering";
import Background from "../background/background";
import Content from "../content/content";
import Mouse from "../mouse/mouse";
import Section from "../section/section";
import Page from "../page/page";
import "./fullpage.css";
import Typist from "react-typist";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#292c35">
      <Content
        main={
          <Typist className="hello">
            <h1>Hello, my name is Nguyen Kim Thanh</h1>
            Use the button bellow to navigate to the next page
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


export const Two = withNavigationContext(({ fullpage }) => {
  return (
    <Section wrapper={false} backgroundColor="#2a2a2a">
      <Content
        main={
          <Page>
            <Section backgroundColor="#2a2a2a">
              <div>
                <h1>PROJECT</h1>
                <ul className="grid-list">
                  <li className="item repo">
                    <a className="screen" href="/detail/transcosmos-analytics">
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
                        <div className="imgs"><img src="/static/analytic_hover.png" /></div>
                      </div>
                    </a>
                  </li>

                  <li className="item repo">
                    <a className="screen">
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
                        <div className="imgs"><img src="/static/japan_hover.png" /></div>
                      </div>
                    </a>
                  </li>
                  <li className="item repo">
                    <a className="screen">
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
                        <div className="imgs"><img src="/static/monster_hover.png" /></div>
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
  );
});
export const Detail = withNavigationContext(({ fullpage }) => {
  return <Page>
    <Content main={
      <div>Hello</div>
    }></Content>
  </Page>
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
    className: "slide portfolio",
    children: <Two />
  },
  {
    slug: "detail",
    className: "detail",
    children: <Detail />
  },
  {
    slug: "contact",
    className: "slide contact",
    children: <Third />
  }
];
