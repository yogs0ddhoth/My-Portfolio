import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import '../assets/css/style.css';

export default function About() {

  return (
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
        Hi, name is
      </Typography>
      <Typography variant='h2' 
        className='px-3 col-span-12 row-span-3'
      >
        Ben Lin. I'm a fullstack web developer composing software.
      </Typography>
      <Typography variant='h4' 
        className='
          pl-3 col-span-12 row-span-1
          flex flex-row justify-start
        '
      >
        Enjoy at my portfolio!
      </Typography>
      {/* <img src={avatar} alt='Avatar' className='theme-1 col-3 col-2-md col-1-lg' style={imgStyle}/> */}
      {/* <Typography variant='body1' 
        className='pl-3 col-span-12 row-span-4 items-center'
      >
        Composer, Full Stack Web Developer; 
        <br />
        Crafting quality and intuitively coded applications.
      </Typography> */}
    </Card>
  )
};