import cloudIcon from '../assets/Laundry Vector Image.png';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='bg-sky-100 shadow-sm'>
      <div
        className='max-w-6xl mx-auto'
        style={{ paddingLeft: '5px', paddingRight: '10px' }}
      >
        <div className='h-14 flex items-center justify-between'>
          <div className='flex-shrink-0 flex items-center gap-2'>
            <div
              style={{
                width: '20px',
                height: '20px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <img
                src={cloudIcon}
                alt='Cloud Icon'
                style={{
                  width: '20px',
                  height: '20px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <span
              className='text-sm poppins-semibold'
              style={{
                paddingLeft: '5px',
              }}
            >
              The Laundry Room
            </span>
          </div>

          <div className='flex-shrink-0 mx-4'>
            <span className='text-[14px]'>
              521 Ocean Ave, Brooklyn, NY 11226
            </span>
          </div>

          <div className='flex-shrink-0'>
            <div className='phone-container flex items-center'>
              <Phone
                size={12}
                strokeWidth={2.5}
                color='#458ab6'
                fill='#458ab6'
              />
              <span
                className='text-[13px]'
                style={{
                  paddingLeft: '5px',
                }}
              >
                (347) 555-0723
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
