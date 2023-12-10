import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../Style/projects.css'
import LoqProject from '../Assets/Screenshot 1444-05-18 at 10.24.13 AM.png'
import GameProject from '../Assets/game.png'
import KnozeProject from '../Assets/knoze.png'
import BlockChine from '../Assets/BlockChine.png'
import samaDashboard from '../Assets/samaDahsboard.jpg'
import DesignSystem from '../Assets/coverDesignSystem.jpg'
function projects(){
  const projectData = [
    {
      img: LoqProject,
      title: 'Loqean',
      tag: 'Android Studio',
      des: 'Mobile application that use IOT and sensor that aims to helps users find their lost and misplaced items by allowing them to monitor the location of each item and track them.',
      large:false, 
    },
    {
      img: GameProject,
      title: 'Project Managment Game',
      tag: 'React & Node js',
      des: 'Project Management(PM) Game,containing PM cases based on the player’s answer.There are more than 15 flow with 45sec for each question.At the end the rank and score will display for the players.', 
      large:true, 
     },
    {
      img: KnozeProject,
      title: 'Knoze PoC',
      tag: 'React',
      des: 'Knoze website display the latest news and all news and if you choose any news will move to the article page',  
      large:true,
    },
    {
      img: BlockChine,
      title: 'BlockChine PoC',
      tag: 'HTML5 & CSS & JS',
      des: 'A website helps human resources(HR) to review applicants and also, helps users review all companies. The main advantage is that no one can modify or remove and that is why using blockchain.',  
      large:true,
    },
    {
      img: samaDashboard,
      title: 'Dashboard',
      tag: 'Figma',
      des: 'A dashboard website presents an overview of the systems status through various views, such as dashboard and cards. It also offers filtering options for today, this week, this month, and this year.',  
      large:true,
    },
    {
      img: DesignSystem,
      title: 'Design System',
      tag: 'Figma',
      des: 'A design system for an iOS delivery app that includes icons, media, colors, fonts, components, system grid, and space.',  
      large:true,
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
      {project.large ?
       <img className='large' src={`${project.img}?w=248&fit=crop&auto=format`}></img>
      :
       <img className='notlarge' src={`${project.img}?w=248&fit=crop&auto=format`}></img>
       
    }

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