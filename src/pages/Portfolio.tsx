import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

import ExitToApp from '@mui/icons-material/ExitToApp';
import GitHub from '@mui/icons-material/GitHub';

// import Masonry from '@mui/lab/Masonry';

import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../assets/css/index.css';
import '../assets/css/style.css';
import '../assets/css/Portfolio.css';

// import { ProjectType } from '../utils/Types';
// import Project from '../components/Project';

import { projectData } from '../assets/utils/project-data';

export const Portfolio = (props: {}) => {

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md")); // < 600px
  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg")); // > 1200px


  console.log(projectData);
  return (
    // <div className='portfolio col-12 flex-row'>

    //   <h2 className='title col-12 pb-2 align-start'>My Work</h2>
    //   <div className='projects align-start flex-row justify-center '>
    //     {
    //       projectData.map(
    //         (project: ProjectType) => (
    //           <Project 
    //           name={project.name}
    //           description={project.description}
    //           technologies={project.technologies}
    //           repoLink={project.repoLink}
    //           deployedApp={project.deployedApp}
    //           img={project.img}
    //           />
    //         )
    //       )
    //     }
    //   </div>
    // </div>

    <ImageList 
      variant="masonry" 
      cols={matchDownMd ? 1 : matchUpLg ? 3 : 2} 
      gap={8}
      // sx={{ display: "grid", gridTemplateColumns:{xs: 3, md:4} }}
    >
      <ImageListItem key="Subheader">
        <div>My Work</div>
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
  )
};