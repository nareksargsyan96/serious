import React from "react";
import { Heading } from "./../../../component/Heading/Heading";
import { FaCode } from "react-icons/fa";
import "./Process.css";

export const Process = () => {
  const process = [
    {
      title: "Discover",
      text: "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    },
    {
      title: "Design",
      text: "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
    },
    {
      title: "Build",
      text: "Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.",
    },
    {
      title: "Deliver",
      text: "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
    },
  ];
  return (
    <div className="main_content">
      <Heading variant="h1" className="header process">
        We Simplify Software Development Process
      </Heading>
      <div>
        <ul className="process_info">
          {process.map((item) => {
            return (
              <li>
                <div>
                  <FaCode />
                  <h1 className={"title"}>{item.title}</h1>
                </div>
                <div>{item.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
