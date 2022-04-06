import React from "react";
import { ClientItem } from "./component/ClientItem";
import Slide from "react-reveal/Slide";

import "./Clients.css";

export const Clients = () => {
  return (
    <Slide left>
      <div className="clients_main">
        <div className="container_left">
          <ClientItem />
        </div>
        <div className="container_between">
          <div className="container_between_up">
            <ClientItem />
            <ClientItem />
            <ClientItem />
          </div>
          <div className="container_text">
            <div className="container_title">
              Meet just some of the clients who <br />
              have chosen PRI
            </div>
          </div>
          <div className="container_between_down">
            <ClientItem />
            <ClientItem />
            <ClientItem />
          </div>
        </div>
        <div className="container_right">
          <ClientItem />
        </div>
      </div>
    </Slide>
  );
};
