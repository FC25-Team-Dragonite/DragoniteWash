import Washer from '../../src/Washer';
const LandingPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <svg class='animate-bounce w-6 h-6 ...'>
        <div>
          <Washer />
        </div>
      </svg>
      <div>
        <Washer />
      </div>{' '}
      <div>
        <Washer />
      </div>{' '}
      <div>
        <Washer />
      </div>{' '}
      <div>
        <Washer />
      </div>{' '}
    </div>
  );
};

export default LandingPage;
