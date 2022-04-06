import React, { useMemo } from "react";
import { Heading } from "../../component/Heading/Heading";
import Slide from "react-reveal/Slide";

import { ReactComponent as JavaScript } from "../../Img/Technologies/javascript.svg";
import { ReactComponent as ReactTech } from "../../Img/Technologies/react.svg";
import { ReactComponent as ReactNative } from "../../Img/Technologies/react.svg";
import { ReactComponent as Mysql } from "../../Img/Technologies/icons8-mysql-logo.svg";
import { ReactComponent as Amazon } from "../../Img/Technologies/icons8-amazon.svg";
import { ReactComponent as Azure } from "../../Img/Technologies/icons8-azure.svg";
import { ReactComponent as Angularjs } from "../../Img/Technologies/icons8-angularjs.svg";
import { ReactComponent as NodeJS } from "../../Img/Technologies/icons8-node-js.svg";
import { ReactComponent as Google } from "../../Img/Technologies/icons8-google.svg";
import { ReactComponent as Django } from "../../Img/Technologies/icons8-django.svg";
import { ReactComponent as Kotlin } from "../../Img/Technologies/icons8-kotlin.svg";
import { ReactComponent as PhpLogo } from "../../Img/Technologies/icons8-php-logo.svg";
import { ReactComponent as Postgresql } from "../../Img/Technologies/icons8-postgresql.svg";
import { ReactComponent as Python } from "../../Img/Technologies/icons8-python.svg";
import { ReactComponent as Vue } from "../../Img/Technologies/icons8-vue-js.svg";

import "./Technologies.css";

export const Technologies = () => {
  const technologiesOne = useMemo(() => [
    { name: "JavaScript", img: <JavaScript /> },
    { name: "React", img: <ReactTech /> },
    { name: "React Native", img: <ReactNative /> },
    { name: "Mysql", img: <Mysql /> },
    { name: "Amazon", img: <Amazon /> },
    { name: "Azure", img: <Azure /> },
    { name: "Angular js", img: <Angularjs /> },
    { name: "NodeJS", img: <NodeJS /> },
  ]);
  const technologiesTwo = useMemo(() => [
    { name: "Google", img: <Google /> },
    { name: "Django", img: <Django /> },
    { name: "Kotlin", img: <Kotlin /> },
    { name: "PhpLogo", img: <PhpLogo /> },
    { name: "Python", img: <Python /> },
    { name: "Vue", img: <Vue /> },
    { name: "Postgresql", img: <Postgresql /> },
  ]);
  return (
    <Slide left>
      <div className="tex_Info">
        <Heading variant="h1" className="header technologies_header">
          Technologies
        </Heading>
        <div className="technologies">
          <div classname="technologies_items">
            <div>
              <ul className="technologies_Info">
                {technologiesOne.map((item, index) => {
                  return (
                    <li key={index}>
                      <div> {item.img} </div>
                      <div> {item.name} </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="technologiesTwo_Info">
                {technologiesTwo.map((item, index) => {
                  return (
                    <li key={index}>
                      <div> {item.img} </div>
                      <div> {item.name} </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
