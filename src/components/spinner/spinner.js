import React from 'react';

import './spinner.css'

const Spinner = () => {
  return (
    <div className='overlay-loader'>
      <div className='loader'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
