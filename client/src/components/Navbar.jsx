import cloudIcon from '../assets/Cloud SVG.png';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='bg-sky-100 shadow-sm'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='h-14 flex items-center justify-between'>
          <div className='flex-shrink-0'>
            <span className='text-sm'>The Laundry Room</span>
          </div>

          <div className='flex-shrink-0 mx-4'>
            <span className='text-sm'>521 Ocean Ave, Brooklyn, NY 11226</span>
          </div>

          <div className='flex-shrink-0'>
            <div className='phone-container flex items-center'>
              <Phone size={12} strokeWidth={2.5} className='mr-3' />
              <span className='text-sm'>(347) 555-0723</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
