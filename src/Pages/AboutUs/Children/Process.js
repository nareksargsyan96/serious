import React from "react";
import { Heading } from "./../../../component/Heading/Heading";
import { ReactComponent as Discover } from "../../../Img/about/homeDiscover.svg";

import { ReactComponent as Build } from "../../../Img/about/homeBuild.svg";
import { ReactComponent as Design } from "../../../Img/about/homeDesign.svg";
import { ReactComponent as Deliver } from "../../../Img/about/homeDeliver.svg";

import Slide from "react-reveal/Slide";

import "./Process.css";

export const Process = () => {
  const process = [
    {
      svg: <Discover />,
      title: "Discover",
      text: "Exploration is how we shape brands, and we use in-depth research to challenge assumptions at every stage.",
    },
    {
      svg: <Design />,
      title: "Design",
      text: "Our design philosophy is to keep things simple. We like the satisfaction of developing something unique that is simple for end consumers.",
    },
    {
      svg: <Build />,
      title: "Build",
      text: "We create with efficiency and skill, providing adaptable and scalable business-driven solutions, using modern technologies.",
    },
    {
      svg: <Deliver />,
      title: "Deliver",
      text: "We approach both our work and our practice in an iterative manner, continuously searching for ways to better what we do.",
    },
  ];
  return (
    <Slide left>
      <div className="main_process">
        <div>
          <Heading variant="h1" className="header process">
            We Simplify Software Development Process
          </Heading>
        </div>

        <div className="process__item_icon">
          <div className="process_info">
            {process.map((item) => {
              return (
                <div className="">
                  <div className="process_icons">
                    <div>{item.svg}</div>
                    <h1 className={"title"}>{item.title}</h1>
                  </div>
                  <div>{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Slide>
  );
};
