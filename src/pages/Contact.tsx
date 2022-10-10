import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Page from '../components/Page';

export default function () {
  return (
    <Page
      content={
        <Typography variant="h2">Get in touch with project ideas!</Typography>
      }
      actions={
        <Button
          href="mailto:blin7.webdev@gmail.com"
          variant="outlined"
          size="large"
        >
          Say Hello
        </Button>
      }
    />
  );
}
