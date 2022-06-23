import React from 'react';
import '../assets/css/index.css';
import '../assets/css/style.css';
import '../assets/css/Portfolio.css';

import { ProjectType } from '../utils/Types';
import Project from '../components/Project';

const {projectData} = require('../assets/utils/project-data');

export default function Contact(props: {}) {
  console.log(projectData);
  return (
    <div className='portfolio col-12 flex-row'>

      <h2 className='title col-12 pb-2 align-start'>My Work</h2>
      <div className='projects align-start flex-row justify-center '>
        {
          projectData.map(
            (project: ProjectType) => (
              <Project 
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              repoLink={project.repoLink}
              deployedApp={project.deployedApp}
              img={project.img}
              />
            )
          )
        }
      </div>
    </div>
  )
};