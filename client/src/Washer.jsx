import React, { Component } from 'react';
import Washer from './assets/Washer.png';

class WasherIcon extends Component {
  render() {
    return (
      <div>
        <img src={Washer} alt='Washer Icon' />
      </div>
    );
  }
}

export default WasherIcon;
