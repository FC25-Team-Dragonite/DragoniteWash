import React from 'react';
import WasherIcon from '../../src/Washer';
import '../.././index.css';

const LandingPage = () => {
  return (
    <div className='flex flex-row'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <br></br>
      <div>
        <WasherIcon />
      </div>
      <div>
        <WasherIcon />
      </div>{' '}
      <div>{/* <Washer /> */}</div> <div>{/* <Washer /> */}</div>{' '}
      <div>{/* <Washer /> */}</div>{' '}
    </div>
  );
};

export default LandingPage;
