import React from 'react';

import './ClientItem.css';

export const ClientItem = ({ clientsvg }) => {
  return (
    <div className="clientItem">
      <div className="clientItem__img">{clientsvg}</div>
    </div>
  );
};
