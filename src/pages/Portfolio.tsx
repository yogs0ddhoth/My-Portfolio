import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

import Project from '../components/Project';
import { Projects } from '../assets/project-data';
import Page from '../components/Page';

export default function Portfolio({
  matchDownMd,
  matchUpLg,
}: {
  matchDownMd: boolean;
  matchUpLg: boolean;
}) {
  return (
    <ImageList
      className="pb-4"
      variant="masonry"
      cols={matchDownMd ? 1 : matchUpLg ? 3 : 2}
      gap={8}
    >
      <ImageListItem key="Subheader" className="w-full">
        <Page
          className="
            opacity-95 drop-shadow-icon
            flex flex-row justify-center
            "
        >
          <Typography variant="h2">My Work</Typography>
        </Page>
      </ImageListItem>

      {Projects.map((project) => (
        <Project {...project} />
      ))}
    </ImageList>
  );
}
