import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-sky-100'>
      <Navbar />
      <main className='container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-3.5rem)]'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-3xl'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
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
                <td className='px-6 py-4 text-sm text-gray-900'>Available</td>
              </tr>
              <tr>
                <td className='px-6 py-4 text-sm text-gray-900'>Dryer</td>
                <td className='px-6 py-4 text-sm text-gray-900'>$2.00</td>
                <td className='px-6 py-4 text-sm text-gray-900'>Available</td>
              </tr>
              <tr>
                <td className='px-6 py-4 text-sm text-gray-900 rounded-bl-xl'>
                  Large Washer
                </td>
                <td className='px-6 py-4 text-sm text-gray-900'>$4.50</td>
                <td className='px-6 py-4 text-sm text-gray-900 rounded-br-xl'>
                  In Use
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
