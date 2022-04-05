import React from "react";
import { Heading } from "../../component/Heading/Heading";

export const AboutUs = () => {
  return (
    <div className="main_content" >
      <Heading variant="h1" className="header">
        About us
      </Heading>

      <Heading variant="p" className="info_text">
        Serious is a top web design agency and software development company with
        a large pool of software developers available for dedicated and fixed
        time/cost projects. с Hire web developers from Serious who have proven
        expertise in trending web technologies like PHP, Laravel, ReactJS,
        VueJS, Node.js, Python to develop custom and responsive websites, web
        apps and eCommerce solutions. We proactively consult, design, develop
        web, mobile & custom software solutions, that fuel innovation & deliver
        digital success!
      </Heading>
    </div>
  );
};
