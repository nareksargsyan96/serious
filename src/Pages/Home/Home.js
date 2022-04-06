import React from "react";
import { Heading } from "../../component/Heading/Heading";
import Slide from "react-reveal/Slide";
import "./Home.css";
export const Home = () => {
  return (
    <Slide left>
      <div className="main_content">
        <Heading variant="h1" className="header">
          YOUR BUSINESS NEEDS OUR SOLUTIONS
        </Heading>

        <Heading variant="span" className="subtitle">
          Have an idea? Serious is the best solution
        </Heading>

        <Heading variant="p" className="info_text">
          We deliver web and mobile app development services to global
          businesses since 2017, We deliver globally, providing result-driven
          project management and seamless communication. Our design-focused
          approach and project execution processes help you to deliver the right
          solutions.
        </Heading>
      </div>
    </Slide>
  );
};
