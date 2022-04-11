import React from "react";
import Slide from "react-reveal/Slide";
import { ReactComponent as JavaScript } from "../../Img/Technologies/javascript.svg";
import { ClientItem } from "./component/ClientItem";

import "./Clients.css";

export const Clients = () => {
  return (
    <Slide left>
      <div className="clients_main">
        <div className="container_left">
          <ClientItem clintsvg={<JavaScript />} />
        </div>
        <div className="container_between">
          <div className="container_between_up">
            <ClientItem clintsvg={<JavaScript />} />
            <ClientItem clintsvg={<JavaScript />} />
            <ClientItem clintsvg={<JavaScript />} />
          </div>
          <div className="container_text">
            <div className="container_title">
              Meet just some of the clients who <br />
              have chosen PRI
            </div>
          </div>
          <div className="container_between_down">
            <ClientItem clintsvg={<JavaScript />} />
            <ClientItem clintsvg={<JavaScript />} />
            <ClientItem clintsvg={<JavaScript />} />
          </div>
        </div>
        <div className="container_right">
          <ClientItem clintsvg={<JavaScript />} />
        </div>
      </div>
    </Slide>
  );
};
