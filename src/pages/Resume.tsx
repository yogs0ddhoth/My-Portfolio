import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import benLinResume from '../assets/resume/Ben-Lin_Resume.pdf';

import Page from '../components/Page';
import VerticalTabs from '../components/Resume';

export default function ({
  matchDownXs,
  matchDownSm,
}: {
  matchDownXs: Boolean;
  matchDownSm: boolean;
}) {
  return (
    <Page
      header={{
        title: (
          <Typography variant={matchDownXs ? 'h3' : 'h1'}>Resume</Typography>
        ),
        subheader: <Typography variant="subtitle1">Skills</Typography>,
      }}
      content={<VerticalTabs matchDownSm={matchDownSm} />}
      actions={
        <Link underline="none" href={benLinResume} download>
          <Button
            sx={{ textDecoration: 'none' }}
            variant="outlined"
            size="large"
          >
            Download
          </Button>
        </Link>
      }
    />
  );
}
