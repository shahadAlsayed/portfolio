import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../Style/projects.css'
import Logo from '../Assets/logo.png'
import LoqeanLogo from '../Assets/loqeanLogo.png'

function projects(){
  const projectData = [
    {
      img: LoqeanLogo,
      title: 'Loqean',
      tag: 'Android Studio',
      des: 'Mobile application that use IOT and sensor that aims to helps users find their lost and misplaced items by allowing them to monitor the location of each item and track them.',
    },
    {
      // img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      img: LoqeanLogo,
      title: 'Project2',
      tag: 'Andriod Studio',
      des: 'Here will be inShallah the des for Project2',   
     },
    {
      // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      img: Logo,
      title: 'Project3',
      tag: 'Adobe XD',
      des: 'Here will be inShallah the des for Project3',  
    },
    {
      // img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      img: Logo,
      title: 'Project4',
      tag: 'Adobe XD',
      des: 'Here will be inShallah the des for Project4',  
    },
  ];
  
  return (  

    <section id="projectsSection">
    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>Projects</Typography>
    <Box sx={{display:'flex',justifyContent:'center'}}>
      
    <Box  className="container">
    {projectData.map((project,index) => (
    <Box className="card" key={index}>
    <Box className='imgBx' >
      <img src={`${project.img}?w=248&fit=crop&auto=format`}></img>
    </Box>
    <Box className="contentBx" >
      <h2>{project.title}</h2>
      <Box className="tag">
      {project.tag}
      </Box>
      <Box className="des">
        {project.des}
      </Box>
    </Box>
  </Box>
  ))}
</Box>
    </Box>
    </section>
  )
}

export default projects;