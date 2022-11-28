import React from 'react'
import Box from '@mui/material/Box';
import '../Style/tagSkills.css'
import Typography from '@mui/material/Typography';

function tagSkills() {
  return (
<>

    <Typography className='title' variant='h3' sx={{color:'#3F3F3F' , fontWeight:'bold' , justifyContent:'center', display:'flex', paddingTop:'4rem' , paddingBottom:'2rem',marginTop:'4em'}}>Skills</Typography>

      <Box className="content">

        <Box className="container-skillbar">
            <Box className='Group1'>

            <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Communication Skills</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>

            <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Work Under Pressure</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>

            <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Self-Motivation</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>

            <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Time management</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>
            </Box>
            <Box className='Group2'>
          <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Adaptability</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>

          <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Leadership</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>

          <Box className="skillbar clearfix " >
            <Box className="skillbar-title" sx={{background:"#6883BA"}}>Teamwork</Box>
            <Box className="skillbar-bar" sx={{background:"#6883BA"}}></Box>
            {/* <Box className="skill-bar-percent">90%</Box> */}
          </Box>
            </Box>
        </Box>
      </Box>

</>
  )
}
export default tagSkills;