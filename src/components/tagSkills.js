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
        {
            skill: 'HTML5',
        },
        {
          skill: 'CSS',
        },
        {
            skill: 'JS',
        },
      ];
      
  return (

<section id="skillsSection"> 

    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em',marginBottom:'2em'}}>Skills</Typography>

      <Box className="content" sx={{display:'flex',flexDirection:'row',width:'80%'}}>
        <Box className='part1' sx={{width:'50%',borderRight:'6px solid #d9186a'}}> 
      <Typography className='subTitle'  variant='h6' sx={{bgcolor:'#D9186A',color:'#fff' , fontWeight:'bold',width:'50%',display:'flex',justifyContent:'center'}}>Soft</Typography>

        <Box className="container-skillbar">
        {softSkills.map((skill) => (

            <Box className="skillbar clearfix ">
            <Box className="skillbar-title" sx={{background:"#F2E2E3"}}>{skill.skill}</Box>
            {/* <Box className="skillbar-bar" sx={{background:"#F2E2E3"}}></Box> */}
          </Box>

            ))}
        </Box>
        </Box>
        <Box className='part1' sx={{width:'50%'}}> 
        <Typography className='subTitle' variant='h6' sx={{bgcolor:'#D9186A',color:'#fff' , fontWeight:'bold',width:'50%',display:'flex',justifyContent:'center'}}>Technical</Typography>

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
      </section>

  )
}
export default tagSkills;