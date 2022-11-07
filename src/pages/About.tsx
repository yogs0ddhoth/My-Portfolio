import Typography from '@mui/material/Typography';

import Page from '../components/Page';

export default function About() {
  return (
    <Page
      className=''
      header={{
        title: (
          <Typography variant="h4" 
            className='md:pl-11'
            // alignContent="center"
          >
            Hi, my name is
          </Typography>
        ),
        subheader: 
          <Typography variant="h1" 
            className='md:pl-11'
          >
            Ben Lin
          </Typography>,
      }}
      content={
        <Typography variant="h5" 
          className='md:pl-11'
        >
          I compose software. Enjoy my portfolio!
        </Typography>
      }
    />
  );
}
