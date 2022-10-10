import Card from '@mui/material/Card';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import GitHub from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Project from '../components/Project';
// import '../assets/css/style.css';
import { Projects } from '../assets/project-data';

export default function(props: {matchDownMd: boolean, matchUpLg: boolean}) {

  console.log(Projects);
  return (
    // <div className='col-span-12'>
      <ImageList 
        variant="masonry" 
        cols={props.matchDownMd ? 1 : props.matchUpLg ? 3 : 2} 
        gap={8}
        // sx={{ display: "grid", gridTemplateColumns:{xs: 3, md:4} }}
      >
        <ImageListItem key="Subheader" className='w-full'>
          <Card className='
            opacity-95 drop-shadow-icon
            flex flex-row justify-center
            '
          >
            <Typography variant='h2'>My Work</Typography>
          </Card>
        </ImageListItem>
        {Projects.map(
          project => <Project {...project} />
        )}
      </ImageList>
    // </div>
  )
};