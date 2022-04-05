import React from "react";
import "./ServicesComponentRow.css";

export const ServicesComponentRow = (props) => {
  return (
    <div className="main_servis">
      <div className={props.class_name}>
        <div className="servis-img">{props.img}</div>

        <div className="servis-text">
          <span className="mainTitle">{props.mainTitle}</span>
          <span className="subtitle">{props.mainTitle2}</span>
          <span className="secondText">{props.text}</span>
        </div>
        
      </div>
    </div>
  );
};
