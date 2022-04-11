import React from 'react';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import { Heading } from '../../component/Heading/Heading';
import { TECHNOLOGIES } from './constants/constants';

import './Technologies.css';

export const Technologies = () => {
  const { t } = useTranslation();

  return (
    <Slide left>
      <div className="technologies_wrapper">
        <div>
          <Heading variant="h1" className="header technologies_header">
            {t('technologies')}
          </Heading>
        </div>
        <div className="technologies">
          <div className="technologies_items">
            <div className="technologies_Info">
              {TECHNOLOGIES.map(({ name, img }) => (
                <div key={name}>
                  <div> {img} </div>
                  <div> {name} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
