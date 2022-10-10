import Typography from '@mui/material/Typography';

import Page from '../components/Page';

export default function () {
  return (
    <Page
      header={{
        title: <Typography variant="h4"> Hi, my name is </Typography>,
        subheader: <Typography variant="h1">Ben Lin</Typography>,
      }}
      content={
        <Typography variant="h5">
          I compose software. Enjoy my portfolio!
        </Typography>
      }
    />
  );
}
