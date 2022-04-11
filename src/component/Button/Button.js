import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.scss';

export const Button = ({
  children,
  clickHandler,
  className,
  disabled = false,
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={clsx(className, styles.Button, disabled && styles.BtnDisabled)}
    >
      {children}
    </button>
  );
};
