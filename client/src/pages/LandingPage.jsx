import Navbar from '../components/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import sparkleIcon from '../assets/Sparkle Icon.gif';
import heroImage from '../assets/White Washer Dryer Photo.avif';

function createData(machine, price, availability) {
  return { machine, price, availability };
}

const rows = [
  createData(
    'Regular Load Washer',
    '$2.50',
    <WasherIcon />,
    <WasherIcon />,
    <WasherIcon />
  ),
  createData('Large Load Washer', '$4.50', <LargeWasherIcon />),
  createData('Dryer', '$0.25 per 15 minutes', <DryerIcon />),
];
import WasherIcon from '../Washer';
import DryerIcon from '../Dryer';
import LargeWasherIcon from '../LargeWasher';

// import '../.././index.css';

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-sky-100' style={{ marginBottom: '40px' }}>
      <Navbar />
      <main className='container mx-auto px-4'>
        <section className='py-12'>
          <div className='grid grid-cols-2 gap-8'>
            <div
              style={{
                padding: '20px',
                marginBottom: '75px',
                marginTop: '40px',
              }}
            >
              <h1 className='text-[45px] font-bold text-gray-900 m-4'>
                Your First Choice for Hassle-Free Laundry
                <img
                  src={sparkleIcon}
                  alt='Sparkle'
                  className='h-10 w-10'
                  style={{ marginLeft: '5px' }}
                />
              </h1>
              <p
                className='text-[15px] text-gray-600'
                style={{ marginRight: '10px' }}
              >
                Convenience at Your Fingertips – No more waiting around! The
                Laundry Room lets you check machine availability in real time
                and reserve washers and dryers at your convenience.
              </p>
              <div
                style={{
                  backgroundColor: '#c9dff3',
                  color: '#2a4054',
                  width: '300px',
                  borderRadius: '6px',
                }}
              >
                <p className='text-center'>Check our availability below!</p>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src={heroImage}
                alt='Laundry Room Illustration'
                className='w-full h-[325px] object-contain rounded-lg shadow-lg'
              />
            </div>
          </div>
        </section>

        <div className='flex justify-center'>
          <TableContainer
            component={Paper}
            sx={{ maxWidth: '3xl', borderRadius: '12px' }}
          >
            <Table sx={{ minWidth: 650 }} aria-label='laundry machines table'>
              <TableHead>
                <TableRow>
                  <TableCell>Machine</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Availability</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.machine}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      {row.machine}
                    </TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.availability}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
