import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import benLinResume from '../assets/resume/Ben-Lin_Resume.pdf';

import Page from '../components/Page';
import VerticalTabs from '../components/Resume';

export default function ({ matchDownSm }: { matchDownSm: boolean }) {
  return (
    <Page
      header={{
        title: <Typography variant="h1">Resume</Typography>,
        subheader: <Typography variant="subtitle1">Skills</Typography>,
      }}
      content={<VerticalTabs matchDownSm={matchDownSm} />}
      actions={
        <a href={benLinResume} download>
          <Button className="" variant="outlined" size="large">
            Download
          </Button>
        </a>
      }
    />
  );
}
