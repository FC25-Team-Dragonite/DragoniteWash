import React, { Component } from 'react';
import LargeWasher from './assets/LargeWasher.png'

class LargeWasherIcon extends Component {
  render() {
    return (
      <>
        <style>
          {`
            @keyframes small-bounce {
              0%, 100% { transform: translateY(-5px); } /* Moves up just 5px */
              50% { transform: translateY(0px); } /* Resets to normal */
            }
          `}
        </style>
        <div className='w-16 h-16 mr-10 animate-[bounce_1s_ease-in-out_infinite] [animation-name:small-bounce]'>
          <img src={LargeWasher} alt='Washer Icon' className='w-3/4 h-3/4' />
        </div>
      </>
    );
  }
}

export default LargeWasherIcon;
