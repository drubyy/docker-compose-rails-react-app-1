import React from 'react';

import Navbar from '../headers/Navbar';

import '../../css/components/layouts/default.css';

function DefaultLayout({childComponent}) {
  return (
    <div className='default-layout-wrapper'>
      <Navbar/>
      <div className='default-layout-body'>
        {childComponent}  
      </div>
    </div>
  );
}

export default DefaultLayout;