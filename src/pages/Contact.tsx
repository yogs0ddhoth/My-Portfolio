import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ContactForm from '../components/Contact'

export default function Contact() {
  return (
    <Card className='
      opacity-95 drop-shadow-icon
      col-span-10
      grid grid-cols-12 grid-rows-6 justify-center
      '
    >
      <div className='row-span-1' />
  
      {/* <Typography variant='h2' className='
        pl-3 col-span-12 row-span-2 pt-5
        flex flex-row justify-center
        '
      >
        Contact
      </Typography> */}
  
      <Typography variant='h2' className='
        px-3 col-span-12 row-span-3
        flex flex-row justify-center text-center
        '
      >
        Get in touch with project ideas!
      </Typography>
  
      <div className='
        pl-3 col-span-12 row-span-1
        flex flex-row justify-center
        '
      >
        <Button href='mailto:blin7.webdev@gmail.com' variant="outlined" size='large'>
          Say Hello
        </Button>
      </div>
      <div className='row-span-1' />
      {/* <ContactForm /> */}
    </Card>
  );
}