import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

import GitHub from '@mui/icons-material/GitHub';
import '../assets/css/style.css';
import { projectData } from '../assets/utils/project-data';

export const Portfolio = (props: {matchDownMd: boolean, matchUpLg: boolean}) => {

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
            <Typography variant={'h2'} >
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
                  <a href={project.deployedApp}>
                    {project.name}
                  </a>
                }
                subtitle={
                  <div>
                    <p>{project.description}</p>
                    <p>{project.technologies}</p>
                  </div>
                }
                sx={{ whiteSpace: "normal"}}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    // aria-label={`info about ${project.title}`}
                  >
                    <a href={project.deployedApp}>
                      <GitHub />
                    </a>
                  </IconButton>
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