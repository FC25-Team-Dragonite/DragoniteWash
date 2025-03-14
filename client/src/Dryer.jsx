import React, { Component } from 'react';
import Dryer from './assets/Dryer.png';

class DryerIcon extends Component {
  render() {
    return (
      <div className='motion-reduce: animate-bounce w-16 h-16 mr-10'>
        <img src={Dryer} alt='Washer Icon' className='w-3/4 h-3/4' />
      </div>
    );
  }
}

export default DryerIcon;
