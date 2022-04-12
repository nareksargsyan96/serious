import React from 'react';
import Slide from 'react-reveal/Slide';

import { ReactComponent as JavaScript } from '../../assets/images/Technologies/javascript.svg';
import { ClientItem } from './component/ClientItem';

import './Clients.css';

export const Clients = () => {
  return (
    <Slide left>
      <div className="clients_main">
        <div className="container_left">
          <ClientItem clientsvg={<JavaScript />} />
        </div>
        <div className="container_between">
          <div className="container_between_up">
            <ClientItem clientsvg={<JavaScript />} />
            <ClientItem clientsvg={<JavaScript />} />
            <ClientItem clientsvg={<JavaScript />} />
          </div>
          <div className="container_text">
            <div className="container_title">
              Meet just some of the clients who <br />
              have chosen PRI
            </div>
          </div>
          <div className="container_between_down">
            <ClientItem clientsvg={<JavaScript />} />
            <ClientItem clientsvg={<JavaScript />} />
            <ClientItem clientsvg={<JavaScript />} />
          </div>
        </div>
        <div className="container_right">
          <ClientItem clientsvg={<JavaScript />} />
        </div>
      </div>
    </Slide>
  );
};
