import React from 'react';
import Slide from 'react-reveal/Slide';
import { Heading } from '../../../component/Heading/Heading';
import { PROCESS } from '../constants/constants';

import './Process.css';

export const Process = () => {
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
            {PROCESS.map((item) => {
              return (
                <div className="">
                  <div className="process_icons">
                    <div>{item.svg}</div>
                    <h1 className="title">{item.title}</h1>
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
