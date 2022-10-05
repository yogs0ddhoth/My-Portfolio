import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../components/Resume'
import benLinResume from '../assets/resume/Ben-Lin_Resume.pdf';

import '../assets/css/style.css';

export const Resume = ({matchDownSm}: {matchDownSm: boolean}) => (
  <Card className='
      opacity-95 drop-shadow-icon
      col-span-10
      grid grid-cols-12 grid-rows-6 justify-center
    '
  >
    <Typography variant='h1' className='pl-3 col-span-12 row-span-1'>
      Skills
    </Typography>

    <div className='pl-5 pr-5 col-span-12 row-span-4'>
      <VerticalTabs matchDownSm={matchDownSm} />
    </div>

    <div className='
        pr-5 justify-items-end
        col-span-12 row-span-1
        flex justify-end items-center
      '
    >
      <a href={benLinResume} download>
        <Button variant="outlined" size='large'>
          Download
        </Button>
      </a>
    </div>
  </Card>
);