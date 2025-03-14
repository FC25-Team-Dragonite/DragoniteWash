import Navbar from '../components/Navbar';
import WasherIcon from '../Washer';
import DryerIcon from '../Dryer';
import LargeWasherIcon from '../LargeWasher';

// import '../.././index.css';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-sky-100'>
      <Navbar />
      <main className='container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-3.5rem)]'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl'>
          <table className='w-full'>
            <thead className='bg-gray-50 justify-center'>
              <tr>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 rounded-tl-xl'>
                  Machine Type
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  Price
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500 rounded-tr-xl'>
                  Availability
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              <tr>
                <td className='px-6 py-4 text-sm text-gray-900'>Washer</td>
                <td className='px-6 py-4 text-sm text-gray-900'>$2.50</td>
                <td className='px-6 py-4 text-sm text-gray-900'>
                  <div className='flex flex-wrap gap-4'>
                    <WasherIcon />
                    <WasherIcon />
                    <WasherIcon />
                    {/* <div className='relative group'> */}
                    <WasherIcon />
                    {/* <div className='absolute bg-gray-800 text-white text-xs p-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all transform duration-300'>
                        // This is a blurb for the Washer Icon! */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 text-sm text-gray-900'>Dryer</td>
                <td className='px-6 py-4 text-sm text-gray-900'>$2.00</td>
                <td className='px-6 py-4 text-sm text-gray-900'>
                  <div className='flex flex-wrap gap-4'>
                    <DryerIcon />{' '}
                  </div>
                </td>
              </tr>
              <tr>
                <td className='px-6 py-4 text-sm text-gray-900 rounded-bl-xl'>
                  Large Washer
                </td>
                <td className='px-6 py-4 text-sm text-gray-900'>$4.50</td>
                <td className='px-6 py-4 text-sm text-gray-900 rounded-br-xl'>
                  <div className='flex flex-wrap gap-4'>
                    {' '}
                    <LargeWasherIcon />
                    <LargeWasherIcon />
                    <LargeWasherIcon />
                    <LargeWasherIcon />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
