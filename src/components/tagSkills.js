import React from 'react'
import Box from '@mui/material/Box';
import '../Style/tagSkills.css'
import Typography from '@mui/material/Typography';

function tagSkills() {
    const softSkills = [
        {
          skill: 'Communication Skills',
        },
        {
            skill: 'Work Under Pressure',  
         },
        {
            skill: 'Self-Motivation',
        },
        {
            skill: 'Time management',
        },
        {
            skill: 'Adaptability',  
         },
        {
            skill: 'Leadership',
        },
        {
            skill: 'Teamwork ',
        },
      ];
    const technicalSkills = [
        {
          skill: 'Java Programmer',
        },
        {
            skill: 'React',  
         },
        {
            skill: 'Angular',
        },
        {
            skill: 'Node JS',
        },
        {
          skill: 'Android Studio',
        },
        {
            skill: 'Adobe XD',  
         },
        {
            skill: 'Adobe Illustrator',
        },
        {
            skill: 'Figma',
        },
        {
          skill: 'GitHub',
        },
        {
            skill: 'JSON',
        },
      ];
      
  return (
<>

    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>Skills</Typography>

      <Box className="content">
        <Box className='part1'> 
      <Typography  variant='h6' sx={{bgcolor:'#D9186A',color:'#fff' , fontWeight:'bold' , justifyContent:'center', display:'flex',writingMode:'tb-rl'}}>Soft</Typography>

        <Box className="container-skillbar">
        {softSkills.map((skill) => (

            <Box className="skillbar clearfix ">
            <Box className="skillbar-title" sx={{background:"#F2E2E3"}}>{skill.skill}</Box>
            <Box className="skillbar-bar" sx={{background:"#F2E2E3"}}></Box>
          </Box>

            ))}
        </Box>
        </Box>
        <Box className='part1' sx={{paddingTop:'2em'}}> 
        <Typography  variant='h6' sx={{bgcolor:'#D9186A',color:'#fff' , fontWeight:'bold' , justifyContent:'center', display:'flex', writingMode: 'vertical-lr',textOrientation: 'upright'}}>Technical</Typography>

        <Box className="container-skillbar">
        {technicalSkills.map((skill) => (

            <Box className="skillbar clearfix ">
            <Box className="skillbar-title" sx={{background:"#F2E2E3"}}>{skill.skill}</Box>
            <Box className="skillbar-bar" sx={{background:"#F2E2E3"}}></Box>
          </Box>

            ))}
        </Box>
        </Box>
      </Box>

</>
  )
}
export default tagSkills;