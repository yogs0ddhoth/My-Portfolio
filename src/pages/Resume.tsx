import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import resume from '../assets/resume/resume-data.json'
import benLinResume from '../assets/resume/Ben-Lin-Resume.pdf';

import Page from '../components/Page';
import ResumeTabs from '../components/Resume';

export default function Resume({
  matchDownXs,
  matchDownMd,
}: {
  matchDownXs: Boolean;
  matchDownMd: boolean;
}) {
  return (
    <Page
      header={{
        title: (
          <Typography variant={matchDownXs ? 'h3' : 'h1'}>Resume</Typography>
        ),
        subheader: <Typography variant="subtitle1">Skills</Typography>,
      }}
      content={<ResumeTabs matchDownMd={matchDownMd} resume={resume} />}
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
