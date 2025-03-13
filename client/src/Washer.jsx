import React, { Component } from 'react';
import Washer from './assets/Washer.png';

class WasherIcon extends Component {
  render() {
    return (
      <div className='animate-bounce w-16 h-16'>
        <img src={Washer} alt='Washer Icon' className='w-full h-full' />
      </div>
    );
  }
}

export default WasherIcon;
