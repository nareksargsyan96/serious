import React from "react";

import "./ClientItem.css";

export const ClientItem = (props) => {
  return (
    <div className="clientItem" >
      <div className="clientItem__img">{props.clintsvg}</div>
    </div>
  );
};
