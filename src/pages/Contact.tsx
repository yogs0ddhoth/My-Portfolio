import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ContactForm from '../components/Contact'

export const Contact = () => (
  <Card className='
      opacity-95 drop-shadow-icon
      col-span-10
      grid grid-cols-12 grid-rows-6 justify-center
    '
  >
      <Typography variant='h5' 
        className='
          pl-3 col-span-12 row-span-2
          flex flex-row justify-start items-center
        '
      >
        Contact
      </Typography>
      <Typography variant='h2' className='
          px-3 col-span-12 row-span-3 
          flex flex-row justify-center
        '
      >
        Get in touch with project ideas - software or music!
      </Typography>
      <div 
        className='
          pl-3 pb-5 col-span-12 row-span-1
          flex flex-row justify-center
        '
      >

        <Button href='mailto:blin7.webdev@gmail.com' variant="outlined" size='large'>
          Say Hello
        </Button>
      </div>

    {/* <ContactForm /> */}
  </Card>
);