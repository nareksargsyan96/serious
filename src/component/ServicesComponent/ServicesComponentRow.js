import React from 'react';
import './ServicesComponentRow.css';

export const ServicesComponentRow = ({ class_name, img, mainTitle, mainTitle2, text }) => {
  return (
    <div className="main_servis">
      <div className={class_name}>
        <div className="servis-img">{img}</div>

        <div className="servis-text">
          <span className="mainTitle">{mainTitle}</span>
          <span className="subtitle">{mainTitle2}</span>
          <span className="secondText">{text}</span>
        </div>
      </div>
    </div>
  );
};
