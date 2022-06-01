import React from 'react';
// import avatar from '../images/avatar.png';
import '../assets/css/index.css';
import '../assets/css/style.css';

export default function About(props) {
  const imgStyle = { borderRadius: '50%' };

  return (
    <div className='col-12 flex-row'>
      <h2 className='title col-12 align-start'>About Me</h2>
      {/* <img src={avatar} alt='Avatar' className='theme-1 col-3 col-2-md col-1-lg' style={imgStyle}/> */}
      <p className='col-12'>
        Composer, Full Stack Web Developer; 
        <br />
        Crafting quality and intuitively coded applications.
      </p>
    </div>
  )
};