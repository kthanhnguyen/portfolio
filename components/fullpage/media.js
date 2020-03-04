import React from "react";
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
                fullpage.navigate("/page-two");
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

// export const Third = withNavigationContext(({ fullpage }) => {
//   return (
//     <Section wrapper={false} backgroundColor="#ff6f5e">
//       <Background src="https://caferati.me/images/series/bojack-0.png" />
//       <Content
//         main={
//           <Lettering
//             title="PAGE-THREE"
//             text={["This is a screen with preloaded background image."]}
//           />
//         }
//         action={
//           <div className="button">
//             <AwesomeButton
//               size="large"
//               onPress={() => {
//                 fullpage.navigate("/page-two");
//               }}
//             >
//               Goto the prev page
//             </AwesomeButton>
//           </div>
//         }
//       />
//     </Section>
//   );
// });

export const media = [
  {
    slug: "",
    className: "slide page-one",
    children: <Home />
  },
  {
    slug: "page-two",
    className: "sectioned page-two",
    children: (
      <Page>
        <Section wrapper={false} backgroundColor="#4158b4">
          <Content
            main={
              <div className="intro">
                <h1>INTRODUCTION</h1>
                <div className="intro__item">
                  <span>Fullname:</span>Nguyen Kim Thanh
                </div>
                <div className="intro__item">
                  <span>Phone:</span>079-871-1321
                </div>
                <div className="intro__item">
                  <span>Email:</span>nguyenkimthanh901@gmail.com
                </div>
                <div className="intro__item">
                  <span>Address:</span>96/1/7, Phan Dinh Phung street, District
                  Phu Nhuan, Ho Chi Minh city.
                </div>
                <div className="intro__item">
                  <span>Date of Birth:</span>September 10th, 1996
                </div>
              </div>
            }
            action={<Mouse />}
          />
        </Section>
        <Section backgroundColor="#617be3">
          <div>
            <h1>EDUCATION</h1>
            <p>2014-2017: University of Science Ho Chi Minh city.</p>
          </div>
          <div>
            <h1>EXPERIENCE</h1>
            <p>12/2017- 2/2018: Intership FrontEnd at GMO-Z.com RUNSYSTEM</p>
            <p>5/2018- 2020: Front End Developer at Transcosmos VietNam </p>
          </div>
        </Section>
      </Page>
    )
  },
  {
    slug: "page-three",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide page-three",
    children: (
      <Page>
        <Section backgroundColor="#2a2a2a">
          <div>
            <h1>PROJECT</h1>
            <ul className="grid-list">
              <li className="item">
                <a className="screen">
                  <div className="bar">
                    <h2>SKY GO Desktop </h2>
                    <i />
                  </div>
                  <div className="main">
                    <div className="back">
                      <img src="/static/monster.PNG" />
                    </div>
                  </div>
                </a>
              </li>
              <li className="item">
                <a className="screen">
                  <div className="bar">
                    <h2>SKY GO Desktop </h2>
                    <i />
                  </div>
                  <div className="main">
                    <div className="back">
                      <img src="/static/monster.PNG" />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </Page>
    )
  }
];
