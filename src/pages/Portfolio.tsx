import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import GitHub from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import '../assets/css/style.css';
import { projectData } from '../assets/project-data';
import { Tooltip } from '@mui/material';

export default function Portfolio(props: {matchDownMd: boolean, matchUpLg: boolean}) {

  console.log(projectData);
  return (
    <div className='col-span-12'>
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
            <Typography variant='h2' >
              My Work
            </Typography>
          </Card>
        </ImageListItem>
        {
          projectData.map(project => (
            <ImageListItem key={project.img}>
              <img
                src={`${project.img}?w=248&fit=crop&auto=format`}
                srcSet={`${project.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={project.name}
              />
              <ImageListItemBar
                title={
                  <Tooltip placement='bottom-start'
                    title={
                      <a href={project.deployedApp}
                        className='hover:underline'
                      >
                        Link to Deployed App
                      </a>
                    }
                  >
                    <a href={project.deployedApp}>
                      <Typography variant='h5'
                        className='underline hover:text-pink-500'
                      >
                        {project.name}
                      </Typography>
                    </a>
                  </Tooltip>
                }
                subtitle={
                  <>
                    <Typography variant='subtitle1'>{project.description}</Typography>
                    <Typography variant='subtitle2' className='whitespace-normal'>{project.technologies}</Typography>
                  </>
                }
                sx={{ whiteSpace: "normal"}}
                actionIcon={
                  <Tooltip placement='bottom'
                    title={
                      <a href={project.repoLink}
                        className='hover:underline'
                      >
                        Link to Repository
                      </a>
                    }
                  >
                    <a href={project.repoLink}>
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        // aria-label={`info about ${project.title}`}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                actionPosition="right"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </div>
  )
};