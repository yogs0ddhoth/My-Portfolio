import React, { useState }from 'react';
import { ProjectType } from '../../utils/Types';

import { Card, Popover } from '@mui/material';
// import '../../assets/css/index.css';
// import '../../assets/css/style.css';
import '../../assets/css/Project.css';

// export default function Project(props: ProjectType) {
//   return (
//     <div 
//       // className='project col-12 col-md-5'
//     >
//       <a href={props.deployedApp} className=''>
//         <img src={props.img} alt={props.description} />
//       </a>
//       <div>
//         <h4>{props.name}</h4>
//         <p>{props.description}</p>
//         <p>{props.technologies}</p>
//         <a href={props.repoLink}>Link to Repository</a>
//       </div>
//     </div>
//   )
// };