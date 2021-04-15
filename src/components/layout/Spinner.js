import React from 'react';

const Spinner = () => (
  <div style={pageStyles.icon}>
    <i className='fa fa-cog fa-spin fa-3x fa-fw'></i>
    <span className='sr-only'>Loading...</span>
  </div>
);

const pageStyles = {
  icon: {
    position: 'absolute',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
  },
};

export default Spinner;
