import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children,isGoogle,isSmall, ...otherProps }) => (
  <button className= {`custom-button ${isGoogle ? 'google': ''} ${isSmall ? 'small': ''} `} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
