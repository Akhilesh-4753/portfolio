import React from 'react';

export const Container = ({ children, className = '', style = {} }) => {
  return (
    <div className={`site-container ${className}`} style={style}>
      {children}
    </div>
  );
};
