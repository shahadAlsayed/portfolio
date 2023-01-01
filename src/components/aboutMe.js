import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../Style/aboutMe.css'

function aboutMe() {
  return (
    <section id="aboutSection">
        <Box sx={{paddingTop:'28em'}}>
        <Typography classNameNameName='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'6rem' , paddingBottom:'2rem'}}>About</Typography>
        <Container sx={{display:'flex',flexDirection:'column' ,width:'50%' }}>
        <Typography variant='h6' sx={{color:'#D9186A' , fontWeight:'bold',paddingBottom:'1em' }}>
        DESIGNER & DEVELOPER
        </Typography>
        <Typography variant='h6' sx={{color:'#3F3F3F' , lineHeight:'1.6'}}>
        Bachelor Information Technology, track of Cyber Security. 
        Development and UX are my passion also, interested in Cyber Security.
        One of my life objectives is to share knowledge with others and make a positive changes.
        Have good skills of problem solving and communication skills.
        </Typography>
        </Container>
        </Box>
    </section>
  )
}

export default aboutMe